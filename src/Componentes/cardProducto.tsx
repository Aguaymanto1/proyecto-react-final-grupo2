import { useState } from 'react';
import { Producto } from '../util/udefinitions';

export function CardProducto({ producto, actualizarLista, obtenerProductos }: { producto: Producto, actualizarLista: any, obtenerProductos: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productoEdit, setProductoEdit] = useState<Producto | null>(null);

  // Eliminar un producto
  const handleDeleteProducto = (productId: number) => {
    fetch(`https://db-proyecto.onrender.com/api/products/${productId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          actualizarLista(productId);
        } else {
          console.error('Error al eliminar el producto');
        }
      })
      .catch((error) => console.error('Error al eliminar el producto:', error));
  };

  // Abrir la modal y pasar los datos del producto
  const handleEditProducto = (producto: Producto) => {
    setProductoEdit(producto); // Setea el producto que vas a editar
    setIsModalOpen(true);      // Abre la modal
  };

  return (
    <div className='border border-gray-300 text-center p-6 rounded-xl m-2 shadow-lg'>
      <h2 className="text-lg font-bold text-gray-800 mb-2">
        {producto.nombre}
      </h2>

      <p className="text-md text-gray-500 mb-1">
        Precio: S/{producto.precio}
      </p>

      <p className="text-sm text-gray-600 mb-1">
        {producto.descripcion}
      </p>

      <p className={`text-sm mb-3 ${producto.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {producto.stock > 0 ? `Stock: ${producto.stock}` : 'Sin stock'}
      </p>

      <div className="flex justify-center mb-3">
        <img
          width={100}
          src={producto.img}
          alt={producto.nombre}
          className="rounded-md object-cover"
        />
      </div>

      <div className="flex justify-between mt-4 space-x-2">
        <button
          onClick={() => handleDeleteProducto(producto.id)}
          className="bg-[#272B00] hover:bg-red-600 text-white py-2 px-4 rounded-md"
        >
          Eliminar
        </button>
        <button
          onClick={() => handleEditProducto(producto)}
          className="bg-[#272B00] hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Editar
        </button>
      </div>

      {isModalOpen && productoEdit && (
        <ModalEdit
          producto={productoEdit}
          closeModal={() => setIsModalOpen(false)}
          actualizarLista={actualizarLista}
          obtenerProductos={obtenerProductos}
        />
      )}
    </div>
  );
}

// Modal para editar producto
function ModalEdit({ producto, closeModal, actualizarLista, obtenerProductos }: { producto: Producto, closeModal: any, actualizarLista: any, obtenerProductos: any }) {
  const [formData, setFormData] = useState({
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    img: producto.img,
    precio: producto.precio,
    stock: producto.stock,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://db-proyecto.onrender.com/api/products/${producto.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((updatedProduct) => {
        actualizarLista(updatedProduct);
        obtenerProductos();
        closeModal();
      })
      .catch((error) => console.error('Error al actualizar el producto:', error));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Editar Producto</h2>
        <form className="flex flex-col gap-4" onSubmit={handleUpdateProduct}>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            placeholder="Nombre del producto"
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            placeholder="Descripción del producto"
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleInputChange}
            placeholder="URL de la imagen"
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleInputChange}
            placeholder="Precio del producto"
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            placeholder="Stock del producto"
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#272B00] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Actualizar Producto
            </button>
            <button
              type="button"
              className="bg-[#272B00] hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

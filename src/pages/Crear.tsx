import { useEffect, useState } from 'react';

export default function CrearProducto() {
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        img: '',
        precio: '',
        stock: '',
        tipoproducto: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCreateProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        fetch('https://db-proyecto.onrender.com/api/product-create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((newProduct) => {
                resetForm();
                console.log('Producto creado:', newProduct);
                setIsLoading(false);
            })
            .catch((error) => console.error('Error al crear el producto:', error));
    };

    const resetForm = () => {
        setFormData({ nombre: '', descripcion: '', img: '', precio: '', stock: '', tipoproducto: '' });
    };

    useEffect(() => {
        console.log('Input cambiado');
    }, [formData]);

    return (
        <main className="min-h-[80vh] bg-white flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-green-700 mb-6">Crear Producto</h1>
            <div className="w-full max-w-md">
                <form className="flex flex-col gap-4" onSubmit={handleCreateProduct}>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Nombre del producto"
                        className="p-3 border border-blue-300 rounded-lg focus:ring focus:ring-blue-200"
                    />
                    <input
                        type="text"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleInputChange}
                        placeholder="Descripción del producto"
                        className="p-3 border border-blue-300 rounded-lg focus:ring focus:ring-blue-200"
                    />
                    <input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={handleInputChange}
                        placeholder="URL de la imagen"
                        className="p-3 border border-blue-300 rounded-lg focus:ring focus:ring-blue-200"
                    />
                    <input
                        type="number"
                        name="precio"
                        value={formData.precio}
                        onChange={handleInputChange}
                        placeholder="Precio del producto"
                        className="p-3 border border-blue-300 rounded-lg focus:ring focus:ring-blue-200"
                    />
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        placeholder="Stock del producto"
                        className="p-3 border border-blue-300 rounded-lg focus:ring focus:ring-blue-200"
                    />



                    <button
                        type="submit"
                        disabled={isLoading}
                        className="p-3 bg-[#272B00] text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        {isLoading ? 'Creando...' : 'Crear Producto'}
                    </button>
                </form>
            </div>
        </main>
    );
}

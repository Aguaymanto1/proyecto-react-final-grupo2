import { useState, useEffect } from 'react';
import { Producto } from '../util/udefinitions.ts';
import { CardProducto } from '../Componentes/cardProducto.tsx';

export default function Ofertas() {
  const [productos, setProductos] = useState<Producto[]>([]);

  const getProductos = () => {
    fetch("https://db-proyecto.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        // Filtrar solo los productos que son de tipo 'oferta'
        const ofertas = data.filter((producto: Producto) => producto.tipoproducto === 'oferta');
        setProductos(ofertas);
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-green-700 my-8">
        OFERTAS DEL DÍA
      </h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {productos.map((producto) => (
          <CardProducto
            key={producto.id}
            producto={producto}
            actualizarLista={() => {}}
            obtenerProductos={getProductos}
          />
        ))}
      </div>
    </div>
  );
}


import { Link } from "react-router-dom";
import Logo from '../img/logo.png'


export default function Footer() {


    return (
        <footer className="grid grid-cols-3 gap-40 min-h-16 bg-[#272B00] px-40 py-10 text-white">
            {/* Sección 1: Logo y descripción */}
            <div className="flex flex-col">
                <div className="flex items-center mb-4">
                    <img src={Logo} alt="Logo" className="h-12 mr-2" />
                    <p className="text-xl font-bold">MICHELITROS</p>
                </div>
                <p className="text-gray-300">Empresa online renombrada en la venta de vinos y licores de alta calidad con 50 años de experiencia.</p>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Síguenos en:</h3>
                    <div className="flex space-x-6 mt-4">
                        <img src="https://img.icons8.com/?size=100&id=oFBTOjfVCkaA&format=png&color=ffffff" alt="Facebook" className="h-8" />
                        <img src="https://img.icons8.com/?size=100&id=ZOFC5nSr215Y&format=png&color=ffffff" alt="Instagram" className="h-8" />
                        <img src="https://img.icons8.com/?size=100&id=37326&format=png&color=ffffff" alt="Twitter" className="h-8" />
                    </div>
                </div>
            </div>

            {/* Sección 2: Links */}
            <div className="flex flex-col items-center">
                <p className="font-bold text-lg">Links</p>
                <ul className="mt-4 space-y-2">
                    <li>
                        <Link to="/" className="text-gray-300 hover:text-blue-400 transition duration-300">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/Crear-producto" className="text-gray-300 hover:text-blue-400 transition duration-300">Crear Producto</Link>
                    </li>
                    <li>
                        <Link to="/Productos" className="text-gray-300 hover:text-blue-400 transition duration-300">Productos</Link>
                    </li>
                    <li>
                        <Link to="/Ofertas-Promociones" className="text-gray-300 hover:text-blue-400 transition duration-300">Ofertas y promociones</Link>
                    </li>
                    <li>
                        <Link to="/Contacto" className="text-gray-300 hover:text-blue-400 transition duration-300">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/Pagar" className="text-gray-300 hover:text-blue-400 transition duration-300">Pagar</Link>
                    </li>
                </ul>
            </div>

            {/* Sección 3: Contacto */}
            <div className="space-y-4">
                <p className="font-bold text-lg">Contacto</p>
                <div className="flex items-center">
                    <img src="https://img.icons8.com/?size=100&id=7880&format=png&color=ffffff" alt="Dirección" className="h-8 mr-2" />
                    <p className="font-semibold">Dirección: Jr Camana Nro 765</p>
                </div>
                <div className="flex items-center">
                    <img src="https://img.icons8.com/?size=100&id=11471&format=png&color=ffffff" alt="Teléfono" className="h-8 mr-2" />
                    <p>(01) 482-8359</p>
                </div>
                <div className="flex items-center">
                    <img src="https://img.icons8.com/?size=100&id=12623&format=png&color=ffffff" alt="Email" className="h-8 mr-2" />
                    <p className="font-semibold">Michelitros@hotmail.com</p>
                </div>
            </div>
        </footer>

    )
}
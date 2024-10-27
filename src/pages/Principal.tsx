import { Link } from "react-router-dom";


export default function Principal() {



    return (
        <div className="relative bg-white py-12">
            <section id="productos" className="bg-gray-50 text-center">
                <h2 className="text-4xl font-bold text-teal-950">Vinos & Licores</h2>
                <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                    Los vinos y licores abarcan una amplia gama de variedades, cada una con sus propias características y perfiles de sabor.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <img
                        src="https://plazavea.vteximg.com.br/arquivos/ids/22928429-1000-1000/914618.jpg"
                        alt="Vino Tinto"
                        className="w-full h-100 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                    />
                    <img
                        src="https://plazavea.vteximg.com.br/arquivos/ids/563351-1000-1000/20201612.jpg"
                        alt="Licor Premium"
                        className="w-full h-100 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                    />
                    <img
                        src="https://plazavea.vteximg.com.br/arquivos/ids/29321951-1000-1000/925178.jpg"
                        alt="Vino Blanco"
                        className="w-full h-100 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                    />
                </div>

                <Link to = "/Productos"><button className="mt-6 px-6 py-2 text-white  rounded-lg hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out" style={{backgroundColor:"#272B00"}}>
                    SHOP NOW
                </button></Link>
                    
               
            </section>


            <section
                id="sobre-nosotros"
                className="mt-12 bg-cover w-full h-screen flex items-center justify-end p-6"
                style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2019/05/17/13/51/brandy-4209742_1280.jpg')" }}
            >
                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-white">Sobre Nosotros</h3>
                    <div className="flex flex-col items-start mt-6 space-y-4">
                        <div className="flex items-center">
                            <i className="fas fa-user-check text-blue-600 text-xl"></i>
                            <p className="ml-2 text-white">Atención personalizada</p>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-thumbs-up text-blue-600 text-xl"></i>
                            <p className="ml-2 text-white">Comprometidos con la calidad</p>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-shipping-fast text-blue-600 text-xl"></i>
                            <p className="ml-2 text-white">Envíos seguros</p>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-box text-blue-600 text-xl"></i>
                            <p className="ml-2 text-white">Stock actualizado</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )




}
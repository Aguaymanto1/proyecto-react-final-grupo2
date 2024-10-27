import Logo from '../img/logo.png'
import { Link } from "react-router-dom";
import { logout, UserState } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {

  const dispatch = useDispatch(); 

  const user = useSelector((state:{user:UserState}) => state.user);
  
  return (
    <header className="bg-[#272B00] shadow py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-12" />
          <h1 className="text-2xl font-bold text-white">MICHELITROS</h1>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-300 hover:text-blue-400 transition duration-300">Inicio</Link>
            </li>
            {user.isLoggedIn && user.userSession?.t_rol==2&&(
            <li>
              <Link to="/Crear-producto" className="text-gray-300 hover:text-blue-400 transition duration-300">Crear Producto</Link>
            </li>
            )}
            <li>
              <Link to="/Productos" className="text-gray-300 hover:text-blue-400 transition duration-300">Productos</Link>
            </li>
            <li>
              <Link to="/Ofertas" className="text-gray-300 hover:text-blue-400 transition duration-300">Ofertas</Link>
            </li>
            <li>
              <Link to="/Promociones" className="text-gray-300 hover:text-blue-400 transition duration-300">Promociones</Link>
            </li>
            <li>
              <Link to="/Pago" className="text-gray-300 hover:text-blue-400 transition duration-300">Pagar</Link>
            </li>
          </ul>
        </nav>

        {
                    user.isLoggedIn ? (
                      
                      <Link to="/"  onClick={()=>dispatch(logout())}>
                       <button className=" text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 bg-[#a8a83d]">Cerrar Sesión</button>
                  
                     </Link>
                    

                    ) : (
                        <>
                        
                      
                        <Link to="/Registro">
                        <button className=" text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 bg-[#a8a83d]">Registrarse</button>
                         </Link>
                       
                        
                        <Link to="/Login"> {/* Cambia esta ruta a "/Login" */}
                          <button className="text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 bg-[#a8a83d]">Iniciar Sesión</button>
                         </Link>
                         

                        </>

                    )
                }
        
          
      </div>
    </header>
  );
}

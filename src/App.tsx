import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Componentes/Navbar';
import Principal from './pages/Principal';
import Footer from './Componentes/Footer';
import CrearProducto from './pages/Crear';
import Ofertas from './pages/Ofertas';
import Promociones from './pages/Promociones';
import Pago from './pages/PaymentFormProps'
import Catalogo from './pages/Catalogo';
import Registro from './pages/Registro';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import { UserState } from './redux/slices/userSlice';


function App() {

  const user = useSelector((state:{user:UserState}) => state.user);
  return (
    <Router>
      <>
        <Navbar/>

        <Routes>
        {user.isLoggedIn && user.userSession?.t_rol==2&&(
          <>
          <Route path="/" element={<Principal/>} />
          <Route path="/Crear-producto" element={<CrearProducto/>} />
          <Route path="/Productos" element={<Catalogo/>} />
          <Route path="/Ofertas" element={<Ofertas/>}/>
          <Route path='/Promociones' element={<Promociones/>}/>
          <Route path='/Pago' element={<Pago totalAmount={100} />} />
          </>
        )}
        {user.isLoggedIn && user.userSession?.t_rol==1 && (
          <>
             <Route path="/" element={<Principal/>} />
             <Route path="/Productos" element={<Catalogo/>} />
             <Route path="/Ofertas" element={<Ofertas/>}/>
             <Route path='/Promociones' element={<Promociones/>}/>
            <Route path='/Pago' element={<Pago totalAmount={100} />} />
          </>
        )}

          <Route path="/" element={<Principal/>} />
          <Route path="/Crear-producto" element={<CrearProducto/>} />
          <Route path="/Productos" element={<Catalogo/>} />
          <Route path="/Ofertas" element={<Ofertas/>}/>
          <Route path='/Promociones' element={<Promociones/>}/>
          <Route path='/Pago' element={<Pago totalAmount={100} />} />
        <Route path='/Registro' element={<Registro/>}/>
        <Route path='/Login' element={<Login/>}/>

        </Routes>

        <Footer/>
      </>
    </Router>
  )
}

export default App;


//Bibliotecas
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//Context
import { AuthProvider } from './context/authContext';


//Componets
import Footer from './components/Footer';
import Navbar from './components/Navbar';

//Pages
import About from './pages/about/About';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';


//CSS
import './App.css';




function App() {
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

  }, [auth]);

  if(loadingUser){
    return <div>Carregando...</div>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
        <Navbar />
          <div className='container'>
            {/*Routes trás todas as páginas que o usuário logado ou nao pode visualizar*/}
            <Routes>
              <Route 
              path='/' 
              element={<Home />} />
              <Route 
              path='/about' 
              element={<About />} />
              <Route 
              path='/login' 
              element={!user ? <Login /> : <Navigate to="/" />} />
              <Route 
              path='/dashboard' 
              element={user ? <Dashboard /> : <Navigate to="/login" />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

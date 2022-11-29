import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Loader from './core/components/Loader';
import Master from './core/components/Master';
import AuthProvider from './core/context/AuthContext';
import AuthInterceptor from './core/services/interceptor';
import { LoaderProvider } from './shared/contexts/ReactContext';



function App() {
  const [loader, setloader] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location) {
      setloader(false)
    }
    return () => {
    }
  }, [location])
  
  return (
    <div className="h-100">
      <LoaderProvider value={{ setloader }}>
        <AuthProvider>
          <AuthInterceptor />
          {loader && <Loader />}
          <Master />
        </AuthProvider>
      </LoaderProvider>
    </div>
  );
}

export default App;

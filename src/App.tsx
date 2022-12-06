import { useState } from 'react';
import './App.css';
import Loader from './core/components/Loader';
import Master from './core/components/Master';
import AuthProvider from './core/context/AuthContext';
import AuthInterceptor from './core/services/interceptor';
import GlobalStore from './shared/contexts/GlobalStore';
import { LoaderProvider } from './shared/contexts/ReactContext';



function App() {
  const [loader, setloader] = useState(false)


  return (
    <div className="h-100 position-relative">
      <LoaderProvider value={{ setloader }}>
        <AuthProvider>
          <AuthInterceptor />
          {loader && <Loader />}
          <GlobalStore>
            <Master />
          </GlobalStore>
        </AuthProvider>
      </LoaderProvider>
    </div>
  );
}

export default App;

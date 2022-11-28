import { useState } from 'react';
import './App.css';
import Loader from './core/components/Loader';
import Master from './core/components/Master';
import AuthProvider from './core/context/AuthContext';
import AuthInterceptor from './core/services/interceptor';
import { Provider } from './shared/contexts/ReactContext';



function App() {
  const [loader, setloader] = useState(false)


  return (
    <div className="h-100">
      <Provider value={{setloader}}>
        <AuthProvider>
          <AuthInterceptor />
          {loader && <Loader />}
          <Master />
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;

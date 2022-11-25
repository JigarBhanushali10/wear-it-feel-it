import './App.css';
import Master from './core/components/Master';
import AuthProvider from './core/context/AuthContext';



function App() {
  return (
    <div className="h-100">
      {/* auth provider to 1 */}
      <AuthProvider>
        <Master />
      </AuthProvider>
    </div>
  );
}

export default App;

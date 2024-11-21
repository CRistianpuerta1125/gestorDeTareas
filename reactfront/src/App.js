import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ShowProducts from './components/ShowProducts';
import EditProduct from './components/EditProduct';
import CreateProduct from './components/CreateProduct';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/tasks">Mi App de Tareas</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/tasks">Ver tareas</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/register" replace />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<ShowProducts />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />

          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

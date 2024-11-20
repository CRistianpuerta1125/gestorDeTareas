import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/product';

const CreateProduct = () => {
  const [description, setDescription] = useState('');
  const [tittle, setTittle] = useState('');
  const [state, setState] = useState('pendiente');
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(`${endpoint}`, { description, tittle, state });
    navigate('/');
  };

  return (
    <div>
      <h3>Crear Tarea</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Titulo</label>
          <input
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Estado</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="form-control"
          >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;

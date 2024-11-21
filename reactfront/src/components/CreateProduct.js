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
    navigate('/tasks');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="text-center mb-4">Crear Tarea</h3>
          <form onSubmit={store} className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                value={tittle}
                onChange={(e) => setTittle(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingrese el título"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                placeholder="Ingrese la descripción"
                rows="3"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="form-select"
              >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
              </select>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-save"></i> Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;

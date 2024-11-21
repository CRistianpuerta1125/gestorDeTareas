import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/product/';

const EditProduct = () => {
  const { id } = useParams();
  const [description, setDescription] = useState('');
  const [tittle, setTittle] = useState('');
  const navigate = useNavigate();

  const update = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${endpoint}${id}`, { description, tittle });
      alert('Producto actualizado exitosamente');
      navigate('/tasks'); 
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      alert('No se pudo actualizar el producto. Verifica los datos ingresados.');
    }
  };

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`${endpoint}${id}`);
        setDescription(response.data.description);
        setTittle(response.data.tittle);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        if (error.response && error.response.status === 404) {
          alert('Producto no encontrado.');
          navigate('/');
        }
      }
    };
    getProductById();
  }, [id, navigate]);

  return (
    <div className="container mt-4">
      <h3>Editar Tarea</h3>
      <form onSubmit={update} className="mt-3">
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
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default EditProduct;

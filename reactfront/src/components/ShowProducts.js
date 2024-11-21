import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${endpoint}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      alert('Hubo un problema al cargar los productos.');
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${endpoint}/product/${id}`);
      getAllProducts();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      alert('No se pudo eliminar el producto.');
    }
  };

  const toggleState = async (id, currentState) => {
    const newState = currentState === 'pendiente' ? 'completada' : 'pendiente';
    try {
      await axios.patch(`${endpoint}/product/${id}/state`, { state: newState });
      getAllProducts();
    } catch (error) {
      console.error('Error al cambiar el estado del producto:', error);
      alert('No se pudo cambiar el estado del producto.');
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center">Lista de Tareas</h3>
      <div className="d-grid gap-2 mb-3">
        <Link to="/create" className="btn btn-success btn-lg">
          Crear nueva Tarea
        </Link>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.tittle}</td>
                <td>{product.description}</td>
                <td>
                  <span
                    className={`badge ${
                      product.state === 'completada' ? 'bg-success' : 'bg-warning'
                    }`}
                  >
                    {product.state}
                  </span>
                </td>
                <td>
                  <div className="btn-group" role="group">
                    <Link to={`/edit/${product.id}`} className="btn btn-warning">
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                    <button
                      onClick={() => toggleState(product.id, product.state)}
                      className="btn btn-secondary"
                    >
                      {product.state === 'pendiente'
                        ? 'Marcar como Completada'
                        : 'Marcar como Pendiente'}
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No hay tareas registradas.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;

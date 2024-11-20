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
    const response = await axios.get(`${endpoint}/products`);
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`);
    getAllProducts();
  };

  const toggleState = async (id, currentState) => {
    const newState = currentState === 'pendiente' ? 'completada' : 'pendiente';
    await axios.patch(`${endpoint}/product/${id}/state`, { state: newState });
    getAllProducts();
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <Link to="/create" className="btn btn-success btn-lg mt-2 mb-2 text-black">
          Crear nueva Tarea
        </Link>
      </div>
      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Titulo</th>
            <th>Descripcion</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.tittle}</td>
              <td>{product.description}</td>
              <td>
                <span className={product.state === 'completada' ? 'badge bg-success' : 'badge bg-warning'}>
                  {product.state}
                </span>
              </td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-warning me-2">
                  Editar
                </Link>
                <button onClick={() => deleteProduct(product.id)} className="btn btn-danger me-2">
                  Eliminar
                </button>
                <button onClick={() => toggleState(product.id, product.state)} className="btn btn-secondary">
                  Cambiar a {product.state === 'pendiente' ? 'Completada' : 'Pendiente'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;

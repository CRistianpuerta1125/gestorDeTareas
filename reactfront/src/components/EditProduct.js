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
        await axios.get(`${endpoint} ${id}`, { description, tittle });
        navigate('/');
    };

    
    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await axios.get(`${endpoint}${id}`);
                setDescription(response.data.description);
                setTittle(response.data.tittle);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    alert('Producto no encontrado');
                } else {
                    console.error("Error al obtener el producto", error);
                }
            }
        };
        
        getProductById();
    }, [id]); 
    return (
        <div>
            <h3>Editar Tarea</h3>
            <form onSubmit={update}>
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
                
                <button type="submit" className="btn btn-primary">
                    Guardar
                </button>
            </form>
        </div>
    );
};

export default EditProduct;

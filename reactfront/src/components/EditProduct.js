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
        await axios.put(`${endpoint}/${id}`, { description, tittle });
        navigate('/');
    };

    
    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.put(`${endpoint}/${id}`);
            setDescription(response.data.description);
            setTittle(response.data.tittle);
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

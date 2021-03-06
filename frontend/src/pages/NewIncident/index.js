import React, { useState } from 'react';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';



export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        };
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }

            });
            alert('Cadastro do caso foi efetuado com sucesso!');
            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.');
            
        }
        
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastre um novo caso</h1>
                    <p>Descreva seu caso</p>

                    <Link className="back-link" to="/profile"> 
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o início
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                    placeholder="Título do caso"
                    value={title}
                    onChange={ e => setTitle(e.target.value)}
                    />
                    <textarea 
                    placeholder="Descrição" 
                    value={description}
                    onChange={ e => setDescription(e.target.value)}
                    />
                    <input 
                    placeholder="Valor em R$"
                    value={value}
                    onChange={ e => setValue(e.target.value)}
                    />
                    

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}


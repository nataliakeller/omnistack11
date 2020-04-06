import React from 'react';
import './styles.css';
import {FiLogIn} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return(
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt=""/>
                <form>
                    <h1>Faça logon</h1>
                    <input placeholder="Sua Id" />
                    <button type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt=""/>
           
        </div>
    );
}
import React, { useState } from 'react';

import api from '../../services/api';

export default function Login({ history }) {
    const [ email, setEmail] = useState('');


    async function hanfleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { email });

        const { _id } = response.data;

        // Banco de dados do nosso navegador Storege
        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        <>
            <p>
                Oferaça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

          <form onSubmit={hanfleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
              type="email"
              id="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />

            <button className="btn" type="submit">Entrar</button>
          </form>
        </>
    );
}
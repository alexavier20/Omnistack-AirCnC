import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import socketio from 'socket.io-client';
import api from '../../services/api';
import './styles.css';

export default function Dashboard() {
    const [spots, setSpots] = useState([]);
    
    /* useEffect(() => {
        const user_id = localStorage.getItem('user');
        const socket = socketio('http://192.168.0.16:3333', {
            query: { user_id },
        });

        socket.on('booking_request', data => {
            console.log(data);
        })
        
    }, []) */
    
    useEffect(() => {
        async function loadSpot() {
           const user_id = localStorage.getItem('user');
           const response = await api.get('/dashboard', {
               headers: { user_id }
           });

           setSpots(response.data);           
        }

        loadSpot();
    }, []);   

    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot.id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})`}} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$ ${spot.price} /dia` : 'GRATUITO'}</span>
                    </li>
                ))}
            </ul>

            <Link to="/new">
                <button className="btn">Cadastrar novo Spot</button>
            </Link>
        </>
    )
} 
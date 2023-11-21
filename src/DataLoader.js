import React, { useState } from 'react';
import { Container, Typography, Button, CircularProgress } from '@mui/material';

function DataLoader() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);

        // Simulamos una petición Ajax con un retraso de 2 segundos
        setTimeout(() => {
            const newData = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
            setData(newData);
            setLoading(false);
        }, 2000);
    };

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Mi Página con React y Ajax
            </Typography>
            <Button onClick={fetchData} disabled={loading} variant="contained" color="primary">
                {loading ? 'Cargando...' : 'Cargar Datos'}
            </Button>
            <div>
                {loading ? (
                    <p>Cargando datos...</p>
                ) : data.length > 0 ? (
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay datos disponibles.</p>
                )}
            </div>
        </Container>
    );
}

export default DataLoader;

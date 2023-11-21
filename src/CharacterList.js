import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/people/');
                setCharacters(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Personajes de Star Wars
            </Typography>
            <Grid container spacing={3}>
                {characters.map((character, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <CharacterCard character={character} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

const CharacterCard = ({ character }) => {
    const { name, gender, birth_year } = character;

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Género:</strong> {gender}
                    <br />
                    <strong>Año de nacimiento:</strong> {birth_year}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CharacterList;


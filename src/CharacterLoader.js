import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, Typography, Button, CircularProgress, TextField, Grid, Card, CardContent,} from '@mui/material';

function CharacterLoader() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showCards, setShowCards] = useState(false);
    const [buttonColor, setButtonColor] = useState('primary'); // Estado para el color del botón

    useEffect(() => {
        if (showCards) {
            const fetchData = async () => {
                setLoading(true);

                try {
                    const response = await axios.get('https://swapi.dev/api/people/');
                    setCharacters(response.data.results);
                    setLoading(false);
                    setButtonColor('warning'); // Cambiar el color del botón a amarillo
                } catch (error) {
                    console.error(error);
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [showCards]);

    const handleSearchChange = (event) => {
        const term = event.target.value.trim();
        setSearchTerm(term);

        if (term === '') {
            setSearchResults([]);
        } else {
            const filteredCharacters = characters.filter((character) =>
                character.name.toLowerCase().includes(term.toLowerCase())
            );
            setSearchResults(filteredCharacters);
        }
    };

    const loadCharacters = () => {
        setShowCards(true);
    };

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Personajes de Star Wars
            </Typography>
            <Button
                variant="contained"
                color={buttonColor}
                onClick={loadCharacters}
            >
                {loading ? 'Cargando Personajes...' : 'Cargar Personajes'}
            </Button>
            {showCards && (
                <>
                    <TextField
                        label="Buscar personajes de Star Wars"
                        variant="outlined"
                        fullWidth
                        value={searchTerm}
                        onChange={handleSearchChange}
                        margin="normal"
                        InputProps={{
                            style: {
                                background: '#4CAF50',
                                color: 'white',
                                borderColor: '#4CAF50',
                            },
                        }}
                        InputLabelProps={{
                            style: { color: 'white' },
                        }}
                    />
                    {loading ? (
                        <CircularProgress style={{ margin: '20px auto', display: 'block' }} />
                    ) : (
                        <Grid container spacing={3} mt={3}>
                            {(searchTerm === '' ? characters : searchResults).map((character, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h6" component="div">
                                                {character.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <strong>Género:</strong> {character.gender}
                                                <br />
                                                <strong>Año de nacimiento:</strong> {character.birth_year}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </>
            )}
        </Container>
    );
}

export default CharacterLoader;

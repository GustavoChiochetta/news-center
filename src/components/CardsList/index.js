import { Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoticiasService from '../../services/NoticiasService';
import NewsCard from '../NewsCard';

const CardsList = () => {
  const [noticias, setNoticias] = useState([]);
  const [filteredNoticias, setFilteredNoticias] = useState(noticias);
  const navigate = useNavigate();

  const fetchNoticias = async () => {
    const response = await NoticiasService.getNoticias();
    setNoticias(response);
    setFilteredNoticias(response);
  };

  const searchNoticias = (searchValue = '') => {
    const filtered = noticias.filter((noticia) => {
      return noticia.titulo.includes(searchValue.trim());
    });
    setFilteredNoticias(filtered);
  };

  const goToNew = () => navigate('/new');

  useEffect(() => {
    fetchNoticias();
  }, []);

  return (
    <Container sx={{
      py: 8,
      borderRadius: 3
    }} maxWidth="md">
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent='right'
      >
        <TextField
          sx={{ mb: 10 }}
          id="search"
          label="Search"
          onChange={(e) => searchNoticias(e.target.value)}
        />
        <Button onClick={goToNew} variant='contained' sx={{ height: 56 }}>Criar Noticia</Button>
      </Stack>
      <Grid container spacing={4}>
        {!filteredNoticias.length
          ? <Typography>Nenhuma noticia no momento</Typography>
          : filteredNoticias.map((noticia) => (
            <NewsCard key={noticia.id} noticia={noticia} fetchNoticias={fetchNoticias} />
          ))}
      </Grid>
    </Container>
  );
};

export default CardsList;

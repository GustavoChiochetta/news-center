import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const ShowNews = ({ noticia }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goToEdit = () => navigate(`/edit/${id}`);

  return(
    <Container>
      <Button onClick={() => navigate('/')}>Voltar para menu</Button>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent='right'
      >
        <Button onClick={goToEdit} variant='contained' sx={{ height: 56 }}>Editar</Button>
      </Stack>
      <Typography  variant="h1" component="div" gutterBottom>
        {noticia.noticia.titulo}
      </Typography>
      <Typography variant="h5" component="div">
        {noticia.noticia.subtitulo}
      </Typography>
      <Typography variant="subtitle2" sx={{ wordWrap: 'break-word', mt: 10 }} gutterBottom component="div">
        {noticia.noticia.texto}
      </Typography>
      <Typography variant="overline" gutterBottom>
        Autor: {noticia.autor.nome} - Contato: {noticia.autor.email}
      </Typography>
    </Container>
  );
};

export default ShowNews;

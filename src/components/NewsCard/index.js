import { 
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoticiasService from '../../services/NoticiasService';
import ConfirmationModal from '../ConfirmationModal';

const NewsCard = ({ noticia, fetchNoticias }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  
  const deleteNoticia = async () => {
    NoticiasService.deleteNoticia(noticia.id).then(() => {
      fetchNoticias();
    }, (error) => {
      console.log(error);
    })
  }

  const handleEdit = (action) => {
    navigate(`/${action}/${noticia.id}`);
  }

  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Grid item key={noticia.id} xs={12} sm={6} md={4}>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {noticia.titulo}
            </Typography>
            <Typography>
              {noticia.subtitulo}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleEdit('show')} size="small">Vizualizar</Button>
            <Button onClick={() => handleEdit('edit')} size="small">Editar</Button>
            <Button onClick={() => setOpenModal(true)} size="small">Deletar</Button>
          </CardActions>
        </Card>
      </Grid>
      <ConfirmationModal
        open={openModal}
        onConfirm={deleteNoticia}
        onClose={handleClose}
        titulo='Deletar Notícia'
        descricao='Tem certeza que deseja excluir essa notícia'
      />
    </>
  );
}

export default NewsCard;
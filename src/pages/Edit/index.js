import CreateEditForm from '../../components/CreateEditForm';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NoticiasAutoresServices from '../../services/NoticiasAutoresServices';
import { Typography } from '@mui/material';

const Edit = () => {
  const [noticiaAutor, setNoticiaAutor] = useState({});
  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchNoticiaAutor = async () => {
        const response = await NoticiasAutoresServices.getNoticiaAutor(id);
        setNoticiaAutor({
          id: response.noticia.id,
          titulo: response.noticia.titulo,
          subtitulo: response.noticia.subtitulo,
          texto: response.noticia.texto,
          nome: response.autor.nome,
          email: response.autor.email
        });
      };
      fetchNoticiaAutor();
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  

  return (
    noticiaAutor
    ? <CreateEditForm noticiaAutor={noticiaAutor} />
    : <Typography>Algo deu errado ao tentar editar essa Noticia!</Typography>
  )
}

export default Edit;

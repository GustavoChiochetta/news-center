import ShowNews from '../../components/ShowNews';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NoticiasAutoresServices from '../../services/NoticiasAutoresServices';
import { Typography } from '@mui/material';

const Show = () => {
  const [noticia, setNoticia] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const response = await NoticiasAutoresServices.getNoticiaAutor(id);
        setNoticia(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNoticia();
  }, [id]);

  return (
    noticia
    ?  <ShowNews key={id} noticia={noticia}/>
    : <Typography>Não foi possível carregar essa notícia...</Typography>
  );
};

export default Show;

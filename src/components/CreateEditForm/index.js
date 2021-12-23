import { Button, Container, FormHelperText, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup'; 
import { useNavigate, useLocation } from 'react-router-dom';
import NoticiasAutoresServices from '../../services/NoticiasAutoresServices';
import NoticiasService from '../../services/NoticiasService';
import { useEffect } from 'react';

const noticiasProps = {
  id: '',
  titulo: '',
  subtitulo: '',
  texto: '',
  nome: '',
  email: ''
}

const validation = yup.object({
  titulo: yup.string()
  .min(5, 'Titulo muito curto!')
  .max(30, 'Titulo muito comprido!')
  .required('Campo obrigatorio'),
  subtitulo: yup.string()
    .min(10, 'Subtitulo muito curto!')
    .max(100, 'Subtitulo muito comprido!')
    .required('Campo obrigatorio'),
  texto: yup.string()
    .min(1000, 'Texto muito curto!')
    .max(1500, 'Texto muito comprido!')
    .required('Campo obrigatorio'),
  nome: yup.string()
    .min(4, 'Nome do autor muito curto!')
    .max(20, 'Nome do autor muito comprido!')
    .required('Campo obrigatorio'),
  email: yup
    .string()
    .email('Insira um e-mail valido').required('Campo obrigatorio'),
})

const CreateEditForm = ({ noticiaAutor = noticiasProps }) => {

  const formik = useFormik({
    initialValues: noticiaAutor,
    onSubmit: values => {
      save(values);
    },
    validationSchema: validation,
    enableReinitialize: true,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const isEditing = location.pathname.includes('edit');

  const save = async (values) => {
    if (isEditing) {
      try {
        await NoticiasService.updateNoticia(values.id, {
          titulo: values.titulo,
          subtitulo: values.subtitulo,
          texto: values.texto
        })
        navigate('/');
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        await NoticiasAutoresServices.createNoticiaAutor(values);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Button onClick={() => navigate('/')}>Voltar para menu</Button>
      <Typography variant='h2'>{
        isEditing
        ? 'Editar noticia'
        : 'Criar noticia'
      }</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack sx={{ mt: 5, mb: 5 }} spacing={3}>
          <TextField
            id='titulo'
            label='Titulo'
            value={formik.values.titulo}
            onChange={formik.handleChange}
            focused
          />
          <FormHelperText>{formik.errors.titulo}</FormHelperText>
          <TextField
            id="subtitulo"
            label="Subtitulo"
            value={formik.values.subtitulo}
            onChange={formik.handleChange}
            focused
          />
          <FormHelperText>{formik.errors.subtitulo}</FormHelperText>
          <TextField
            id="texto"
            multiline
            label="Texto"
            rows={15}
            value={formik.values.texto}
            onChange={formik.handleChange}
            erro={formik.errors.texto}
            focused
          />
          <FormHelperText>{formik.errors.texto}</FormHelperText>
          <TextField
            id="nome"
            label="Autor"
            value={formik.values.nome}
            onChange={formik.handleChange}
            focused
          />
          <FormHelperText>{formik.errors.nome}</FormHelperText>
          <TextField
            id="email"
            label="E-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            focused
          />
          <FormHelperText>{formik.errors.email}</FormHelperText>
          <Button type='submit' variant="contained">Salvar!</Button>
        </Stack>
      </form>
    </Container>
  );
};

export default CreateEditForm;

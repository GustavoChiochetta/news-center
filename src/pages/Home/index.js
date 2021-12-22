import * as React from 'react';
import { CssBaseline, Box, Typography, Container, Link } from '@mui/material';
import CardsList from '../../components/CardsList'

const GitHubLink = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      <Link color="inherit" href="https://github.com/GustavoChiochetta">
        Me encontre no GitHub!
      </Link>
    </Typography>
  );
}

const Home = () => {
  return (
    <Box>
      <CssBaseline />
      <main>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Centro de noticias
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Salve, edite e exclua suas noticias!
            </Typography>
          </Container>
        </Box>
        <CardsList />
      </main>
      <Box sx={{ p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Criado por Gustavo Chiochetta!
        </Typography>
        <GitHubLink />
      </Box>
    </Box>
  );
}

export default Home;
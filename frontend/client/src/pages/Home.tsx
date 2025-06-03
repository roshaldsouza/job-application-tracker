import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to the Job Application Tracker
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Manage your job applications efficiently
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            size="large"
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="outlined"
            size="large"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
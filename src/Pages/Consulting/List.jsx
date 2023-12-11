import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from '@mui/material';

const ListAttendances = () => {
  const [attendances, setAttendances] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliZGNlNWY4LWNjMWItNGU8OC04OWZkLTEzYjU2YTM0MDQ3NCIsImVtYWlsIjoibWFlbGluYUBnbWFpbC5jb20iLCJpYXQiOjE3MDA0MjM5MjZ9.WuqMdTpwEc1MlF7pNw9yj2dlZxUA7B6PM-okY2tOJYo';

        const response = await axios.get('https://api.lawer.app/service', {
          headers: {
            Authorization: token,
          },
        });

        if (response.status === 200) {
          setAttendances(response.data);
          setLoading(false);
        } else {
          console.error('Erro ao buscar atendimentos. Status da resposta:', response.status);
          setLoading(false);
        }
      } catch (error) {
        console.error('Erro ao buscar atendimentos:', error);
        setLoading(false);
      }
    };

    fetchAttendances();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Atendimentos
      </Typography>
      {attendances.length > 0 ? (
        attendances.map((attendance, index) => (
          <Card key={index} variant="outlined" sx={{ marginBottom: '10px' }}>
            <CardContent>
              {/* Aqui você pode exibir os detalhes do atendimento conforme necessário */}
              <Typography variant="h6">{attendance.title}</Typography>
              <Typography variant="body2">{attendance.subject}</Typography>
              {/* Inclua mais detalhes conforme necessário */}
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>Nenhum atendimento encontrado</Typography>
      )}
    </Box>
  );
};

export default ListAttendances;

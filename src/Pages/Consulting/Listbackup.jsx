// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CircularProgress,
// } from '@mui/material';

// const ListAttendances = () => {
//   const [attendances, setAttendances] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAttendances = async () => {
//       try {
//         const requestBody = {
//           title: "Atendimento com Forum",
//           subject: "Levar arquivos",
//           attachment: "teste",
//           users: [
//             { id: "179d0b3e-b0ab-4369-b8b1-4056edcead50" },
//             { id: "2d181386-ed88-49f1-acb6-a9d26b19cdf0" },
//           ]
//         };

//         const response = await axios.post('https://api.lawer.app/service', requestBody, {
//           headers: {
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliZGNlNWY4LWNjMWItNGU4OC04OWZkLTEzYjU2YTM0MDQ3NCIsImVtYWlsIjoibWFlbGluYUBnbWFpbC5jb20iLCJpYXQiOjE3MDA0MjM5MjZ9.WuqMdTpwEc1MlF7pNw9yj2dlZxUA7B6PM-okY2tOJYo'
//           }
//         });

//         setAttendances(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Erro ao buscar atendimentos:', error);
//         setLoading(false);
//       }
//     };

//     fetchAttendances();
//   }, []);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   return (
//     <Box sx={{ padding: '20px' }}>
//       <Typography variant="h4" sx={{ marginBottom: '20px' }}>Atendimentos</Typography>
//       {attendances.length > 0 ? (
//         attendances.map((attendance, index) => (
//           <Card key={index} variant="outlined" sx={{ marginBottom: '10px' }}>
//             <CardContent>
//               <Typography variant="h6">{attendance.title}</Typography>
//               <Typography variant="body2">{attendance.subject}</Typography>
//               {/* Inclua mais detalhes conforme necessário */}
//             </CardContent>
//           </Card>
//         ))
//       ) : (
//         <Typography>Nenhum atendimento encontrado</Typography>
//       )}
//     </Box>
//   );
// };

// export default ListAttendances;

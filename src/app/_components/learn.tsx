import { Box, Button, Paper, Typography } from '@mui/material';
import Image from 'next/image';

export function Learn(){

    return (
        <Paper sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                p:4,
                width:'80vw',
                m:'auto',
                mb:4,
                backgroundColor:'secondary.dark'
            }}>
            <Typography
                variant='h4'
                sx={{
                    color:'primary.contrastText',
                    fontWeight:500,
                }}
                gutterBottom>
                Aprenda Bioinformática
            </Typography>
            <Typography 
                variant='body1'
                sx={{
                    color:'primary.contrastText',
                }}
            >
                Você quer realizar análises e gerar uma visualização clara do que está fazendo? Aqui é o seu lugar. Acesse as ferramentas do OLATCG e comece a utilizar modelo como: alinhamento de sequências, busca homóloga, visualização de árvore filogenética e muito mais. Recomendado se você já possui alguma noção em Bioinformática
            </Typography>
        </Paper>
    )
}
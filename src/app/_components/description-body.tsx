import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export function DescriptionBody(){

    return(
        <div>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                justifyContent: 'center',
                p:4,
            }}>
                <Paper elevation={3} sx={{
                    textAlign:'center',
                    p:4,
                    backgroundColor: 'primary.light',
                    color:'secondary.contrastText'
                }}>
                    <Typography variant='h5' sx={{fontWeight:500}}>
                    Um pouco mais sobre o projeto...
                    </Typography>
                    <Typography variant="body1">
                    O OLATCG é uma plataforma didática que tem como propósito introduzir a Bioinformática através do uso dos principais modelos computacionais existentes na academia científica. Nós desenvolvemos algumas ferramentas para tornar esta tarefa mais fácil, a partir de uma interface WEB você pode realizar e entender as principais noções envolvidas. Paralelamente a isso, em "sobre" você pode pesquisar sobre os pontos que você está aprendendo
                    </Typography>
                </Paper>
            </Box>
        </div>
    )

}
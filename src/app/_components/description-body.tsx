import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Logo from '../../../public/logo.png'



export function DescriptionBody(){

    return(
        <div>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent: 'center',
                p:4,
            }}>
                <Box 
                sx={{
                    '@media (min-width: 768px)' : {
                        display:'none'
                    }
                }}>
                    <Image 
                        src={Logo}
                        alt="Logo do OLATCG"
                        quality={100}
                        style={{ 
                            width: 'auto',
                            height: '33vh',
                            marginBottom: '4rem',
                        }}
                        priority
                    />
                </Box>
                <Paper elevation={3} sx={{
                    textAlign:'center',
                    p:4,
                    backgroundColor: 'primary.light',
                    color:'secondary.contrastText'
                }}>
                    <Typography variant='h5' sx={{fontWeight:500, mb:2}}>
                    Um pouco mais sobre o projeto...
                    </Typography>
                    <Typography variant="body1" sx={{textAlign:'', wordWrap:'break-word', hyphens:'auto'}}>
                    O OLATCG é uma plataforma didática que tem como propósito introduzir a Bioinformática através do uso dos principais modelos computacionais existentes na academia científica. Nós desenvolvemos algumas ferramentas para tornar esta tarefa mais fácil, a partir de uma interface WEB você pode realizar e entender as principais noções envolvidas. Paralelamente a isso, em "sobre" você pode pesquisar sobre os pontos que você está aprendendo
                    </Typography>
                </Paper>
            </Box>
        </div>
    )

}
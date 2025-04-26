'use client';

import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Carousel } from './carousel';



export function FeaturedTools(){

    return(
        <div>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                position:'relative',
                //backgroundColor:'primary.light',
                //filter:'blur(0.2rem)',
                pt:2,
                pb:1,
                '@media (max-width: 768px)' : {
                    p:0
                }
                //alignItems:'center'
            }}>
                <Typography variant='h4' sx={{
                    color:'secondary.contrastText',
                    fontWeight:500,
                    p:2,
                    m:'auto',
                    mb:2
                }}>
                    Teste Nossas Ferramentas
                </Typography>

                <Paper sx={{position:'relative', backgroundColor:'warning.contrastText'}}>
                    <Carousel/>
                </Paper>
                {/*
                <Box sx={{
                    display:'flex',
                    justifyContent:'center',
                }}>
                    <ToolCard focus={false} cardImage={scAlign} title='Alinhamento' buttonRedirect='https://spica.eic.cefet-rj.br/olatcg/tool/alignment' description='Alinhe duas sequências local ou globalmente. Ambos os alinhamentos são mostrados em uma tabela interativa onde você pode comparar as correspondências entre estes.'/>
                    <ToolCard focus={false} cardImage={scHomol} title='Busca Homóloga' buttonRedirect='https://spica.eic.cefet-rj.br/olatcg/tool/homology' description='Submeta uma lista de sequências contra um banco de dados filogeneticamente anotado e receba uma análise comparativa das combinações com maior percentual de identidade.'/>
                    <ToolCard focus={false} cardImage={scPhylo} title='Árvore Filogenética' buttonRedirect='https://spica.eic.cefet-rj.br/olatcg/analysis/phylogeneticTree' description='Visualize os resultados de sua busca homóloga como uma árvore filogenética.'/>
                </Box>
                */}
            
            </Box>
        </div>
    )

}
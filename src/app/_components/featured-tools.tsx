import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { ToolCard } from './tool-card';
import scAlign from '../../../public/sc_align.png'
import scHomol from '../../../public/sc_homol.png'
import scPhylo from '../../../public/sc_phylotree.png'


export function FeaturedTools(){

    return(
        <div>
            <Box sx={{
                p:2,
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <Typography variant='h4' sx={{
                    color:'primary.contrastText',
                    backgroundColor:'primary.dark',
                    borderRadius:'1rem',
                    textAlign:'center',
                    fontWeight:300,
                    p:2,
                }}>
                    Funcionalidades
                </Typography>

                <Box sx={{
                    display:'flex',
                    justifyContent:'center',
                }}>
                    <ToolCard cardImage={scAlign} title='Alinhamento' buttonRedirect='https://spica.eic.cefet-rj.br/olatcg/tool/alignment' description='Alinhe duas sequências local ou globalmente. Ambos os alinhamentos são mostrados em uma tabela interativa onde você pode comparar as correspondências entre estes.'/>
                    <ToolCard cardImage={scHomol} title='Busca Homóloga' buttonRedirect='https://spica.eic.cefet-rj.br/olatcg/tool/homology' description='Submeta uma lista de sequências contra um banco de dados filogeneticamente anotado e receba uma análise comparativa das combinações com maior percentual de identidade.'/>
                    <ToolCard cardImage={scPhylo} title='Árvore Filogenética' buttonRedirect='https://spica.eic.cefet-rj.br/olatcg/analysis/phylogeneticTree' description='Visualize os resultados de sua busca homóloga como uma árvore filogenética.'/>
                </Box>
            
            </Box>
        </div>
    )

}
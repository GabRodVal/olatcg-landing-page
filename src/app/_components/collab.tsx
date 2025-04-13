import * as React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import cefetLogo from '../../../public/cefet_logo.png'
import fundOsorioLogo from '../../../public/logofo2024.png'

export function Collab(){

    return(
        <div>
            <Box sx={{
                color:'primary.contrastText',
                backgroundColor:'primary.dark',
                textAlign:'center'
            }}>
                <Typography variant='h4' sx={{fontWeight:300, p:2}}>O OLATCG é uma colaboração entre</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    p:2
                }}>
                    <Box sx={{
                        backgroundColor:'primary.light',
                        borderRadius:'1rem',
                        margin:'auto',
                        marginRight:'4rem',
                        p:2,
                        }}>
                        <Image alt='CEFET RJ' title='Centro Federal de Educa&ccedil;&atilde;o Tecnol&oacute;gica (CEFET)' src={cefetLogo} style={{height: '8rem', width:'auto'}}/>
                    </Box>
                    <Box sx={{
                        backgroundColor:'primary.light',
                        borderRadius:'1rem',
                        margin:'auto',
                        marginLeft:'4rem',
                        p:2,
                        }}>
                        <Image alt='Funda&ccedil;&atilde;o Osorio' title='Funda&ccedil;&atilde;o Osorio' src={fundOsorioLogo} style={{height: '8rem', width:'auto' }}/>
                    </Box>
                </Box>
            </Box>
        </div>
    )

}
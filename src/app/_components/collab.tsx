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
                //backgroundColor:'secondary.dark',
                textAlign:'center',
                '@media (max-width: 768px)':{
                    width:'100%'
                }
            }}>
                <Typography variant='h4' sx={{fontWeight:400, p:2, mt:4}}>O OLATCG é uma colaboração entre</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    p:2,
                }}>
                    <Box sx={{
                        backgroundColor:'primary.light',
                        borderRadius:'1rem',
                        margin:'auto',
                        marginRight:'4rem',
                        p:2,
                        '@media (max-width: 768px)':{
                            p:1,
                            mr:'1rem'
                        }
                        }}>
                        <Image alt='CEFET RJ' title='Centro Federal de Educa&ccedil;&atilde;o Tecnol&oacute;gica (CEFET)' src={cefetLogo} style={{height: '6rem', width:'auto'}}/>
                    </Box>
                    <Box sx={{
                        backgroundColor:'primary.light',
                        borderRadius:'1rem',
                        margin:'auto',
                        marginLeft:'4rem',
                        p:2,
                        '@media (max-width: 768px)':{
                            p:1,
                            ml:'1rem'
                        }
                        }}>
                        <Image alt='Funda&ccedil;&atilde;o Osorio' title='Funda&ccedil;&atilde;o Osorio' src={fundOsorioLogo} style={{height: '6rem', width:'auto' }}/>
                    </Box>
                </Box>
            </Box>
        </div>
    )

}
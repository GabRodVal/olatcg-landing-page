'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTheme } from "@mui/material/styles";
import { Box, Button, Tooltip, Typography } from '@mui/material';
import Logo from '../../../public/logo.png'

type CustomTooltipProps = {
    tooltipImage: any;
    tooltipTitle:string;
    mainColor:string;
    tooltipBG:string;
}

const ATCGChar = ({tooltipImage, tooltipTitle, mainColor, tooltipBG}:CustomTooltipProps) => (
    <Tooltip 
        arrow
        slotProps={{
            tooltip:{
                sx:{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:`${tooltipBG}`,
                    color:'primary.contrastText'
                }
            },
            arrow:{
                sx:{
                    color:`${tooltipBG}`
                }
            }
        }}
        title={
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                height:'12rem'
            }}>
                <Typography variant='h5' sx={{fontWeight:600, textShadow:'1px 1px 0px black'}}>
                    {tooltipTitle}
                </Typography>
                <Image 
                    alt='adada'
                    src={tooltipImage}
                    style={{
                        height:'100%',
                        width:'auto',
                    }}
                />
            </Box>}
    >
        <Typography sx={{
            color:'secondary.main',
            fontWeight:500,
            textShadow: `4px 3px 0px ${useTheme().palette.primary.main}`,
            fontSize:'7.2rem',
            ":hover":{
                cursor:'pointer',
                color:`${mainColor}`,
                textShadow: `4px 3px 0px ${useTheme().palette.secondary.main}`,
                transition: '300ms'
            }
            }}
            component='span'
            variant="h1"
        >
            A
        </Typography>
    </Tooltip>
);

export function Banner(){
    const theme = useTheme();

    return(
        <Box sx={{
                display:'flex',
                flexDirection:'row',
                p:4,
                backgroundColor:'primary.light',
                width:'100%',
                justifyContent:'center',
                textAlign:'center',
                alignItems:'center',
            }}>
            <Image 
                src={Logo}
                alt="Logo do OLATCG"
                sizes="(max-width: 768px) 0vh, (max-width: 1200px) 33vh, 30vh"
                quality={100}
                style={{ 
                    width: 'auto',
                    height: '30vh',
                 }}
                priority
            />

            <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    width:'40%',
                    justifyContent:'center',
                    textAlign:'center',
                    alignItems:'center',
                    }}>
                <Typography sx={{
                            color:'primary.contrastText',
                            fontWeight:500,
                            textShadow: `4px 3px 0px ${theme.palette.primary.main}`,
                            fontSize:'7.2rem'
                        }}
                        variant="h1"
                    >
                    OL
                    <Typography sx={{
                            color:'secondary.main',
                            fontWeight:500,
                            textShadow: `4px 3px 0px ${theme.palette.primary.main}`,
                            fontSize:'7.2rem',
                            ":hover":{
                                cursor:'pointer',
                                color:'warning.main',
                                textShadow: `4px 3px 0px ${theme.palette.secondary.main}`,
                                transition: '300ms'
                            }
                        }}
                        component='span'
                        variant="h1"
                    >
                        A
                    </Typography>
                    <Typography sx={{
                            color:'secondary.main',
                            fontWeight:500,
                            textShadow: `4px 3px 0px ${theme.palette.primary.main}`,
                            fontSize:'7.2rem',
                            ":hover":{
                                cursor:'pointer',
                                color:'info.main',
                                textShadow: `4px 3px 0px ${theme.palette.secondary.main}`,
                                transition: '300ms'
                            }
                        }}
                        component='span'
                        variant="h1"
                    >
                        T
                    </Typography>
                    <Typography sx={{
                            color:'secondary.main',
                            fontWeight:500,
                            textShadow: `4px 3px 0px ${theme.palette.primary.main}`,
                            fontSize:'7.2rem',
                            ":hover":{
                                cursor:'pointer',
                                color:'success.main',
                                textShadow: `4px 3px 0px ${theme.palette.secondary.main}`,
                                transition: '300ms'
                            }
                        }}
                        component='span'
                        variant="h1"
                    >
                        C
                    </Typography>
                    <Typography sx={{
                            color:'secondary.main',
                            fontWeight:500,
                            textShadow: `4px 3px 0px ${theme.palette.primary.main}`,
                            fontSize:'7.2rem',
                            ":hover":{
                                cursor:'pointer',
                                color:'error.main',
                                textShadow: `4px 3px 0px ${theme.palette.secondary.main}`,
                                transition: '300ms'
                            }
                        }}
                        component='span'
                        variant="h1"
                    >
                        G
                    </Typography>
                    {/*
                    <ATCGChar tooltipImage={Logo} tooltipTitle='Adenina' mainColor='warning.main' tooltipBG='rgba(229, 223, 38, 0.87)'/>
                    */}
                </Typography>
                <Typography sx={{
                        fontSize:'1.6rem',
                        color: 'primary.contrastText',
                        fontWeight: 500,
                        lineHeight:'2.2rem',
                        width:'80%',
                        textShadow: `1.6px 1.2px 0px ${theme.palette.primary.main}`,
                        '@media (max-width: 768px)' : {
                            display:'none'
                        }

                    }} variant="subtitle1"> Uma ferramenta interativa de Bioinformática para estudantes de todos os lugares do mundo </Typography>
                <Button
                    variant='contained'
                    href='https://spica.eic.cefet-rj.br/olatcg/home'
                    sx={{
                        mt:2,
                        fontSize:'1.2rem',
                        backgroundColor:'secondary.main'
                    }}
                >
                    Acesse Online Agora
                </Button>
            </Box>
        </Box>
    )
}
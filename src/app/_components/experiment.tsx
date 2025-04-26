'use client'

import { Box, Button, Paper, Stepper, Step, StepConnector, StepIcon, StepLabel, StepContent, Typography } from '@mui/material';
import { Grading, Biotech, Mode } from '@mui/icons-material';

const steps = [
    {
        title:'Crie um experimento',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: Biotech,
    },
    {
        title:'Monte sua análise',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: Mode,

    },
    {
        title:'Cheque os resultados',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: Grading,

    },
]

const CustomConnector = ({ index, active, completed, disabled}:any) => {
    return <StepConnector 
    sx={{
        top:32,
        border: 'solid',
        borderColor:'secondary.main',
        borderWidth:'0.0rem',
        height:'0.6rem',
        backgroundImage:'linear-gradient(to top, #37ecba 0%, #72afd3 100%)',
        ml:'1.15rem',
        mr:'1.15rem',
        '*':{
            opacity:0
        }
    }}/>
}

export function Experiment(){

    return (
        <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                p:4,
                maxWidth:'90%',
                m:'auto',
                mb:4,
                //backgroundColor:'secondary.light'
            }}>
            <Typography
                variant='h4'
                sx={{
                    color:'secondary.contrastText',
                    fontWeight:500,
                }}
                gutterBottom>
                Realize Análises de Forma Simples
            </Typography>
            <Box 
                sx={{
                    display:'flex',
                    m:4,
                    minHeight:'33vh',
                    alignItems:'center'
                }}
            >
                <Stepper 
                    alternativeLabel
                    sx={{
                        //width:'80vw',
                    }}
                    connector={
                        <CustomConnector/>
                    }
                >
                    {steps.map((item, index) => (
                        <Step>
                            <StepLabel
                                slots={{
                                    stepIcon: item.icon
                                }}
                                slotProps={{
                                    stepIcon:{
                                        sx:{
                                            fontSize:'4.8rem',
                                            borderRadius:'100%',
                                            backgroundColor: 'secondary.main',
                                            backgroundImage:'linear-gradient(to top, #37ecba 0%, #72afd3 100%)',
                                            color:'primary.contrastText',
                                            p:1,
                                        }
                                    },
                                    
                                }}
                            >
                                <Box sx={{
                                    display:'flex',
                                    flexDirection:'column',
                                    alignItems:'center',
                                    }}>
                                    <Typography variant='body1' sx={{fontWeight:500, color:'secondary.contrastText'}}>
                                        {item.title} 
                                    </Typography>
                                    <Typography variant='body2' sx={{color:'warning.contrastText'}}>
                                        {item.description}
                                    </Typography>
                                </Box>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </Box>
    )
}
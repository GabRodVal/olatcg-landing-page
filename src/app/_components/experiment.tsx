import { Box, Button, Paper, Stepper, Step, StepConnector, StepLabel, StepContent, Typography } from '@mui/material';
import { Grading, FormatAlignCenter, Mode } from '@mui/icons-material';


const steps = [
    'Crie um experimento',
    'Monte sua análise de Alinhamento ou Busca Homóloga',
    'Veja os resultados detalhados de sua análise'
]

const icons = [
    Mode,
    Grading,
    FormatAlignCenter,
]

const CustomConnector = () => {
    return <StepConnector 
    sx={{
        top:22,
        border: 'solid',
        borderColor:'secondary.main',
        borderWidth:'0.4rem',
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
                width:'100%',
                m:'auto',
                mb:4,
                backgroundColor:'secondary.light'
            }}>
            <Typography
                variant='h4'
                sx={{
                    color:'secondary.contrastText',
                    fontWeight:500,
                }}
                gutterBottom>
                Realize Análises Rapidamente
            </Typography>
            <Box 
                sx={{
                    m:4
                }}
            >
                <Stepper 
                    activeStep={2}
                    alternativeLabel
                    sx={{
                        width:'80vw',
                    }}
                    connector={
                        <CustomConnector/>
                    }
                >
                    {steps.map((label, index) => (
                        <Step>
                            <StepLabel 
                                slots={{
                                    stepIcon:icons[index],
                                }}
                                slotProps={{
                                    stepIcon:{
                                        sx:{
                                            fontSize:'3.6rem',
                                            borderRadius:'100%',
                                            backgroundColor: 'secondary.main',
                                            color:'primary.contrastText',
                                            p:1,
                                        }
                                    },
                                    
                                }}
                            >
                                <Box>
                                    <Typography variant='body1' sx={{fontWeight:500}}>
                                        {label} 
                                    </Typography>
                                    <Typography variant='body2' sx={{color:'grey'}}>
                                        {label} 
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
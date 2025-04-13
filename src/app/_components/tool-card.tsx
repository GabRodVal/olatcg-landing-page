import * as React from 'react';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';

type CardProps = {
    cardImage: any;
    title: string;
    description:string;
    buttonRedirect:string;
}

export function ToolCard({cardImage, title, description, buttonRedirect}: CardProps){

    return(
        <div>
            <Box sx={{
                width:'30vw',
                backgroundColor:'primary.light',
                borderRadius:'2rem',
                m:2
            }}>
                <Typography 
                    variant='h4'
                    sx={{
                        backgroundColor:'primary.dark',
                        color:'primary.contrastText',
                        borderRadius:'1.2rem 1.2rem 0 0',
                        fontWeight: 500,
                        p:1,
                    }}
                    >{title}</Typography>
                <Image src={cardImage} alt='tool' style={{width:'100%', height:'auto'}}/>
                <Box sx={{
                    display:'flex',
                    height: '10rem',
                    flexDirection:'column',
                    backgroundColor:'primary.dark',
                    borderRadius:'0 0 1.2rem 1.2rem',
                    p:2,
                    pt:1,
                }}>
                    <Typography 
                        variant='subtitle1'
                        sx={{
                            color:'primary.contrastText',
                            fontSize:'1.1rem',
                            fontWeight: 200
                        }}
                        >{description}</Typography>
                    <Button 
                        variant='contained'
                        href={buttonRedirect}
                        sx={{
                            float:'right',
                            width: '25%',
                            mt:'auto',
                            ml:'auto',
                            }}>
                            Acessar Aqui
                        </Button>
                </Box>
            </Box>
        </div>
    )

}
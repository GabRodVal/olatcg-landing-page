import * as React from 'react';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import { ImageModal } from './image-modal';

type CardProps = {
    focus:boolean;
    cardImage:any;
    title:string;
    description:string;
    buttonRedirect:string;
}

export function ToolCard({focus, cardImage, title, description, buttonRedirect}: CardProps){

    return(
        <div>
            <Box sx={{
                width:'60vw',
                display:'block',
                overflow:'hidden',
                backgroundColor:'secondary.light',
                borderRadius:'2rem',
                m:2,
                mr:4,
                ml:4,
                filter:focus? 'none':'blur(0.2rem)',
                pointerEvents:focus? 'auto':'none',
                '@media (max-width: 768px)' : {
                    width:'88vw',
                    filter:'none',
                    pointerEvents:'auto',
                    ml:8,
                    mr:8,
                }
            }}>
                {/*<Image src={cardImage} alt='tool' style={{width:'100%', height:'auto', borderRadius:'1.2rem 1.2rem 0 0'}}/>*/}
                <ImageModal cardImage={cardImage} title={title} description={description}/>
                <Box sx={{
                    display:'flex',
                    height: '11rem',
                    flexDirection:'column',
                    overflow:'hidden',
                    textOverflow:'ellipsis',
                    backgroundColor:'secondary.dark',
                    borderRadius:'0 0 1.2rem 1.2rem',
                    p:4,
                    pb:2,
                    pt:2,
                    '@media (max-width: 768px)' : {
                        height:'6rem'
                    }
                }}>
                    <Typography 
                        variant='h4'
                        sx={{
                            backgroundColor:'secondary.dark',
                            color:'primary.contrastText',
                            fontWeight: 500,
                            p:1,
                            '@media (max-width: 768px)' : {
                                fontSize: '1.6rem',
                                p:0
                            },
                        }}
                        >
                        {title}
                    </Typography>
                    <Typography 
                        variant='subtitle1'
                        noWrap={true}
                        sx={{
                            color:'primary.contrastText',
                            fontSize:'1.1rem',
                            fontWeight: 200,
                            p:1,
                            pt:0,
                            '@media (max-width: 768px)' : {
                                fontSize: '0.8rem',
                                p:0
                            },
                        }}
                        >
                        {description}
                    </Typography>
                    <Button 
                        variant='contained'
                        href={buttonRedirect}
                        sx={{
                            float:'right',
                            width: '20%',
                            mt:'auto',
                            ml:'auto',
                            backgroundColor:'secondary.main',
                            '@media (max-width: 768px)' : {
                                display:'none'
                            }
                            }}>
                            Acessar Aqui
                        </Button>
                </Box>
            </Box>
        </div>
    )

}
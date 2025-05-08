import { Box, Button, Paper, Typography } from '@mui/material';
import { TeamCard } from './team-card';

const teamArray = Array(12).fill({
    cardImage: '../../../public/logo.png',
    title: 'placeholder',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
})

export function TeamSection(){

    return (
        <Paper sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                overflow:'hidden',
                p:2,
                m:4,
                backgroundColor:'secondary.dark'
            }}>
                <Typography 
                    variant='h4'
                    sx={{color:'primary.contrastText',
                        fontWeight:500,
                    }}
                >
                    Conheça a Equipe
                </Typography>
                <Box 
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        overflowX:'scroll',
                        width:'100%',
                        mt:2
                    }}
                >
                    {teamArray.map((item, index) => (
                        <TeamCard key={index} cardImage={item.cardImage} title={item.title} description={item.description}/>
                    ))}
                </Box>
        </Paper>
    )
}
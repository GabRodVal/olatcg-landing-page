import { Avatar, Box, Button, Paper, Typography } from '@mui/material';

type TeamCardProps = {
    cardImage:string;
    title:string;
    description:string;
    //startDate:string;
    //endDate:string;
}

export function TeamCard({cardImage, title, description}: TeamCardProps){

    return (
        <Paper
            elevation={4}
            sx={{
                display:'flex',
                flexDirection:'column',
                width:'18rem',
                justifyContent:'center',
                alignItems:'center',
                borderRadius:'2rem',
                p:2,
                pl:4,
                pr:4,
                m:2,
                backgroundColor:'secondary.light'
            }}>
                <Avatar alt={title} src={cardImage} sx={{height:'12rem', width:'12rem'}}/>
                <Typography 
                    variant='h5'
                    sx={{
                        color:'secondary.contrastText',
                        fontWeight:500,
                        mt:2,
                        mb:1,
                    }}
                >
                    {title}
                </Typography>
                <Typography 
                    variant='body1'
                    sx={{
                        color:'warning.contrastText',
                        justifyContent:'center',
                        textAlign:'center',
                        fontStyle:'italic'
                    }}
                >
                    {description}
                </Typography>
        </Paper>
    )
}
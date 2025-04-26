import { Avatar, Box, Button, Divider, List, ListItem, ListItemText, ListItemAvatar, Paper, Typography } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';

const tools = [
    {
        title:'Funcionalidade 1',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: ScienceIcon,
    },
    {
        title:'Funcionalidade 2',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: ScienceIcon,
    },
    {
        title:'Funcionalidade 3',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: ScienceIcon,
    }
]

export function OurTools(){

    return(
        <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                m:'auto',
                maxWidth:'90%'
            }}>
            <Typography
                variant='h4'
                sx={{
                    color:'secondary.contrastText',
                    fontWeight:500,
                }}
                gutterBottom>
                Confira Diferentes Funcionalidades
            </Typography>
            <Box sx={{
                display:'flex',
                width:'100%',
                alignItems:'center',
                p:4,
            }}>
                <Paper sx={{width:'50%', height:'40vh'}}/>
                <Divider sx={{m:4}}orientation='vertical' variant='middle' flexItem/>
                <List sx={{width:'50%'}}>
                    {tools.map((item,index) => (
                        <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar sx={{width:'4rem', height:'4rem', mr:2, backgroundColor:'secondary.dark'}}>
                                    <item.icon sx={{fontSize:'3.2rem'}}/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                                primary={<Typography variant='h6'>{item.title}</Typography>}
                                secondary={item.description}/>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>

    )
}
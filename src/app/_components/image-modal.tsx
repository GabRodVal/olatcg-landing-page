import { useState } from 'react'
import Image from 'next/image';
import { Box, Modal, Typography} from '@mui/material';

type imageModalProps = {
    cardImage:any;
    title:string;
    description:string;
}

export function ImageModal({cardImage, title, description}:imageModalProps){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
            <Image 
                src={cardImage} 
                alt='tool'
                onClick={handleOpen}
                style={{
                    width:'100%',
                    height:'auto', 
                    borderRadius:'1.2rem 1.2rem 0 0',
                    cursor:'pointer'
                }}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position:'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100vw',
                    height: '100vh',
                    backgroundColor:'rgba(0, 0, 0, 0.33)',
                    p: 4,
                }}
                onClick={handleClose}
                >
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'center',
                        height:'100%'
                    }}>
                        <Image 
                            src={cardImage} 
                            alt='tool'
                            onClick={handleOpen}
                            style={{
                                width:'100%',
                                maxHeight:'75%',
                                height:'auto',
                                objectFit:'contain'
                            }}
                        />
                        <Box sx={{
                            width:'100%',
                            p:2
                            }}>
                            <Typography 
                                variant='h4'
                                sx={{
                                    color:'primary.contrastText',
                                    fontWeight: 500,
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
                                sx={{
                                    color:'primary.contrastText',
                                    fontSize:'1.1rem',
                                    fontWeight: 200,
                                    textAlign:'justify',
                                    wordWrap:'break-word', 
                                    hyphens:'auto',
                                    '@media (max-width: 768px)' : {
                                        fontSize: '0.8rem',
                                        p:0
                                    },
                                }}
                            >
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}
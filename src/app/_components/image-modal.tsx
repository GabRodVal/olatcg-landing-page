import { useState } from 'react'
import Image from 'next/image';
import { Box, Modal} from '@mui/material';

type imageModalProps = {
    cardImage:any
}

export function ImageModal({cardImage}:imageModalProps){
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
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}
                onClick={handleClose}
                >
                    <Image 
                        src={cardImage} 
                        alt='tool'
                        onClick={handleOpen}
                        style={{
                            width:'100%',
                            height:'auto', 
                        }}
                    />
                </Box>
            </Modal>
        </div>
    )
}
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#212121',
                color: '#fff',
                py: 3,
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 40px'
            }}
        >
            <Typography variant="h6" fontWeight="bold">
                Enlight Productions
            </Typography>

            <Box>
                <a
                    href="https://www.instagram.com/enlightproductions/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon style={{ margin: '0 10px', cursor: 'pointer', color: '#fff'}} />
                </a>
                
                <a
                    href="https://www.facebook.com/enlightproductions/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon style={{ margin: '0 10px', cursor: 'pointer', color: '#fff'}} />
                </a>
                {/*<TwitterIcon style={{ margin: '0 10px', cursor: 'pointer'}} />*/}
            </Box>
        </Box> 

    )
}

export default Footer;
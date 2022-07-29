import { Container , Stack, Typography} from '@mui/material';
import { Box } from '@mui/system';
// import { MDBContainer, MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Stack >        
           <Box   sx={{ justifyContent:"center", display:"grid", bgcolor:"whitesmoke", padding:"20px"}} >
               <Container  maxWidth="md"  sx={{ position:"relative"}} >
                <Link href="https://www.facebook.com/"  style={{ paddingLeft:"50px",paddingRight:"50px",  textDecoration:"none"}} >
                <FacebookOutlinedIcon color='warning' />
                </Link>
                <Link href="https://twitter.com/" style={{ paddingRight:"50px", textDecoration:"none"  }} >
                <TwitterIcon color='warning' />
                </Link>
                <Link href="https://www.instagram.com/" style={{ paddingRight:"50px", textDecoration:"none"  }} >
                <InstagramIcon color='warning' />
                </Link>
                <Link href="https://www.linkedin.com/" style={{ paddingRight:"50px", textDecoration:"none" }} >
                <LinkedInIcon color='warning' />
                </Link>
               </Container>
              
           </Box>
           <Box  sx={{ justifyContent:"center", display:{xs:"none", md:"grid"}, bgcolor:"black", padding:"20px"}}>
            
           <Container maxWidth="lg"   >
                   <Typography variant='overline' color="gray" >
                   © 2020 Copyright: <span> 
                       <a  href='https://Travlogger.com/' style={{ textDecoration:"none" , color:"goldenrod" }}>
                            TraVlogger.com
                       </a> 
               </span>
                   </Typography>
               
               
               </Container>
                  
           </Box>

        </Stack>
       
    );
};

export default Footer;
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import 'react-multi-carousel/lib/styles.css';
// import Nav from '../Nav'
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';


function Home() {
  return (
    <div>
    <Stack sx={{ position:"static", width:"100%",height:"100vh", justifyContent:"center" , backgroundImage:"url('https://s3images.zee5.com/wp-content/uploads/2021/08/man-wearing-white-shirt-brown-shorts-and-green-backpack-672358-e1578279373952.jpg')"}}>

        <div style={{display:"inline-grid"}} >

        <Typography variant='h2' pl={10} mt={-15} sx={{fontFamily: "'Noto Serif', serif", color:"White" , textShadow:"2px 4px 6px grey" }}>
            Enjoy your Tour<br />
            With Travel Experience
        </Typography>
        <Typography variant='subtitle1'  pl={10} mt={0}>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, <br />
        consectetur, adipisci velit, There is no one who loves pain itself, <br />
        who seeks after it and wants to have it, simply because it is pain...
        </Typography>
        </div>

        <div>
            <Button variant='outlined' type='button' >
            
            </Button>
        </div>
        </Stack>
        
        <Container sx={{ position:"static", justifyContent:"center", backgroundColor:"whitesmoke"}} >
                <Container  >
                <Typography variant='h4' textAlign="center" pt="100px" sx={{ fontFamily: "'Yeseva One', cursive" }} >
                Your Travel Information
                </Typography>
                </Container>
         
         <Grid maxWidth="xlg"sx={{display:"flex", width:"100%", height:"100vh" , alignItems:"center" , mt:"-50px"}} spacing={-50} >
            
             <Grid item md={4} sx={{width:"100%", justifyContent:"center" , marginRight:"-200px", marginLeft:"200px"}}>
                 <Box sx={{width:"250px" , height:"250px", bgcolor:"white", justifyContent:"center", alignItems:"center",borderRadius:"20%", boxShadow:"0px 6px 10px grey"}}>
                    <IconButton sx={{display:"grid" , width:"80%", height:"80%", justifyContent:"center", background:"none" }} >
                        <DirectionsBusFilledOutlinedIcon fontSize='small' sx={{ width:"80%" , height:"80%", color:"pink",pl:"40px"}} />
                    <Typography variant='body1' pl={5} >Book a Trip</Typography>
                    <Typography variant="caption" pl={5}  >"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
                    </IconButton>
                 </Box>
             </Grid>
             <Grid item md={4} sx={{width:"100%"}}>

             <Box sx={{width:"250px" , height:"250px", backgroundColor: "rgba(255,211,118,1)", justifyContent:"center", alignItems:"center",borderRadius:"20%",boxShadow:"1px 2px 10px #ff264c"}}>
                    <IconButton sx={{display:"grid" , width:"80%", height:"80%", justifyContent:"center", background:"none" }} >
                        <MapOutlinedIcon fontSize='small' sx={{ width:"80%" , height:"80%", color:"white",pl:"40px"}} />
                    <Typography variant='body1' pl={5} >Select Destination</Typography>
                    <Typography variant="caption" pl={5}  >"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
                    </IconButton>
                 </Box>
             </Grid>
             <Grid item md={4} sx={{width:"100%" , marginLeft:"-200px"}}>
             <Box sx={{width:"250px" , height:"250px", bgcolor:"white", justifyContent:"center", alignItems:"center",borderRadius:"20%", boxShadow:"6px 0px 10px grey"}}>
                    <IconButton sx={{display:"grid" , width:"80%", height:"80%", justifyContent:"center", background:"none" }} >
                        <AirplanemodeActiveRoundedIcon fontSize='small' sx={{ width:"80%" , height:"80%", color:"pink",pl:"40px"}} />
                    <Typography variant='body1' pl={5} >Take your Flight</Typography>
                    <Typography variant="caption" pl={5}  >"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
                    </IconButton>
                 </Box>
             </Grid>
         </Grid>
         </Container>
         <Stack sx={{  width:"100%",height:"100vh", justifyContent:"center" , backgroundColor:"gray"}}>
            <Container >
                <Typography variant='h4' textAlign="center"  >
                    The Best Travel Places
                </Typography>
            </Container>
         </Stack>
    </div>
  )
}

export default Home;
import { Avatar, Box, Card,  CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import "./Home.css";
import 'react-multi-carousel/lib/styles.css';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import Nav from '../Nav';
import Footer from '../Footer';


// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
// import { Link } from 'react-router-dom';



function Home() {

    const content = [
        {   
            
            title: "Shivya Nath",
            subtitle: "",
            description: " “In 2011, at age 23, I quit my corporate job to travel the world. This journey has taken me as far within as with my feet. ”  ",
            image :"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/blogging-1.jpg",
            image1 :"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/shivya.png",
            id : 0,
            link : "http://the-shooting-star.com/",  

        },
        {
            title: "Sankara",
            subtitle:"",
            description: "“I am one of those people who feels at home when he is on the road.”",
            image :"http://blog.redbus.in/wp-content/uploads/2021/02/road-5089188_640.jpg",
            image1 :"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/sankara1.jpg",
            id : 1,
            link : "http://www.beontheroad.com/", //http://www.beontheroad.com/

        },
        {
            title: "Siddhartha Joshi",
            subtitle: "",
            description: "“I truly believe that only traveling can break barriers and make us more tolerant and accepting of our differences.”",
            image:"https://quikrpost.com/wp-content/uploads/2015/02/travel-blogging-india-quikrpost.png",
            image1:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/siddhartha.jpg",
            id : 2,
            link : "http://www.sid-thewanderer.com/", //http://www.sid-thewanderer.com/

        },
        {
            title: "Ankita Sinha",
            subtitle: "",
            description: "“Every time I try to break up with the idea of uncertainty that travelling the world puts me in, I find my life more organised with every place.”",
            image:"https://www.digitalvidya.com/wp-content/uploads/2016/11/Ankita-Sinha_travel-blogger-1024x683.jpg",
            image1:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/ankita.jpg",
            id : 3,
            link : "http://www.ankionthemove.com/", //http://www.ankionthemove.com/

        }
        
      
      ] ;

  return (
    <div>
    <Nav />
    {/* ------------------------------------------------------------ */}
        <Stack id="home" sx={{ position:"static",height:"100vh", justifyContent:"center" , backgroundImage:"url('https://s3images.zee5.com/wp-content/uploads/2021/08/man-wearing-white-shirt-brown-shorts-and-green-backpack-672358-e1578279373952.jpg')"}}>

        <Container style={{display:"grid"}} >

        <Typography variant='h2' pl={10} mt={-15} sx={{fontFamily: "'Bebas Neue', cursive", color:"White" , textShadow:"2px 4px 6px grey" }}>
            Enjoy your Tour <br />
            With Travel Experience
        </Typography>
        <Typography variant='subtitle1'  pl={10} mt={0}>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, <br />
        consectetur, adipisci velit, There is no one who loves pain itself, <br />
        who seeks after it and wants to have it, simply because it is pain...
        </Typography>
        </Container>

        </Stack> 
    {/* ------------------------------------------------------------- */}
        <Stack sx={{ height:"100vh", backgroundColor:"#b2ebf2"}} >
                <Typography variant='h4' textAlign="center" pt="100px" sx={{ fontFamily: "'Yeseva One', cursive" }} >
                Your Travel Information
                </Typography>
                <div style={{ display:"flex",justifyContent:"center" }} >
                <Divider orientation='horizontal' sx={{ width:"350px", border:"1.5px solid #004d40"}} />
                </div>

          <Stack container sx={{ justifyContent:"center" ,alignItems:"center" }} >
   
           <Grid maxWidth="md" sx={{ display:"flex" , mt:"50px"}} spacing={3} >
            
                <Grid item md={4} >
                   <Box sx={{width:"250px" , height:"250px", bgcolor:"white", justifyContent:"center", alignItems:"center",borderRadius:"20%", boxShadow:"0px 6px 10px grey"}}>
                    <IconButton sx={{display:"grid" , width:"80%", height:"80%", justifyContent:"center", background:"none" }} >
                        <DirectionsBusFilledOutlinedIcon fontSize='small' sx={{ width:"80%" , height:"80%", color:"pink",pl:"40px"}} />
                    <Typography variant='body1' pl={5} >Book a Trip</Typography>
                    <Typography variant="caption" pl={5}  >"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
                    </IconButton>
                 </Box>
             </Grid>
             <Grid item md={4} >

             <Box sx={{width:"250px" , height:"250px", backgroundColor: "rgba(255,211,118,1)", justifyContent:"center", alignItems:"center",borderRadius:"20%",boxShadow:"1px 2px 10px #ff264c"}}>
                    <IconButton sx={{display:"grid" , width:"80%", height:"80%", justifyContent:"center"  }} >
                        <MapOutlinedIcon fontSize='small' sx={{ width:"80%" , height:"80%", color:"white",pl:"40px"}} />
                    <Typography variant='body1' pl={5} >Select Destination</Typography>
                    <Typography variant="caption" pl={5}  >"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
                    </IconButton>
                 </Box>
             </Grid>
             <Grid item md={4} sx={{ }}>
             <Box sx={{width:"250px" , height:"250px", bgcolor:"white", justifyContent:"center", alignItems:"center",borderRadius:"20%", boxShadow:"6px 0px 10px grey"}}>
                    <IconButton sx={{display:"grid" , width:"80%", height:"80%", justifyContent:"center", background:"none" }} >
                        <AirplanemodeActiveRoundedIcon fontSize='small' sx={{ width:"80%" , height:"80%", color:"pink",pl:"40px"}} />
                    <Typography variant='body1' pl={5} >Take your Flight</Typography>
                    <Typography variant="caption" pl={5}  >"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
                    </IconButton>
                 </Box>
             </Grid>
         </Grid>    
         </Stack>               
         </Stack>

    {/* ------------------------------------------------------------- */}
         <Stack pt="20px" pb="20px" sx={{  width:"100%",height:"100vh", justifyContent:"center" , backgroundColor:"gray"}}>
            <Container sx={{  width:"100%" , height:"100%" , p:"20px"}} >
                <Typography variant='h4' textAlign="center" color="white" fontFamily="'Yeseva One', cursive" pb="10px"  >
                    The Best Travel Bloggers
                </Typography>
                <div style={{ display:"flex",justifyContent:"center" }} >
                <Divider orientation='horizontal' sx={{ width:"350px", border:"1.5px solid #b2ebf2"}} />
                </div>
                <Stack sx={{justifyContent:"center" }} >

                <Grid maxWidth="md" spacing={2}  pb={5} ml={14}  sx={{display:"flex" , justifyContent:"center"}} >

     { content.map((card) => (  

                <Grid item md={3}  pr="10px" mt="20px"   sx={{ width:"100%"}} >
                    <a display="grid" href={card.link} style={{ textDecoration:"none" }} >
                          <Box sx={{ width:"100%",height:"100%", padding:"5px",  boxShadow :"2px 2px 10px #ccc" , borderRadius:"10px"  }} >

                              <Card className='card' sx={{width:"100%",height:"100%"}} >
                              <CardHeader      sx={{ width:"auto" , height:"20px"}}                           
                                    avatar={
                                   <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                                     <img src={card.image1} alt="profile"  width="40px" height="40px" />
                                   </Avatar>
                                 }
                                 title={card.title}
                                 
                                 />                    
                                <CardMedia
                            component="img"
                            height="200"
                            width="200"
                            image={card.image}
                            alt="Paella dish"
                          />
                                    
                          <CardContent >
                            <Typography variant="caption" color="text.secondary">
                              {card.description}
                            </Typography>
                          </CardContent>
                       </Card>
                    
                    
                       </Box>

                       </a>
                     </Grid>

        ) ) } 

                    
                </Grid>
                    
                </Stack>
            </Container>
         </Stack> 
    {/* ------------------------------------------------------------- */}
         <Footer />
    {/* ------------------------------------------------------------- */}
    </div>
  )
}

export default Home;


    
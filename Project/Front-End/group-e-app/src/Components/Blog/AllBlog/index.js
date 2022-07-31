import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BlogNav from '../BlogNav';

function AllBlogs() {

    const data = [
        {
            name:"Shivya Nath",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/shivya.png",
            image:"https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/03/Intrepid-Travel-Italy_CinqueTerre_Manarola_Scenic_Travellers.jpg",
            place:"My Italy Visit",
            description:"Its a good place to visit"

        },
        {
            name:"Sankara",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/sankara1.jpg",
            image:"http://blog.redbus.in/wp-content/uploads/2021/02/road-5089188_640.jpg",
            place:"My Norway Visit",
            description:"Its a good place to vsit"

        },
        {
            name:"Siddhartha Joshi",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/siddhartha.jpg",
            image:"https://quikrpost.com/wp-content/uploads/2015/02/travel-blogging-india-quikrpost.png",
            place:"Everest Mountain",
            description:"Best Experience"

        },
        {
            name:"Ankita Sinha",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/ankita.jpg",
            image:"https://www.digitalvidya.com/wp-content/uploads/2016/11/Ankita-Sinha_travel-blogger-1024x683.jpg",
            place:"KuluManali",
            description:"Its a good place to vsit"

        },
        {
            name:"Shivya Nath",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/shivya.png",
            image:"https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/Author-photo-2---Shivya-Nath-(1).jpg",
            place:"My Italy Visit",
            description:"Its a good place to vsit"

        },
    ];


    // const content = [
    //     {   
            

    //     {
    //         title: "Sankara",
    //         subtitle:"",
    //         description: "“I am one of those people who feels at home when he is on the road.”",
    //         image :"http://blog.redbus.in/wp-content/uploads/2021/02/road-5089188_640.jpg",
    //         image1 :"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/sankara1.jpg",
    //         id : 1,
    //         link : "http://www.beontheroad.com/", //http://www.beontheroad.com/

    //     },
    //     {
    //         title: "Siddhartha Joshi",
    //         subtitle: "",
    //         description: "“I truly believe that only traveling can break barriers and make us more tolerant and accepting of our differences.”",
    //         image:"https://quikrpost.com/wp-content/uploads/2015/02/travel-blogging-india-quikrpost.png",
    //         image1:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/siddhartha.jpg",
    //         id : 2,
    //         link : "http://www.sid-thewanderer.com/", //http://www.sid-thewanderer.com/

    //     },
    //     {
    //         title: "Ankita Sinha",
    //         subtitle: "",
    //         description: "“Every time I try to break up with the idea of uncertainty that travelling the world puts me in, I find my life more organised with every place.”",
    //         image:"https://www.digitalvidya.com/wp-content/uploads/2016/11/Ankita-Sinha_travel-blogger-1024x683.jpg",
    //         image1:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/ankita.jpg",
    //         id : 3,
    //         link : "http://www.ankionthemove.com/", //http://www.ankionthemove.com/

    //     }
        
      
    //   ] ;

  return (
    <div style={{ background:"rgba(0, 0, 0, 0.9)"}}>
        <BlogNav />
        <Stack sx={{ pt:10 }} >
            <Container maxWidth="sm" >
            {data.map((card) => {
                return (
                   <div style={{ padding:" 0% 5% 0% 5% "}}>
                    <Card  sx={{mb:"10px", bgcolor:"#4A4A4A", color:"white"}} >
                        <CardHeader
                             avatar={
                                <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                                 <img src={card.avatar} alt="profile"  width="40px" height="40px" />
                                </Avatar>
                                     }
                            title={card.place} 
                        />

                        <CardMedia
                          component="img"
                          height="300"     
                          width="200"     
                          image={card.image}
                          alt={card.name}
                        />

                        <CardContent>
                          <Typography variant="body2" color="white">
                                         {card.name} : {card.description}
                          </Typography>
                        </CardContent>

                        <CardActions sx={{pt:"-30px"}} >
                          <IconButton  >
                            <ThumbUpIcon />
                          </IconButton>
                          <IconButton>
                            <CommentIcon />
                          </IconButton>
                          <IconButton >
                            <ShareIcon />
                          </IconButton> {/* <ViewIcon />  */}
                        </CardActions>

                    </Card>
                   </div>
                )
            })
            }

            </Container>


        </Stack>
    </div>
  )
}

export default AllBlogs
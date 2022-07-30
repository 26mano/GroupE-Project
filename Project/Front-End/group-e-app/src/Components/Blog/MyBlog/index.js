import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BlogNav from '../BlogNav';

export default function MyBlog() {

    
    const data = [
        {
            name:"Shivya Nath",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/shivya.png",
            image:"https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/03/Intrepid-Travel-Italy_CinqueTerre_Manarola_Scenic_Travellers.jpg",
            place:"My Italy Visit",
            description:"Its a good place to visit"

        },
        {
            name:"Shivya Nath",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/shivya.png",
            image:"https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/03/Intrepid-Travel-Italy_CinqueTerre_Manarola_Scenic_Travellers.jpg",
            place:"My Italy Visit",
            description:"Its a good place to vsit"

        },
        {
            name:"Shivya Nath",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/shivya.png",
            image:"https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/03/Intrepid-Travel-Italy_CinqueTerre_Manarola_Scenic_Travellers.jpg",
            place:"My Italy Visit",
            description:"Its a good place to vsit"

        },
        {
            name:"Shivya Nath",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/shivya.png",
            image:"https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/03/Intrepid-Travel-Italy_CinqueTerre_Manarola_Scenic_Travellers.jpg",
            place:"My Italy Visit",
            description:"Its a good place to vsit"

        },
        {
            name:"Shivya Nath",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/shivya.png",
            image:"https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/03/Intrepid-Travel-Italy_CinqueTerre_Manarola_Scenic_Travellers.jpg",
            place:"My Italy Visit",
            description:"Its a good place to vsit"

        },
    ];

  return (
    <div style={{ background:"rgba(0, 0, 0, 0.9)"}}>
        <BlogNav />
        <Stack sx={{ pt:10 }} >
            <Container maxWidth="sm" >
            {data.map((card) => {
                return (
                 <div  style={{ padding:" 0% 5% 0% 5% "}} >
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
                          maxHeight="300"     
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

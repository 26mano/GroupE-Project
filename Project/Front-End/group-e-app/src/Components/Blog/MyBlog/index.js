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
            image:"https://moderndiplomacy.eu/wp-content/uploads/2020/10/Shivya-Nath.jpg",
            place:"My China Visit",
            description:"Its a good place to visit"

        },
        {
            name:"Shivya Nath",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/shivya.png",
            image:"https://225508-687545-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/Shivya-Nath-at-Spiti.jpg",
            place:"My Spiti Visit",
            description:"Its a good place to vsit"

        },
        {
            name:"Shivya Nath",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/shivya.png",
            image:"https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/Author-photo-2---Shivya-Nath-(1).jpg",
            place:"Himachal Pradesh",
            description:"Its a good place to vsit"

        },
        {
            name:"Shivya Nath",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/shivya.png",
            image:"https://images.yourstory.com/cs/4/8e7cc4102d6c11e9aa979329348d4c3e/Untitleddesign101569817033930png?fm=png&auto=format&blur=500",
            place:"TamilNadu",
            description:"Its a good place to vsit"

        },
        {
            name:"Shivya Nath",
            avatar:"https://www.escape2explore.com/blog/wp-content/uploads/2015/12/shivya.png",
            image:"https://www.holidify.com/images/cmsuploads/compressed/shivya_20190927194610.jpg",
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

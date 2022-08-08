import React from "react";
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography, IconButton } from '@mui/material'
import "../../Home/Home.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router";


const  MyBlogCard = (props) => {
const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/ADDBlog/Edit/${props.id}`)
    }
    return(
        <>
   
           <div className="col-md-4 col-10 mx-auto">
              <div className="card1" >

                      <Card sx={{ bgcolor:"grey", width:"100%" }} >
                       <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: "#c7522a" }} aria-label={props.name}>
                              {props.name[0]}
                              {/* <img src={props.avatar} width="50px" height="50px" alt={props.name} /> */}
                            </Avatar>
                          } 
                          title={props.name}
                          action={
                            <div>
                            <IconButton aria-label="edit" onClick={handleEdit} >
                              <EditIcon fontSize="small"  />
                            </IconButton>
                            <IconButton aria-label="delete"  onClick={() => {   
                              props.deleteIndex(props.index);
                              }} >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                            </div>
                          }

                  
                          
                      /> 
                    <CardMedia 
                      component="img"
                      height="200"
                      image={props.image}
                     />
                      <CardContent >
                        <Typography variant="body1" > <span style={{fontWeight:"bold"}} > Place: </span> {props.place}</Typography>
                        <Typography variant="caption" > {props.description}</Typography>
                      </CardContent>
                 </Card>

                    </div>
                  </div>
            
            
        </>
    )
}
export default MyBlogCard
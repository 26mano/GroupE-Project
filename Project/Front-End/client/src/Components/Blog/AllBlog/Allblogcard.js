import React, { useContext } from "react";
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import "../../Home/Home.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router";
import { userContext } from "../../../App";
// import Pagination from 'react-bootstrap/Pagination';

const  Allblogcard = (props) => {
  const {state} = useContext(userContext);
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
                            <Avatar sx={{ bgcolor: props.user === "123" ? "#c7522a" : "#008585" }} aria-label="recipe">
                              {props.name[0]}
                              {/* <img src={props.avatar} width="50px" height="50px" alt={props.name} /> */}
                            </Avatar>
                          } 
                          title={props.name}
                          action={  state && (props.user === "123")
                            // props.user ==="123"
                          ?
                          <div>
                          <IconButton aria-label="edit" onClick={handleEdit} >
                            <EditIcon fontSize="small"  />
                          </IconButton>
                          <IconButton aria-label="delete"  onClick={() => {   
                            props.deleteIndex(props.index);
                            }} >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                          </div>: " "
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
  
                    {/* <img src={props.avatar} className="card-img-top" alt="..." />
                    <h6  className="card-title text-blue mb-3 fw-bold">{props.name}</h6>
                    <div className="fw-bold mt-3 fs-6 small">
                    <img src={props.image} className="card-img-top" alt="..." />

                    </div>
                    <div className= "card-body">
                  
                      <h6  className="card-title text-blue mb-3 fw-bold">
                      <a href="#" className="fw-bold text-blue fs-6">{props.place} </a> </h6>
                      <p className="card-text mt-3">{props.description}</p> */}
                     
                    </div>
                  </div>
            
            
        </>
    )
}
export default Allblogcard;
import React from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, Typography } from '@mui/material'

import { Container } from '@mui/system';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BlogNav from '../BlogNav';
const  Allblogcard = (props) => {
    return(
        <>
 <div className="col-md-4 col-10 mx-auto">
                  <div className= "card">
                    <img src={props.avatar} className="card-img-top" alt="..." />
                    <h6  className="card-title text-blue mb-3 fw-bold">{props.name}</h6>
                    <div className="fw-bold mt-3 fs-6 small">
                    <img src={props.image} className="card-img-top" alt="..." />

                    </div>
                    <div className= "card-body">
                   

                      <h6  className="card-title text-blue mb-3 fw-bold">
                      <a href="#" className="fw-bold text-blue fs-6">{props.place} </a> </h6>
                      <p className="card-text mt-3">{props. description}</p>
                     
                    </div>
                  </div>
                </div>
     
        </>
    )
}
export default Allblogcard;
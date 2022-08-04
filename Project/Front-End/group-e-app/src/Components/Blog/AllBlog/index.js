import { Typography } from "@mui/material";

import React, { useCallback, useEffect, useState } from "react";
import Nav from "../../Nav";
import Allblogcard from "./Allblogcard";
// import Allblogdata from "./Allblogdata";
import data from "../data";

function AllBlog(id,name,place,des) {

  localStorage.setItem('id',JSON.stringify(id))
  localStorage.setItem('name',JSON.stringify(name))
  localStorage.setItem('place',JSON.stringify(place))
  localStorage.setItem('description',JSON.stringify(des))
const [actualData, setActualData] = useState(data);
 useEffect(() => {
    if(!localStorage.getItem('data')){
      localStorage.setItem('data', JSON.stringify(actualData))
    }else {
      setActualData(JSON.parse(localStorage.getItem('data')));
    }
 },[actualData])


 const handleDeleteData = useCallback((i) => {
  const newArrayItem = actualData.filter((arr,index) => (
          index !== i
        ));
      setActualData(newArrayItem);
      localStorage.setItem('data', JSON.stringify(newArrayItem))
   },[actualData])

  return ( 
<div style={{ backgroundColor:"grey", paddingTop:"70px" }} > 
<Nav/>
<section className="px-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Typography variant="h4" fontFamily="'Yeseva One', cursive" color="white" className="section-title fw-bold mb-2 text-center" >Lates Blogs</Typography>
                            <nav aria-label="breadcrumb">
                               
                            </nav>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="section-padding pb-fix">
             <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4" style={{ marginTop:"5px" , backgroundColor:"grey" }} >
          
            {  actualData.map((value,index) =>{
                          return (
                            <Allblogcard 
                                user={value.user}
                                name={value.name}
                                avatar={value.avatar}
                                image={value.image}
                                id={value.id}
                                index={index}
                                place={value.place}
                                description={value.description}
                                deleteIndex={handleDeleteData}
                               />
                   
                                    )
                                    
                                    })   }
          

              
                
                </div>
                </div>

                
                </div>
              </div>
              <div className="d-flex justify-content-center">
              
    
     
   
</div>
             </section>

</div>
  )
}
 
export default AllBlog






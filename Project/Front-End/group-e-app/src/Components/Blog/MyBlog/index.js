import { Typography } from "@mui/material";

import React from "react";
import Nav from "../../Nav";
import MyBlogCard from "./MyBlogCard";
import Myblogdata from "./Myblogdata";

function MyBlog(id,name,place,des) {
  localStorage.setItem('id',id)
  localStorage.setItem('name',name)
  localStorage.setItem('place',place)
  localStorage.setItem('description',des)

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
          
            {  Myblogdata.map((value,index) =>{
                          return (
                            <MyBlogCard 
                                name={value.name}
                                avatar={value.avatar}
                                image={value.image}
                                place={value.place}
                                description={value.description}
                               />
                   
                                    )
                                    
                                    })   }
          

   
        
                {/* {  Allblogdata.map((value,index) =>{
                          return (
                            <Allblogcard 
                                name={value.name}
                                avatar={value.avatar}
                                image={value.image}
                                place={value.place}
                                description={value.description}
                               />
                   
                                    )
                                    
                                    })   } */}
 
                            

              
             
              
              
                
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
 
export default MyBlog






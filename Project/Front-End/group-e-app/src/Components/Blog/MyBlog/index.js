import { Typography } from "@mui/material";

import React, { useCallback, useEffect, useState } from "react";
import Nav from "../../Nav";
import MyBlogCard from "./MyBlogCard";
// import Myblogdata from "./Myblogdata";
import data from "../data";
import Footer from "../../Footer";


function MyBlog(id,name,place,des) {
  localStorage.setItem('id',id)
  localStorage.setItem('name',name)
  localStorage.setItem('place',place)
  localStorage.setItem('description',des)
  
  const [myData, setMyData] = useState(data);

  useEffect(() => {
    if(!localStorage.getItem('data')){
      localStorage.setItem('data', JSON.stringify(myData))
    }else {
      setMyData(JSON.parse(localStorage.getItem('data')))
    }
  },[])

  const handleDeleteData = useCallback((i) => {
  const newArrayItem = myData.filter((arr,index) => (
          index !== i
        ));
      setMyData(newArrayItem);
      localStorage.setItem('data', JSON.stringify(newArrayItem))
   },[myData])

return ( 
    <div style={{ backgroundColor:"grey", paddingTop:"70px" }} > 
           <Nav/>
           <section className="px-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Typography variant="h4" fontFamily="'Yeseva One', cursive" color="white" className="section-title fw-bold mb-2 text-center" >My Blogs</Typography>

                        </div>
                    </div>
                </div>
            </section> 
            <section className="section-padding pb-fix">
             <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4" style={{ marginTop:"5px" , backgroundColor:"grey" }} >
          
            {myData.map((value,index) => {
                  if(value.user === "123"){
                  return (
                            <MyBlogCard 
                                name={value.name}
                                avatar={value.avatar}
                                image={value.image}
                                place={value.place}
                                id={value.id}
                                index={index}
                                description={value.description}
                                deleteIndex={handleDeleteData}
                               />
                        )}
                      })   
            }

         </div>
         </div>

                
                </div>
              </div>
              <div className="d-flex justify-content-center">
              
    
     
   
</div>
             </section>
<Footer />
</div>
  )
}
 
export default MyBlog


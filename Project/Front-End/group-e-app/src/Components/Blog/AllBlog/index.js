import React from "react";
import Nav from "../../Nav";
import Allblogcard from "./Allblogcard";
import Allblogdata from "./Allblogdata";

function AllBlog() {
  return ( 
<div>
<Nav/>
<section className="px-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title fw-bold mb-2 text-center">Latest Blogs</h2>
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
              <div className="row gy-4">
            
                {
                  Allblogdata.map((value,index) =>{
                 return <Allblogcard 
                 name={value.name}
                 avatar={value.avatar}
                   image={value.image}
                   place={value.place}
                   description={value.description}
                 />
               
               })
                }
              
              
                
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
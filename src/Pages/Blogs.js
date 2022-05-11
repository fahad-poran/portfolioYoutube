import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data';

const Blogs = () => {
    const [blogs,setBlogs] = useState(blogsData);
    
const trancateString = (str,num)=>{
    if(str.length > num){
        return str.slice(0,num)+"...";
    }else{
        return str
    }
}
    return (
        <div>
           <h2>This is blog page*</h2>
           <section>
               {blogs.map((blog)=>{
                   const {id,title, body} = blog;
                   return <article key={id}>
                       <h2>{title}</h2>
                       <h4>{trancateString(body,100)}</h4>
                       <Link to={title}>Learn More</Link>
                   </article>
               })}
               </section> 
        </div>
    );
};

export default Blogs;
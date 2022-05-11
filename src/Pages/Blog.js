import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogsData } from '../data';

const Blog = () => {
    const {title} = useParams();
    const [bodyData, setBodyData] = useState("");

    useEffect(()=>{
        const blogData = blogsData.filter((blog)=> blog.title === title);
        setBodyData(blogData[0].body);
        console.log(bodyData[1]);
    }

   ,[] );
    return (
        <div>
            <h2>{title}</h2>
            <h4>{bodyData}</h4>
        </div>
    );
};

export default Blog;
import React, { useState, useEffect } from "react";
import '../App.css';

const Blog = () => {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch (`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType])

  return (
    <>
    <div id="blog-buttons">
     <button onClick={()=> setResourceType('posts')}>Posts</button>
     <button onClick={()=> setResourceType('comments')}>Reviews</button>
     </div>
     <h1>We care about your opinion!</h1>
     <div className="fetch-container">
     {items.map(item => {
       return (
       <div id="pre" key={item.id}><img id="dynamic-imgs" src="https://images.vexels.com/media/users/3/144066/isolated/preview/00c9f19169fbda083382d2d1bbaa5d37-comment-bubble.png" alt="comments"/>
       <p>{JSON.stringify(item.body)}</p></div>
       )
     })}
     <div className="footer">
    <h3>Alexander Lopez - HYF 2022 - Basic React </h3>
  </div>
</div>
    </> 
  )
};

export default Blog;
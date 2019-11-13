import React, {useEffect, useState} from 'react';
//import axios from 'axios';
import axios from '../../axios.js';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const Blog = () => {

    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState({});

    useEffect(()=>{
                axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                        setPosts(()=>response);
                })
                .catch(err => {
                    console.log('[Blog.js] ',err);
                })
              
    },[]);

    const postClickHandler = (title, content) => {
        setSelectedPost(() => ({title, content}));
      
    };

        return (
            <div>
                    <section className="Posts">
                        {posts.data ? posts.data.map((cv,idx) => {
                            return <Post 
                                    clickHandler={postClickHandler} 
                                    title={cv.title} content={cv.body} 
                                    author="Matt" 
                                    key={idx}/>
                            }) : null 
                        }
                    </section>
                    <section>
                        <FullPost selectedPost={selectedPost}/>
                    </section>
                    <section>
                        <NewPost />
                    </section>
            </div>
        );
}

export default Blog;
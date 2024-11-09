

import React from 'react';
import './BlogPost.css';
import { Link } from 'react-router-dom';

const BlogPost = ({ title, content, image, date, link }) => {
    return (
        <div className="blog-post">
            {/* <img src={image} alt={title} className="blog-image" /> */}
            <h2>{title}</h2>
            <p className="blog-date">{date}</p>
            <p>{content}</p>
            <Link to={link} className="read-more-button">Read More</Link>
        </div>
    );
};

export default BlogPost;
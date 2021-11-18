import React from 'react';
import blogs from '../Components/allBlogs';

function BlogPage() {
    return (
    <div className="BlogsPage">
        {
            blogs.map((blog) =>{
                return (
                    <div className="blog" key={blog.id}>
                        <div className="blog-content">
                            <img src={blog.image} alt=""/>
                            <a href="github.com" className="blog-link">

                            </a>
                        </div>
                    </div>
                )
            })
        }
    </div>
    )
}
export default BlogPage;

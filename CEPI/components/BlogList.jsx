import React from 'react';
function BlogList({ blogs }) {
    return (
        <div className="Blogs container">
            <div className="row">
                {blogs.map(blog => (
                    <div key={blog.id} className="col-lg-4 col-md-12 mb-4">
                        <div className="row mb-4">
                            <div className="col-12">
                                <img src="images/Blog.png" className="img-fluid" width="50%" alt="Blog Image" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="block-title" id="Titres">
                                    <h3>{blog.Titre}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="block-content">
                                    <p>{blog.Contenu}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
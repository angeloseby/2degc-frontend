import React from 'react';
import Image from 'next/image';
import { getStrapiMedia } from '@/lib/api';

const ProjectSection = ({ projects, title = "Visit Our Latest Solar And Renewable Energy Projects", subtitle = "Our Projects" }) => {
    // Category to Isotope Class mapping
    const categoryMapping = {
        "Solar Panels": "first",
        "Wind Turbines": "second",
        "Hydropower": "third"
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h6 className="text-primary">{subtitle}</h6>
                    <h1 className="mb-4">{title}</h1>
                </div>
                <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="col-12 text-center">
                        <ul className="list-inline mb-5" id="portfolio-flters">
                            <li className="mx-2 active" data-filter="*">All</li>
                            <li className="mx-2" data-filter=".first">Solar Panels</li>
                            <li className="mx-2" data-filter=".second">Wind Turbines</li>
                            <li className="mx-2" data-filter=".third">Hydropower Plants</li>
                        </ul>
                    </div>
                </div>
                <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
                    {projects && projects.length > 0 ? (
                        projects.map((project, index) => {
                            const attrs = project.attributes || project;
                            const isotopeClass = categoryMapping[attrs.Category] || "";
                            const imageUrl = getStrapiMedia(attrs.CoverImage?.data?.attributes?.url || attrs.CoverImage?.url);
                            
                            return (
                                <div key={project.id || index} className={`col-lg-4 col-md-6 portfolio-item ${isotopeClass}`}>
                                    <div className="portfolio-img rounded overflow-hidden">
                                        <div className="position-relative w-100" style={{ height: '250px' }}>
                                            {imageUrl ? (
                                                <Image 
                                                    src={imageUrl} 
                                                    alt={attrs.Title || "Project Image"} 
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                    className="img-fluid"
                                                />
                                            ) : (
                                                <div className="bg-secondary w-100 h-100 d-flex align-items-center justify-content-center text-white">
                                                    No Image
                                                </div>
                                            )}
                                            <div className="portfolio-btn">
                                                {imageUrl && (
                                                    <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href={imageUrl} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                                )}
                                                <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href={attrs.Link || ""}><i className="fa fa-link"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <p className="text-primary mb-0">{attrs.Category || "Miscellaneous"}</p>
                                        <hr className="text-primary w-25 my-2" />
                                        <h5 className="lh-base">{attrs.Title || "Project Title"}</h5>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-12 text-center py-5">
                            <p className="text-muted">No projects found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;

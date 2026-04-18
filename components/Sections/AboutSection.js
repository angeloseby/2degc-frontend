import React from 'react';
import Image from 'next/image';
import { getStrapiMedia } from '@/lib/api';

const AboutSection = ({ data }) => {
    // Fallback data
    const title = data?.Title || "25+ Years Experience In Solar & Renewable Energy Industry";
    const description = data?.Description || "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet";
    const featuredImageUrl = getStrapiMedia(data?.FeaturedImage?.data?.attributes?.url || data?.FeaturedImage?.url) || "/img/about.jpg";
    const checklist = data?.Checklist || [];

    return (
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
            <div className="container about px-lg-0">
                <div className="row g-0 mx-lg-0">
                    <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
                        <div className="position-relative h-100">
                            <Image 
                                src={featuredImageUrl} 
                                alt="About Us" 
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: 'cover' }}
                                className="position-absolute img-fluid w-100 h-100"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                        <div className="p-lg-5 pe-lg-0">
                            <h6 className="text-primary">About Us</h6>
                            <h1 className="mb-4">{title}</h1>
                            <div className="mb-4" dangerouslySetInnerHTML={{ __html: description }} />
                            
                            {checklist.map((item, index) => (
                                <p key={index}>
                                    <i className="fa fa-check-circle text-primary me-3"></i>
                                    {(item.attributes || item).Text || (item.attributes || item).Title}
                                </p>
                            ))}
                            
                            {checklist.length === 0 && (
                                <>
                                    <p><i className="fa fa-check-circle text-primary me-3"></i>Diam dolor diam ipsum</p>
                                    <p><i className="fa fa-check-circle text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                                    <p><i className="fa fa-check-circle text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                                </>
                            )}
                            
                            <a href="/service" className="btn btn-primary rounded-pill py-3 px-5 mt-3">Explore More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;

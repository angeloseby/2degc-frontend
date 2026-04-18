import React from 'react';
import { getStrapiMedia } from '@/lib/api';

const Hero = ({ slides }) => {
    // Default slides if none provided
    const defaultSlides = [
        {
            Title: "Pioneers Of Solar And Renewable Energy",
            Description: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
            ButtonText: "Read More",
            ButtonLink: "",
            Image: { url: "/img/carousel-1.jpg" }
        }
    ];

    const finalSlides = slides && slides.length > 0 ? slides : defaultSlides;

    return (
        <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="owl-carousel header-carousel position-relative">
                {finalSlides.map((slide, index) => {
                    const attrs = slide;
                    const imageUrl = getStrapiMedia(attrs.Image?.data?.attributes?.url || attrs.Image?.url);
                    
                    return (
                        <div 
                            key={index} 
                            className="owl-carousel-item position-relative" 
                            data-dot={`<img src='${imageUrl}'>`}
                        >
                            <img className="img-fluid" src={imageUrl} alt={attrs.Title} />
                            <div className="owl-carousel-inner">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-10 col-lg-8">
                                            <h1 className="display-2 text-white animated slideInDown">{attrs.Title}</h1>
                                            <p className="fs-5 fw-medium text-white mb-4 pb-3">{attrs.Description}</p>
                                            <a href={attrs.ButtonLink || "#"} className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">
                                                {attrs.ButtonText}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Hero;

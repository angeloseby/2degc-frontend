import React from 'react';
import { fetchAPI } from '@/lib/api';
import Hero from '@/components/Home/Hero';
import TeamSection from '@/components/Sections/TeamSection';
import ProjectSection from '@/components/Sections/ProjectSection';

export default async function Home() {
    // Fetch data for the homepage
    let homeData = null;
    let teamMembers = [];
    let projects = [];

    try {
        const [homeRes, teamRes, projectRes] = await Promise.all([
            fetchAPI("/home-page", { 
                populate: {
                    HeroSlides: {
                        populate: "*"
                    }
                }
            }),
            fetchAPI("/team-members", { populate: "*" }),
            fetchAPI("/projects", { populate: "*" })
        ]);

        homeData = homeRes?.data;
        teamMembers = teamRes?.data || [];
        projects = projectRes?.data || [];
    } catch (error) {
        console.error("Failed to fetch homepage data:", error);
    }

    const heroSlides = homeData?.HeroSlides || [];

    return (
        <main>
            {/* Carousel Start */}
            <Hero slides={heroSlides} />
            {/* Carousel End */}

            {/* Feature Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-4">
                                <div className="btn-lg-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-users text-white"></i>
                                </div>
                                <h1 className="mb-0" data-toggle="counter-up">3453</h1>
                            </div>
                            <h5 className="mb-3">Happy Customers</h5>
                            <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex align-items-center mb-4">
                                <div className="btn-lg-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h1 className="mb-0" data-toggle="counter-up">4234</h1>
                            </div>
                            <h5 className="mb-3">Project Done</h5>
                            <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="d-flex align-items-center mb-4">
                                <div className="btn-lg-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-award text-white"></i>
                                </div>
                                <h1 className="mb-0" data-toggle="counter-up">3123</h1>
                            </div>
                            <h5 className="mb-3">Awards Win</h5>
                            <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <div className="d-flex align-items-center mb-4">
                                <div className="btn-lg-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-users-cog text-white"></i>
                                </div>
                                <h1 className="mb-0" data-toggle="counter-up">1831</h1>
                            </div>
                            <h5 className="mb-3">Expert Workers</h5>
                            <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature End */}

            {/* About Start */}
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container about px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src="/img/about.jpg" style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <h6 className="text-primary">About Us</h6>
                                <h1 className="mb-4">25+ Years Experience In Solar & Renewable Energy Industry</h1>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                <p><i className="fa fa-check-circle text-primary me-3"></i>Diam dolor diam ipsum</p>
                                <p><i className="fa fa-check-circle text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                                <p><i className="fa fa-check-circle text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                                <a href="" className="btn btn-primary rounded-pill py-3 px-5 mt-3">Explore More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}

            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h6 className="text-primary">Our Services</h6>
                        <h1 className="mb-4">We Are Pioneers In The World Of Renewable Energy</h1>
                    </div>
                    <div className="row g-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${0.1 * i}s`}>
                                <div className="service-item rounded overflow-hidden">
                                    <img className="img-fluid" src={`/img/img-600x400-${i}.jpg`} alt="" />
                                    <div className="position-relative p-4 pt-0">
                                        <div className="service-icon">
                                            <i className={`fa ${i % 3 === 1 ? 'fa-solar-panel' : i % 3 === 2 ? 'fa-wind' : 'fa-lightbulb'} fa-3x`}></i>
                                        </div>
                                        <h4 className="mb-3">
                                            {i % 3 === 1 ? 'Solar Panels' : i % 3 === 2 ? 'Wind Turbines' : 'Hydropower Plants'}
                                        </h4>
                                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                        <a className="small fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Service End */}

            {/* Why Choose Us Feature Start */}
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container feature px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="p-lg-5 ps-lg-0">
                                <h6 className="text-primary">Why Choose Us!</h6>
                                <h1 className="mb-4">Complete Commercial & Residential Solar Systems</h1>
                                <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                <div className="row g-4">
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className="fa fa-check text-white"></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">Quality</p>
                                                <h5 className="mb-0">Services</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className="fa fa-user-check text-white"></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">Expert</p>
                                                <h5 className="mb-0">Workers</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className="fa fa-drafting-compass text-white"></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">Free</p>
                                                <h5 className="mb-0">Consultation</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className="fa fa-headphones text-white"></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">Customer</p>
                                                <h5 className="mb-0">Support</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src="/img/feature.jpg" style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why Choose Us Feature End */}

            {/* Projects Start */}
            <ProjectSection projects={projects} />
            {/* Projects End */}

            {/* Quote Start */}
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container quote px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src="/img/quote.jpg" style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <h6 className="text-primary">Free Quote</h6>
                                <h1 className="mb-4">Get A Free Quote</h1>
                                <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: '55px' }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: '55px' }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{ height: '55px' }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select border-0" style={{ height: '55px' }}>
                                                <option defaultValue>Select A Service</option>
                                                <option value="1">Service 1</option>
                                                <option value="2">Service 2</option>
                                                <option value="3">Service 3</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control border-0" placeholder="Special Note"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quote End */}

            {/* Team Start */}
            <TeamSection members={teamMembers} />
            {/* Team End */}

            {/* Testimonial Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h6 className="text-primary">Testimonial</h6>
                        <h1 className="mb-4">What Our Clients Say!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="testimonial-item text-center">
                                <div className="testimonial-img position-relative">
                                    <img className="img-fluid rounded-circle mx-auto mb-5" src={`/img/testimonial-${i}.jpg`} alt="" />
                                    <div className="btn-square bg-primary rounded-circle">
                                        <i className="fa fa-quote-left text-white"></i>
                                    </div>
                                </div>
                                <div className="testimonial-text text-center rounded p-4">
                                    <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                    <h5 className="mb-1">Client Name</h5>
                                    <span className="fst-italic">Profession</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
        </main>
    );
}

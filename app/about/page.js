import React from 'react';

export const metadata = {
  title: "About Us - Solartec",
};

export default function About() {
    return (
        <main>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}

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
            {/* Feature Start */}

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

            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h6 className="text-primary">Team Member</h6>
                        <h1 className="mb-4">Experienced Team Members</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded overflow-hidden">
                                <div className="d-flex">
                                    <img className="img-fluid w-75" src="/img/team-1.jpg" alt="" />
                                    <div className="team-social w-25">
                                        <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded overflow-hidden">
                                <div className="d-flex">
                                    <img className="img-fluid w-75" src="/img/team-2.jpg" alt="" />
                                    <div className="team-social w-25">
                                        <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded overflow-hidden">
                                <div className="d-flex">
                                    <img className="img-fluid w-75" src="/img/team-3.jpg" alt="" />
                                    <div className="team-social w-25">
                                        <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
        </main>
    );
}

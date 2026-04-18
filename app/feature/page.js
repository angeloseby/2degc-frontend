import React from 'react';

export const metadata = {
  title: "Features - Solartec",
};

export default function Feature() {
    return (
        <main>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Features</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="/">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Features</li>
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

            {/* Feature Start 2 */}
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
            {/* Feature End */}
        </main>
    );
}

import React from 'react';

const WhyChooseUs = ({ data }) => {
    const title = data?.Title || "Complete Commercial & Residential Solar Systems";
    const description = data?.Description || "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet";
    const features = data?.Features || [
        { Title: 'Quality Services', Icon: 'fa-check' },
        { Title: 'Expert Workers', Icon: 'fa-user-check' },
        { Title: 'Free Consultation', Icon: 'fa-drafting-compass' },
        { Title: 'Customer Support', Icon: 'fa-headphones' }
    ];

    return (
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
            <div className="container feature px-lg-0">
                <div className="row g-0 mx-lg-0">
                    <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                        <div className="p-lg-5 ps-lg-0">
                            <h6 className="text-primary">Why Choose Us!</h6>
                            <h1 className="mb-4">{title}</h1>
                            <p className="mb-4 pb-2">{description}</p>
                            <div className="row g-4">
                                {features.map((feature, i) => (
                                    <div key={i} className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className={`fa ${feature.Icon} text-white`}></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">{feature.Title.split(' ')[0]}</p>
                                                <h5 className="mb-0">{feature.Title.split(' ').slice(1).join(' ') || 'Service'}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
    );
};

export default WhyChooseUs;

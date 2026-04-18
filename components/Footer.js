import React from 'react';
import Link from 'next/link';
import { getStrapiMedia } from '@/lib/api';

const Footer = ({ data, copyright }) => {
    // Default data if CMS data is missing
    const defaultData = {
        Address: "123 Street, New York, USA",
        Phone: "+012 345 67890",
        Email: "info@example.com",
        QuickLinks: [
            { label: 'About Us', href: '/about' },
            { label: 'Contact Us', href: '/contact' },
            { label: 'Our Services', href: '/service' }
        ]
    };

    const footer = data || defaultData;
    const finalCopyright = copyright || "Solartec, All Right Reserved.";

    return (
        <div className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Address</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{footer.Address}</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>{footer.Phone}</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>{footer.Email}</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        {(footer.QuickLinks || []).map((link, index) => (
                            <Link key={index} className="btn btn-link" href={link.href}>{link.label}</Link>
                        ))}
                        {/* Static links if not in links list */}
                        {!footer.QuickLinks && (
                            <>
                                <a className="btn btn-link" href="">Terms & Condition</a>
                                <a className="btn btn-link" href="">Support</a>
                            </>
                        )}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Project Gallery</h5>
                        <div className="row g-2">
                            {footer.Gallery?.length > 0 ? (
                                footer.Gallery.map((img, index) => (
                                    <div key={index} className="col-4">
                                        <img className="img-fluid rounded" src={getStrapiMedia(img.url)} alt="" />
                                    </div>
                                ))
                            ) : (
                                [1,2,3,4,5,6].map(i => (
                                    <div key={i} className="col-4">
                                        <img className="img-fluid rounded" src={`/img/gallery-${i}.jpg`} alt="" />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a href="#">{finalCopyright}</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                            <br />Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

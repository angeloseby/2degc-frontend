'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path) => {
        return pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <Link href="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                <img src="/img/2_deg_c_logo.jpeg" alt="Logo" style={{ height: '60px' }} />
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link href="/" className={`nav-item nav-link ${isActive('/')}`}>Home</Link>
                    <Link href="/about" className={`nav-item nav-link ${isActive('/about')}`}>About</Link>
                    <Link href="/service" className={`nav-item nav-link ${isActive('/service')}`}>Service</Link>
                    <Link href="/project" className={`nav-item nav-link ${isActive('/project')}`}>Project</Link>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu bg-light m-0">
                            <Link href="/feature" className="dropdown-item">Feature</Link>
                            <Link href="/quote" className="dropdown-item">Free Quote</Link>
                            <Link href="/team" className="dropdown-item">Our Team</Link>
                            <Link href="/testimonial" className="dropdown-item">Testimonial</Link>
                            <Link href="/404" className="dropdown-item">404 Page</Link>
                        </div>
                    </div>
                    <Link href="/contact" className={`nav-item nav-link ${isActive('/contact')}`}>Contact</Link>
                </div>
                <Link href="/quote" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">
                    Get A Quote<i className="fa fa-arrow-right ms-3"></i>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

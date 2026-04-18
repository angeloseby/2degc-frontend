'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getStrapiMedia } from '@/lib/api';

const Navbar = ({ data }) => {
    const pathname = usePathname();

    // Default links if CMS data is missing
    const defaultLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Service', href: '/service' },
        { label: 'Project', href: '/project' },
        { label: 'Contact', href: '/contact' }
    ];

    const logoUrl = getStrapiMedia(data?.Logo?.url) || "/img/2_deg_c_logo.jpeg";
    const links = data?.Links || defaultLinks;
    const cta = data?.CTA || { label: 'Get A Quote', href: '/quote' };

    const isActive = (path) => {
        return pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <Link href="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                <img src={logoUrl} alt="Logo" style={{ height: '60px' }} />
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    {links.map((link, index) => (
                        <Link 
                            key={index} 
                            href={link.href} 
                            className={`nav-item nav-link ${isActive(link.href)}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    
                    {/* Keep Pages dropdown static for now or make it dynamic if desired */}
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
                </div>
                <Link href={cta.href} className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">
                    {cta.label}<i className="fa fa-arrow-right ms-3"></i>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

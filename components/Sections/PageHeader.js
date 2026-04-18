import React from 'react';
import Image from 'next/image';
import { getStrapiMedia } from '@/lib/api';

const PageHeader = ({ title, bannerImage, breadcrumbs = [] }) => {
    const bannerUrl = getStrapiMedia(bannerImage?.data?.attributes?.url || bannerImage?.url) || "/img/carousel-1.jpg";

    return (
        <div className="container-fluid page-header py-5 mb-5" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${bannerUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="container py-5">
                <h1 className="display-3 text-white mb-3 animated slideInDown">{title}</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                        {breadcrumbs.map((crumb, index) => (
                            <li 
                                key={index} 
                                className={`breadcrumb-item text-white ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
                                aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                            >
                                {crumb.link ? <a className="text-white" href={crumb.link}>{crumb.label}</a> : crumb.label}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default PageHeader;

"use client";

import React, { useState } from 'react';
import { getStrapiMedia } from '@/lib/api';
import DetailModal from './DetailModal';

const ServicesSection = ({ data, services }) => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const finalServices = services || data?.Items || [];
    const title = data?.Title || "We Are Pioneers In The World Of Renewable Energy";
    const subtitle = data?.Subtitle || "Our Services";

    const handleOpenModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h6 className="text-primary">{subtitle}</h6>
                    <h1 className="mb-4">{title}</h1>
                </div>
                <div className="row g-4">
                    {finalServices.map((item, i) => {
                        const attrs = item.attributes || item;
                        const imageUrl = getStrapiMedia(attrs.Image?.data?.attributes?.url || attrs.Image?.url) || `/img/img-600x400-${(i % 6) + 1}.jpg`;
                        
                        return (
                            <div 
                                key={item.id || i} 
                                className="col-md-6 col-lg-4 wow fadeInUp" 
                                data-wow-delay={`${0.1 * (i + 1)}s`}
                                onClick={() => handleOpenModal(item)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="service-item rounded overflow-hidden h-100 shadow-sm hover-shadow-lg transition-all border-0">
                                    <img className="img-fluid" src={imageUrl} alt={attrs.Title} />
                                    <div className="position-relative p-4 pt-0">
                                        <div className="service-icon">
                                            <i className={`fa ${attrs.Icon || 'fa-solar-panel'} fa-3x`}></i>
                                        </div>
                                        <h4 className="mb-3 text-center pt-4">{attrs.Title}</h4>
                                        {/* Description removed from card for cleaner UI */}
                                        <div className="text-center mt-3">
                                            <span className="btn btn-sm btn-outline-primary rounded-pill px-3">
                                                View Details <i className="fa fa-plus ms-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Service Detail Modal */}
            <DetailModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                data={selectedService}
                type="Service"
            />

            <style jsx>{`
                .hover-shadow-lg:hover {
                    box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
                    transform: translateY(-5px);
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
            `}</style>
        </div>
    );
};

export default ServicesSection;

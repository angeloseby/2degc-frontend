"use client";

import React from 'react';

import Image from 'next/image';
import { getStrapiMedia } from '@/lib/api';

const TeamSection = ({ members, title = "Experienced Team Members", subtitle = "Team Member" }) => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h6 className="text-secondary fw-bold text-uppercase">{subtitle}</h6>
                    <h1 className="mb-4 display-5">{title}</h1>
                </div>
                <div className="row g-4">
                    {members && members.length > 0 ? (
                        members.map((member, index) => {
                            const attrs = member.attributes || member;
                            const imageUrl = getStrapiMedia(attrs.Image?.data?.attributes?.url || attrs.Image?.url);
                            
                            return (
                                <div key={member.id || index} className="col-lg-6 wow fadeInUp" data-wow-delay={`${0.1 * ((index % 2) + 1)}s`}>
                                    <div className="team-item-horizontal bg-white rounded-4 overflow-hidden shadow-sm h-100 border border-light-subtle hover-shadow-lg transition-all">
                                        <div className="row g-0 h-100">
                                            <div className="col-md-5 position-relative" style={{ minHeight: '280px' }}>
                                                {imageUrl ? (
                                                    <Image 
                                                        src={imageUrl} 
                                                        alt={attrs.Name || "Team Member"} 
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 25vw"
                                                        style={{ objectFit: 'cover' }}
                                                        className="img-fluid team-img"
                                                    />
                                                ) : (
                                                    <div className="bg-light w-100 h-100 d-flex align-items-center justify-content-center text-muted">
                                                        <i className="fa fa-user fa-3x"></i>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-md-7">
                                                <div className="p-4 d-flex flex-column h-100 justify-content-center">
                                                    <div>
                                                        <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-2 small fw-bold">
                                                            {attrs.Designation || "Team Expert"}
                                                        </span>
                                                        <h3 className="mb-2 fw-bold text-dark">{attrs.Name || "Full Name"}</h3>
                                                        <p className="text-muted mb-0 lh-base">
                                                            {attrs.Description || "Passionate about renewable energy and delivering sustainable solutions for a greener future."}
                                                        </p>
                                                    </div>
                                                    <div className="mt-4 pt-3 border-top border-light-subtle d-flex align-items-center">
                                                        <a href="/contact" className="btn btn-sm btn-link text-primary p-0 text-decoration-none fw-bold">
                                                            Connect with Me <i className="fa fa-arrow-right ms-2 small"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-12 text-center py-5">
                            <p className="text-muted">Meet our dedicated experts soon.</p>
                        </div>
                    )}
                </div>
            </div>
            
            <style jsx>{`
                .team-item-horizontal {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .team-item-horizontal:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
                }
                .team-img {
                    transition: transform 0.5s ease;
                }
                .team-item-horizontal:hover .team-img {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default TeamSection;

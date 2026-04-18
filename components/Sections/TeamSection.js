import React from 'react';
import Image from 'next/image';
import { getStrapiMedia } from '@/lib/api';

const TeamSection = ({ members, title = "Experienced Team Members", subtitle = "Team Member" }) => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h6 className="text-primary">{subtitle}</h6>
                    <h1 className="mb-4">{title}</h1>
                </div>
                <div className="row g-4">
                    {members && members.length > 0 ? (
                        members.map((member, index) => {
                            const attrs = member.attributes || member;
                            const imageUrl = getStrapiMedia(attrs.Image?.data?.attributes?.url || attrs.Image?.url);
                            
                            return (
                                <div key={member.id || index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * ((index % 3) + 1)}s`}>
                                    <div className="team-item rounded overflow-hidden">
                                        <div className="d-flex">
                                            <div className="position-relative w-75" style={{ height: '300px' }}>
                                                {imageUrl ? (
                                                    <Image 
                                                        src={imageUrl} 
                                                        alt={attrs.Name || "Team Member"} 
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                        className="img-fluid"
                                                    />
                                                ) : (
                                                    <div className="bg-secondary w-100 h-100 d-flex align-items-center justify-content-center text-white">
                                                        No Image
                                                    </div>
                                                )}
                                            </div>
                                            <div className="team-social w-25">
                                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href={attrs.FacebookURL || ""}><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href={attrs.TwitterURL || ""}><i className="fab fa-twitter"></i></a>
                                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href={attrs.InstagramURL || ""}><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h5>{attrs.Name || "Full Name"}</h5>
                                            <span>{attrs.Designation || "Designation"}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-12 text-center py-5">
                            <p className="text-muted">No team members found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;

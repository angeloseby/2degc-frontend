"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { getStrapiMedia } from '@/lib/api';
import DetailModal from './DetailModal';

const ProjectSection = ({ projects, categories, title = "Our Projects" }) => {
    const [filter, setFilter] = useState('*');
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filter projects based on selected category
    const filteredProjects = projects.filter(project => {
        if (filter === '*') return true;
        const attrs = project?.attributes || project || {};
        const projectCat = attrs.category?.data?.attributes?.Name || attrs.category?.Name;
        return projectCat === filter;
    });

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h6 className="text-primary fw-bold text-uppercase">Our Projects</h6>
                    <h1 className="mb-4">{title}</h1>
                </div>

                {/* Category Filter Bar */}
                <div className="row g-4 text-center mb-5">
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                        <ul className="list-inline mb-0" id="portfolio-flters">
                            <li
                                className={`mx-2 mb-2 ${filter === '*' ? 'active-filter' : ''} cursor-pointer`}
                                onClick={() => setFilter('*')}
                            >
                                All
                            </li>
                            {categories.map((cat) => {
                                const catName = cat.attributes?.Name || cat.Name || "Unknown";
                                return (
                                    <li
                                        key={cat.id}
                                        className={`mx-2 mb-2 ${filter === catName ? 'active-filter' : ''} cursor-pointer text-capitalize`}
                                        onClick={() => setFilter(catName)}
                                    >
                                        {catName}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Projects Grid (Redesigned to match Services card) */}
                <div className="row g-4">
                    {filteredProjects.map((project, index) => {
                        const attrs = project?.attributes || project || {};
                        const coverImageData = attrs.CoverImage?.data?.attributes || attrs.CoverImage;
                        const imageUrl = getStrapiMedia(coverImageData?.url) || `/img/img-600x400-${(index % 6) + 1}.jpg`;
                        const categoryName = attrs.category?.data?.attributes?.Name || attrs.category?.Name || "General";

                        return (
                            <div
                                key={project.id || index}
                                className={`col-lg-4 col-md-6 wow fadeInUp`}
                                data-wow-delay={`${0.1 * ((index % 3) + 1)}s`}
                                onClick={() => handleOpenModal(project)}
                            >
                                <div className="service-item rounded overflow-hidden h-100 shadow-sm hover-shadow-lg transition-all border-0 cursor-pointer">
                                    <div className="position-relative" style={{ height: '250px' }}>
                                        <Image
                                            src={imageUrl}
                                            alt={attrs.Title || "Project Image"}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="position-relative p-4 pt-0">
                                        <div className="service-icon">
                                            <i className="fa fa-project-diagram fa-3x"></i>
                                        </div>
                                        <div className="text-center pt-4">
                                            <h6 className="text-primary text-uppercase small mb-2">{categoryName}</h6>
                                            <h4 className="mb-3">{attrs.Title}</h4>
                                            <div className="mt-3">
                                                <span className="btn btn-sm btn-outline-primary rounded-pill px-3">
                                                    View Details <i className="fa fa-plus ms-2"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Project Detail Modal */}
            <DetailModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                data={selectedProject}
                type="Project"
            />

            <style jsx>{`
                .cursor-pointer { cursor: pointer; }
                .hover-shadow-lg:hover {
                    box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
                    transform: translateY(-5px);
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
                #portfolio-flters li {
                    display: inline-block;
                    padding: 8px 20px;
                    border: 1px solid var(--bs-primary);
                    border-radius: 50px;
                    color: var(--bs-primary);
                    transition: all 0.3s;
                    font-weight: 500;
                }
                #portfolio-flters li.active-filter, #portfolio-flters li:hover {
                    background: var(--bs-primary);
                    color: white;
                }
                .active-filter {
                    background: var(--bs-primary) !important;
                    color: white !important;
                }
            `}</style>
        </div>
    );
};

export default ProjectSection;

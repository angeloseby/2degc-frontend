"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';

const DetailModal = ({ isOpen, onClose, data, type = 'service' }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !data) return null;

    const { Title, Description, FullDescription, Image: img, CoverImage, Icon } = data.attributes || data;
    const itemImage = img?.data?.attributes?.url || img?.url || CoverImage?.data?.attributes?.url || CoverImage?.url;

    return (
        <div className="detail-modal-overlay" onClick={onClose}>
            <div className="detail-modal-content" onClick={e => e.stopPropagation()}>
                <button className="btn-close-custom" onClick={onClose}>
                    <i className="fa fa-times"></i>
                </button>
                
                <div className="row g-0 h-100">
                    {/* Fixed Image Side */}
                    <div className="col-lg-5 position-relative modal-image-container">
                        {itemImage ? (
                            <img 
                                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${itemImage}`}
                                alt={Title}
                                className="img-fluid h-100 w-100 modal-image"
                                style={{ objectFit: 'cover' }}
                            />
                        ) : (
                            <div className="bg-light h-100 d-flex align-items-center justify-content-center text-muted">
                                <i className={`fa ${Icon || 'fa-image'} fa-4x`}></i>
                            </div>
                        )}
                        {Icon && (
                            <div className="modal-icon-badge">
                                <i className={`fa ${Icon} text-white`}></i>
                            </div>
                        )}
                    </div>
                    
                    {/* Fixed Text Side with Internal Scroll */}
                    <div className="col-lg-7 d-flex flex-column h-100">
                        <div className="p-4 p-md-5 flex-grow-1 overflow-hidden d-flex flex-column">
                            <span className="text-primary text-uppercase fw-bold small mb-2 d-block">{type} Details</span>
                            <h2 className="mb-4 display-6 fw-bold">{Title}</h2>
                            
                            <div className="modal-description-scroll flex-grow-1 pe-3">
                                {FullDescription || Description ? (
                                    <div 
                                        className="rich-text-content lh-lg text-muted"
                                        dangerouslySetInnerHTML={{ __html: FullDescription || Description }}
                                    />
                                ) : (
                                    <p className="text-muted">No detailed description available for this {type}.</p>
                                )}
                            </div>
                            
                            <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
                                <button className="btn btn-primary px-4 py-2 rounded-pill" onClick={onClose}>
                                    Got it, thanks!
                                </button>
                                <span className="text-muted small">2degc 2026</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .detail-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(12px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    padding: 20px;
                    animation: fadeIn 0.3s ease-out;
                }

                .detail-modal-content {
                    background: white;
                    width: 100%;
                    max-width: 1100px;
                    height: 80vh; /* Fixed percentage height */
                    min-height: 500px; /* Safety minimum */
                    border-radius: 24px;
                    overflow: hidden;
                    position: relative;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .modal-image-container {
                    height: 100%;
                }

                .modal-icon-badge {
                    position: absolute;
                    bottom: 25px;
                    right: 25px;
                    background: var(--bs-primary);
                    width: 64px;
                    height: 64px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.7rem;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                }

                .btn-close-custom {
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    background: white;
                    border: none;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 100;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
                    transition: all 0.3s;
                }

                .btn-close-custom:hover {
                    background: #f8f9fa;
                    transform: rotate(90deg) scale(1.1);
                    color: var(--bs-primary);
                }

                .modal-description-scroll {
                    overflow-y: auto;
                    scrollbar-width: thin;
                    scrollbar-color: var(--bs-primary) #f8f9fa;
                }

                .modal-description-scroll::-webkit-scrollbar {
                    width: 6px;
                }

                .modal-description-scroll::-webkit-scrollbar-track {
                    background: #f8f9fa;
                }

                .modal-description-scroll::-webkit-scrollbar-thumb {
                    background: #dee2e6;
                    border-radius: 10px;
                }

                .modal-description-scroll::-webkit-scrollbar-thumb:hover {
                    background: var(--bs-primary);
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes scaleUp {
                    from { opacity: 0; transform: scale(0.95) translateY(20px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }

                @media (max-width: 991px) {
                    .detail-modal-content {
                        height: 90vh;
                        max-height: 90vh;
                        overflow-y: auto;
                    }
                    .modal-image-container {
                        height: 300px;
                    }
                    .row.g-0 {
                        display: block;
                    }
                }
            `}</style>
        </div>
    );
};

export default DetailModal;

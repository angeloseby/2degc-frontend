import React from 'react';

const StatisticsSection = ({ data }) => {
    // New dynamic structure: data.Items
    // Fallback to legacy fields or defaults
    const items = data?.Items || [
        { Label: 'Happy Customers', Value: data?.HappyCustomers || 3453, Icon: 'fa-users' },
        { Label: 'Project Done', Value: data?.ProjectsDone || 4234, Icon: 'fa-check' },
        { Label: 'Awards Win', Value: data?.AwardsWin || 3123, Icon: 'fa-award' },
        { Label: 'Expert Workers', Value: data?.ExpertWorkers || 1831, Icon: 'fa-users-cog' },
    ];

    const title = data?.Title;
    const description = data?.Description;

    return (
        <div className="container-xxl py-5">
            <div className="container">
                {(title || description) && (
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        {title && <h1 className="mb-3">{title}</h1>}
                        {description && <p className="text-muted">{description}</p>}
                    </div>
                )}
                
                <div className="row g-5">
                    {items.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay={`${0.1 + (index * 0.2)}s`}>
                            <div className="d-flex align-items-center mb-4">
                                <div className="btn-lg-square bg-primary rounded-circle me-3">
                                    <i className={`fa ${item.Icon || 'fa-check'} text-white`}></i>
                                </div>
                                <h1 className="mb-0" data-toggle="counter-up">{item.Value}</h1>
                            </div>
                            <h5 className="mb-3">{item.Label}</h5>
                            <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatisticsSection;

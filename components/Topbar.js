import React from 'react';

const Topbar = ({ data }) => {
    // Fallback data
    const address = data?.Address || "123 Street, New York, USA";
    const phone = data?.Phone || "+012 345 6789";
    const workingHours = data?.WorkingHours || "Mon - Fri : 09.00 AM - 09.00 PM";

    return (
        <div className="container-fluid bg-dark p-0">
            <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                    <div className="h-100 d-inline-flex align-items-center me-4">
                        <small className="fa fa-map-marker-alt text-primary me-2"></small>
                        <small>{address}</small>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center">
                        <small className="far fa-clock text-primary me-2"></small>
                        <small>{workingHours}</small>
                    </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                    <div className="h-100 d-inline-flex align-items-center me-4">
                        <small className="fa fa-phone-alt text-primary me-2"></small>
                        <small>{phone}</small>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center mx-n2">
                        <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-square btn-link rounded-0" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;

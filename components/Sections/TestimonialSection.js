import React from 'react';
import { getStrapiMedia } from '@/lib/api';

const TestimonialSection = ({ data }) => {
    // Current static placeholder logic
    const testimonials = data?.Items || [
        { id: 1, Name: 'Client Name', Profession: 'Profession', Text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.', Image: { url: '/img/testimonial-1.jpg' } },
        { id: 2, Name: 'Client Name', Profession: 'Profession', Text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.', Image: { url: '/img/testimonial-2.jpg' } },
        { id: 3, Name: 'Client Name', Profession: 'Profession', Text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.', Image: { url: '/img/testimonial-3.jpg' } },
    ];

    const title = data?.Title || "What Our Clients Say!";
    const subtitle = data?.Subtitle || "Testimonial";

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h6 className="text-primary">{subtitle}</h6>
                    <h1 className="mb-4">{title}</h1>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    {testimonials.map((testimonial, i) => {
                         const imageUrl = getStrapiMedia(testimonial.Image?.data?.attributes?.url || testimonial.Image?.url);
                         
                         return (
                            <div key={testimonial.id || i} className="testimonial-item text-center">
                                <div className="testimonial-img position-relative">
                                    <img className="img-fluid rounded-circle mx-auto mb-5" src={imageUrl} alt={testimonial.Name} />
                                    <div className="btn-square bg-primary rounded-circle">
                                        <i className="fa fa-quote-left text-white"></i>
                                    </div>
                                </div>
                                <div className="testimonial-text text-center rounded p-4">
                                    <p>{testimonial.Text}</p>
                                    <h5 className="mb-1">{testimonial.Name}</h5>
                                    <span className="fst-italic">{testimonial.Profession}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;

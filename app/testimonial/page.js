import React from 'react';
import { fetchAPI } from '@/lib/api';
import PageHeader from '@/components/Sections/PageHeader';
import TestimonialSection from '@/components/Sections/TestimonialSection';

export default async function TestimonialPage() {
    let homeData = null;

    try {
        const homeRes = await fetchAPI("/home-page", { 
            populate: {
                Testimonials: { populate: { Items: { populate: { Image: { populate: '*' } } } } }
            }
        });
        homeData = homeRes?.data;
    } catch (error) {
        console.error("Failed to fetch Testimonial data:", error);
    }

    return (
        <main>
            <PageHeader 
                title="Testimonials" 
                breadcrumbs={[{ label: "Testimonials" }]}
            />
            <div className="py-5">
                <TestimonialSection data={homeData?.Testimonials} />
            </div>
        </main>
    );
}

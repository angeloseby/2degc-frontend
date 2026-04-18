import React from 'react';
import { fetchAPI } from '@/lib/api';
import PageHeader from '@/components/Sections/PageHeader';
import ServicesSection from '@/components/Sections/ServicesSection';
import TestimonialSection from '@/components/Sections/TestimonialSection';
import QuoteSection from '@/components/Sections/QuoteSection';

export const metadata = {
  title: "Our Services - 2degc",
};


export default async function Service() {
    let servicePageSettings = null;
    let services = [];
    let testimonials = [];
    let globalConfig = null;

    try {
        const [pageRes, serviceRes, testimonialRes, globalRes] = await Promise.all([
            fetchAPI("/service-page", { populate: ["BannerImage"] }),
            fetchAPI("/services", { populate: ["Image"] }),
            fetchAPI("/home-page", { populate: { Testimonials: { populate: { Items: { populate: { Image: { populate: '*' } } } } } } }),
            fetchAPI("/global", { populate: { Quote: { populate: { Image: { populate: '*' } } } } })
        ]);

        servicePageSettings = pageRes?.data;
        services = serviceRes?.data || [];
        testimonials = testimonialRes?.data?.Testimonials || null;
        globalConfig = globalRes?.data;
    } catch (error) {
        console.error("Failed to fetch service page data:", error);
    }

    const pageAttrs = servicePageSettings || {};
    const quoteData = globalConfig?.Quote || null;

    return (
        <main>
            <PageHeader 
                title={pageAttrs.Title || "Our Services"} 
                bannerImage={pageAttrs.BannerImage}
                breadcrumbs={[{ label: "Services" }]}
            />

            <ServicesSection services={services} />

            <QuoteSection data={quoteData} />

            <TestimonialSection data={testimonials} />
        </main>
    );
}

import React from 'react';
import { fetchAPI } from '@/lib/api';
import PageHeader from '@/components/Sections/PageHeader';
import ServicesSection from '@/components/Sections/ServicesSection';
import QuoteSection from '@/components/Sections/QuoteSection';

export const metadata = {
  title: "Our Services - 2degc",
};

export default async function Service() {
    let servicePageSettings = null;
    let services = [];
    let globalConfig = null;

    try {
        const [pageRes, serviceRes, globalRes] = await Promise.all([
            fetchAPI("/service-page", { populate: ["BannerImage"] }),
            fetchAPI("/services", { populate: ["Image"] }),
            fetchAPI("/global", { populate: { Quote: { populate: { Image: { populate: '*' } } } } })
        ]);
        
        servicePageSettings = pageRes?.data || null;
        services = serviceRes?.data || [];
        globalConfig = globalRes?.data || null;
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
        </main>
    );
}

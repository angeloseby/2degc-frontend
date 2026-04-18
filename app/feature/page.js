import React from 'react';
import { fetchAPI } from '@/lib/api';
import PageHeader from '@/components/Sections/PageHeader';
import WhyChooseUs from '@/components/Sections/WhyChooseUs';

export default async function FeaturePage() {
    let homeData = null;

    try {
        const homeRes = await fetchAPI("/home-page", { 
            populate: {
                WhyChooseUs: { populate: { Features: { populate: '*' } } }
            }
        });
        homeData = homeRes?.data;
    } catch (error) {
        console.error("Failed to fetch Feature data:", error);
    }

    return (
        <main>
            <PageHeader 
                title="Our Features" 
                breadcrumbs={[{ label: "Features" }]}
            />
            <div className="py-5">
                <WhyChooseUs data={homeData?.WhyChooseUs} />
            </div>
        </main>
    );
}

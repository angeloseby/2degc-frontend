import React from 'react';
import { fetchAPI } from '@/lib/api';
import PageHeader from '@/components/Sections/PageHeader';
import QuoteSection from '@/components/Sections/QuoteSection';

export default async function QuotePage() {
    let globalConfig = null;

    try {
        const globalRes = await fetchAPI("/global", { 
            populate: { Quote: { populate: { Image: { populate: '*' } } } } 
        });
        globalConfig = globalRes?.data;
    } catch (error) {
        console.error("Failed to fetch global quote data:", error);
    }

    const quoteData = globalConfig?.Quote || null;

    return (
        <main>
            <PageHeader 
                title="Free Quote" 
                breadcrumbs={[{ label: "Free Quote" }]}
            />
            <div className="py-5">
                <QuoteSection data={quoteData} />
            </div>
        </main>
    );
}

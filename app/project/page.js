import React from 'react';
import { fetchAPI } from '@/lib/api';
import PageHeader from '@/components/Sections/PageHeader';
import ProjectSection from '@/components/Sections/ProjectSection';
import QuoteSection from '@/components/Sections/QuoteSection';

export const metadata = {
  title: "Our Projects - 2degc",
};

export default async function ProjectPage() {
    let projectPageSettings = null;
    let projects = [];
    let categories = [];
    let globalConfig = null;

    try {
        const [pageRes, projectRes, categoryRes, globalRes] = await Promise.all([
            fetchAPI("/project-page", { populate: ["BannerImage"] }),
            fetchAPI("/projects", { populate: ["CoverImage", "category"] }),
            fetchAPI("/categories", { populate: "*" }),
            fetchAPI("/global", { populate: { Quote: { populate: { Image: { populate: '*' } } } } })
        ]);
        
        projectPageSettings = pageRes?.data || null;
        projects = projectRes?.data || [];
        categories = categoryRes?.data || [];
        globalConfig = globalRes?.data || null;
    } catch (error) {
        console.error("Failed to fetch projects data:", error);
    }

    const pageAttrs = projectPageSettings || {};
    const quoteData = globalConfig?.Quote || null;

    return (
        <main>
            <PageHeader 
                title={pageAttrs.Title || "Our Projects"} 
                bannerImage={pageAttrs.BannerImage}
                breadcrumbs={[{ label: "Projects" }]}
            />

            <ProjectSection projects={projects} categories={categories} />

            <QuoteSection data={quoteData} />
        </main>
    );
}

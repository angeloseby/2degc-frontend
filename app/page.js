import React from 'react';
import { fetchAPI } from '@/lib/api';
import Hero from '@/components/Home/Hero';
import StatisticsSection from '@/components/Sections/StatisticsSection';
import AboutSection from '@/components/Sections/AboutSection';
import ServicesSection from '@/components/Sections/ServicesSection';
import WhyChooseUs from '@/components/Sections/WhyChooseUs';
import ProjectSection from '@/components/Sections/ProjectSection';
import QuoteSection from '@/components/Sections/QuoteSection';
import TeamSection from '@/components/Sections/TeamSection';
import TestimonialSection from '@/components/Sections/TestimonialSection';

export default async function Home() {
    // Fetch all homepage data and shared data in parallel
    let homeData = null;
    let aboutPageData = null;
    let services = [];
    let teamMembers = [];
    let projects = [];
    let categories = [];
    let globalConfig = null;

    try {
        const [homeRes, aboutRes, serviceRes, teamRes, projectRes, categoryRes, globalRes] = await Promise.all([
            fetchAPI("/home-page", { 
                populate: {
                    Hero: { populate: { HeroSlides: { populate: '*' } } },
                    WhyChooseUs: { populate: { Features: { populate: '*' } } },
                    Testimonials: { populate: { Items: { populate: { Image: { populate: '*' } } } } }
                }
            }),
            fetchAPI("/about-page", { 
                populate: {
                    About: { 
                        populate: {
                            FeaturedImage: { populate: '*' },
                            Checklist: { populate: '*' }
                        }
                    },
                    Stats: { populate: { Items: { populate: '*' } } }
                } 
            }),
            fetchAPI("/services", { populate: ["Image"] }),
            fetchAPI("/team-members", { populate: "*" }),
            fetchAPI("/projects", { populate: ["CoverImage", "category"] }),
            fetchAPI("/categories", { populate: "*" }),
            fetchAPI("/global", { populate: { Quote: { populate: { Image: { populate: '*' } } } } })
        ]);

        homeData = homeRes?.data || null;
        aboutPageData = aboutRes?.data || null;
        services = serviceRes?.data || [];
        teamMembers = teamRes?.data || [];
        projects = projectRes?.data || [];
        categories = categoryRes?.data || [];
        globalConfig = globalRes?.data || null;
    } catch (error) {
        console.error("Failed to fetch homepage data:", error);
    }

    const homeAttrs = homeData || {};
    const aboutAttrs = aboutPageData || {};
    const quoteData = globalConfig?.Quote || null;

    return (
        <main>
            {/* Carousel Section */}
            <Hero slides={homeAttrs.Hero?.HeroSlides} />

            {/* Facts/Statistics Section (Connected to About Page) */}
            <StatisticsSection data={aboutAttrs.Stats} />

            {/* About Section (Connected to About Page) */}
            <AboutSection data={aboutAttrs.About} />

            {/* Service Section (Connected to Global Service Collection) */}
            <ServicesSection services={services} />

            {/* Why Choose Us Section */}
            <WhyChooseUs data={homeAttrs.WhyChooseUs} />

            {/* Projects Section (Dynamic Collections) */}
            <ProjectSection 
                projects={projects} 
                categories={categories} 
                title={homeAttrs.ProjectsTitle} 
            />

            {/* Quote Section (Connected to Global Source of Truth) */}
            <QuoteSection data={quoteData} />

            {/* Team Section (Dynamic Collection) */}
            <TeamSection members={teamMembers} title={homeAttrs.TeamTitle} />

            {/* Testimonial Section */}
            <TestimonialSection data={homeAttrs.Testimonials} />
        </main>
    );
}

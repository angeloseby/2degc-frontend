import React from 'react';
import { fetchAPI } from '@/lib/api';
import AboutSection from '@/components/Sections/AboutSection';
import StatisticsSection from '@/components/Sections/StatisticsSection';
import TeamSection from '@/components/Sections/TeamSection';
import PageHeader from '@/components/Sections/PageHeader';

export const metadata = {
  title: "About Us - 2degc",
};


export default async function About() {
    // Fetch all About page and Team data
    let aboutPageData = null;
    let teamMembers = [];

    try {
        const [aboutRes, teamRes] = await Promise.all([
            fetchAPI("/about-page", { 
                populate: {
                    BannerImage: { populate: '*' },
                    About: { 
                        populate: {
                            FeaturedImage: { populate: '*' },
                            Checklist: { populate: '*' }
                        }
                    },
                    Stats: { populate: { Items: { populate: '*' } } }
                } 
            }),
            fetchAPI("/team-members", { populate: "*" })
        ]);

        aboutPageData = aboutRes?.data;
        teamMembers = teamRes?.data || [];
    } catch (error) {
        console.error("Failed to fetch About page data:", error);
    }

    const attrs = aboutPageData || {};

    return (
        <main>
            <PageHeader 
                title={attrs.About?.Title || "About Us"} 
                bannerImage={attrs.BannerImage}
                breadcrumbs={[{ label: "About Us" }]}
            />

            {/* Statistics Section */}
            <StatisticsSection data={attrs.Stats} />

            {/* Main About Section */}
            <AboutSection data={attrs.About} />

            {/* Team Section */}
            <TeamSection members={teamMembers} />
        </main>
    );
}

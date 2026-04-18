import React from 'react';
import { fetchAPI } from '@/lib/api';
import PageHeader from '@/components/Sections/PageHeader';
import TeamSection from '@/components/Sections/TeamSection';

export default async function TeamPage() {
    let teamMembers = [];

    try {
        const teamRes = await fetchAPI("/team-members", { populate: "*" });
        teamMembers = teamRes?.data || [];
    } catch (error) {
        console.error("Failed to fetch Team data:", error);
    }

    return (
        <main>
            <PageHeader 
                title="Our Team" 
                breadcrumbs={[{ label: "Team" }]}
            />
            <div className="py-5">
                <TeamSection members={teamMembers} />
            </div>
        </main>
    );
}

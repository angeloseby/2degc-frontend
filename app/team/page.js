import React from 'react';
import { fetchAPI } from '@/lib/api';
import TeamSection from '@/components/Sections/TeamSection';

export const metadata = {
  title: "Our Team - Solartec",
};

export default async function Team() {
    // Fetch team members from Strapi
    const teamRes = await fetchAPI("/team-members", { populate: "*" });
    const teamMembers = teamRes?.data || [];

    return (
        <main>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Our Team</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="/">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Our Team</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}

            <TeamSection members={teamMembers} />
        </main>
    );
}

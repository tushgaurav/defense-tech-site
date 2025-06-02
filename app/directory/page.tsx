import { createClient } from '@/utils/supabase/server';
import DirectoryContent from './DirectoryContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Member Directory | Defense Tech Network',
    description: 'Browse and connect with members of the Defense Tech Network community including investors, founders, operators and advisors.',
};

export default async function DirectoryPage() {
    const supabase = await createClient();

    const { data, count } = await supabase
        .from('responses')
        .select('*', { count: 'exact' })
        .eq("approved", true);

    const formattedData = data?.map((response) => ({
        name: response.first_name + " " + (response.last_name ? response.last_name : ""),
        role: response.role,
        description: response.self_descriptions,
        email: response.email,
        linkedin: response.linkedin_url,
        twitter: response.twitter_url,
        website: response.website_url,
        expertiseAreas: response.domains_of_interest?.split(",") || [],
    })) || [];

    return <DirectoryContent initialMembers={formattedData} totalCount={count || 0} />;
}
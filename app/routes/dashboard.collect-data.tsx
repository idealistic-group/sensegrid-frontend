import { useState } from 'react';
import { RedditPost } from '../types/reddit';
import { collectRedditData } from '../services/dataCollect';
import { DataCollectionForm } from '../components/DataCollectionForm';
import { RedditStats } from '../components/RedditStats';
import { RedditPosts } from '../components/RedditPosts';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
    return [
        { title: 'Data Collection | SensEGrid' },
        { name: 'description', content: 'Collect and analyze data from various sources including Reddit' },
    ];
};

export default function CollectData() {
    const [redditData, setRedditData] = useState<RedditPost[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (subredditName: string, selectedSources: string[]) => {
        setLoading(true);
        setError(null);

        try {
            const data = await collectRedditData(subredditName, selectedSources);
            setRedditData(data);
        } catch (err) {
            setError('Error fetching data');
            console.error('Fetch Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen p-6 ml-18">
            <h1 className="text-2xl font-semibold text-neutral-700 mb-6">SenseGrid Data Collection</h1>
            
            <DataCollectionForm 
                onSubmit={handleSubmit}
                loading={loading}
                error={error}
            />

            {redditData.length > 0 && (
                <>
                    <RedditStats posts={redditData} />
                    <RedditPosts posts={redditData} />
                </>
            )}
        </div>
    );
}
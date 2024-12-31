import { useState } from 'react';
import { RedditPost } from '../types/reddit';
import { DataCollectionForm } from '../components/DataCollectionForm';
import { RedditStats } from '../components/Stats';
import { RedditPosts } from '../components/posts';
import type { MetaFunction } from '@remix-run/node';
import { DataCollectParams, SortType, TimeFrame, collectRedditData } from '../services/dataCollect';

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

    const handleSubmit = async (
        subredditName: string, 
        selectedSources: string[], 
        options: {
            question?: string,
            sortBy: SortType,
            timeFrame: TimeFrame,
            postLimit: number,
            minScore?: number,
            minComments?: number
        }
    ) => {
        setLoading(true);
        setError(null);

        try {
            const params: DataCollectParams = {
                sources: selectedSources,
                subreddit_name: subredditName || undefined,
                question: options.question,
                sort_by: options.sortBy,
                time_frame: options.timeFrame,
                post_limit: options.postLimit,
                min_score: options.minScore,
                min_comments: options.minComments
            };
            
            const data = await collectRedditData(params);
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
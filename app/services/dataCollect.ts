import { RedditPost, RedditApiResponse } from '../types/reddit';

interface DataCollectParams {
  sources: string[];
  subreddit_name?: string;
  question?: string;
}

export async function collectRedditData(params: DataCollectParams): Promise<RedditPost[]> {
    if (!params.subreddit_name && !params.question) {
        throw new Error('Either subreddit_name or question must be provided');
    }

    try {
        const response = await fetch(`${process.env.SENSE_API_KEY}/api/data/collect`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        
        const data: RedditApiResponse = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Failed to fetch data');
        }
        
        if (!data.success) {
            throw new Error(data.error || 'Failed to fetch data');
        }
        
        return data?.collected_data?.reddit?.data || [];
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Data collection failed: ${error.message}`);
        }
        throw new Error('An unexpected error occurred');
    }
}

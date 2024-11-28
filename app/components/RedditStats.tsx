import { RedditPost } from '../types/reddit';

interface RedditStatsProps {
    posts: RedditPost[];
}

export function RedditStats({ posts }: RedditStatsProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{posts.length}</div>
                <div className="text-sm text-gray-500">Total Posts</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">
                    {posts.reduce((sum, post) => sum + post.comments, 0)}
                </div>
                <div className="text-sm text-gray-500">Total Comments</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">
                    {Math.round((posts.reduce((sum, post) => sum + post.upvote_ratio, 0) / posts.length) * 100)}%
                </div>
                <div className="text-sm text-gray-500">Avg Upvote Ratio</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">
                    {posts.reduce((sum, post) => sum + post.score, 0)}
                </div>
                <div className="text-sm text-gray-500">Total Score</div>
            </div>
        </div>
    );
} 
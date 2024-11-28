import { RedditPost } from '../types/reddit';

interface RedditPostsProps {
    posts: RedditPost[];
}

export function RedditPosts({ posts }: RedditPostsProps) {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.slice(0, 6).map(post => (
                <div key={post.id} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-medium text-gray-900">{post.title}</h3>
                    <div className="mt-2 flex items-center text-sm text-gray-500 space-x-4 flex-wrap">
                        <span>👤 {post.author}</span>
                        <span>⬆️ {post.score}</span>
                        <span>💬 {post.comments}</span>
                        <span>📊 {Math.round(post.upvote_ratio * 100)}%</span>
                    </div>
                </div>
            ))}
        </div>
    );
} 
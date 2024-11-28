export interface RedditPost {
    id: string;
    title: string;
    text: string;
    score: number;
    comments: number;
    created_utc: number;
    url: string;
    author: string;
    permalink: string;
    is_self: boolean;
    upvote_ratio: number;
}

export interface RedditApiResponse {
  error: string;
  success: boolean;
  collected_data: {
    reddit: {
      data: RedditPost[];
      status: string;
      metadata: {
        timestamp: string;
        source: string;
        count: number;
      }
    }
  }
} 
import { useState } from "react";
import { SortType, TimeFrame } from '../services/dataCollect';

interface DataCollectionFormProps {
  onSubmit: (
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
  ) => void;
  loading: boolean;
  error: string | null;
}

export function DataCollectionForm({
  onSubmit,
  loading,
  error,
}: DataCollectionFormProps) {
  const [subredditName, setSubredditName] = useState("");
  const [selectedSources, setSelectedSources] = useState<string[]>(["reddit"]);
  const [question, setQuestion] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortType>(SortType.HOT);
  const [timeFrame, setTimeFrame] = useState<TimeFrame>(TimeFrame.ALL);
  const [postLimit, setPostLimit] = useState<number>(0);
  const [minScore, setMinScore] = useState<number | undefined>();
  const [minComments, setMinComments] = useState<number | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    onSubmit(subredditName, selectedSources, {
      question,
      sortBy,
      timeFrame,
      postLimit,
      minScore,
      minComments
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <label
              htmlFor="subreddit"
              className="block text-sm font-medium text-neutral-500 mb-1"
            >
              Subreddit Name (Optional)
            </label>
            <input
              type="text"
              id="subreddit"
              value={subredditName}
              onChange={(e) => setSubredditName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white"
              placeholder="Enter subreddit name"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="question"
              className="block text-sm font-medium text-neutral-500 mb-1"
            >
              Question (Optional)
            </label>
            <input
              type="text"
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white"
              placeholder="Enter your question"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label
              htmlFor="data-sources"
              className="block text-sm font-medium text-neutral-500 mb-1"
            >
              Select your Data Sources
            </label>
            <select
              id="data-sources"
              value={selectedSources[0]}
              onChange={(e) => setSelectedSources([e.target.value])}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white"
            >
              <option value="reddit">Reddit</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="sort-by"
              className="block text-sm font-medium text-neutral-500 mb-1"
            >
              Sort By
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white"
            >
              <option value={SortType.HOT}>Hot</option>
              <option value={SortType.NEW}>New</option>
              <option value={SortType.TOP}>Top</option>
              <option value={SortType.RELEVANT}>Relevant</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="time-frame"
              className="block text-sm font-medium text-neutral-500 mb-1"
            >
              Time Frame
            </label>
            <select
              id="time-frame"
              value={timeFrame}
              onChange={(e) => setTimeFrame(e.target.value as TimeFrame)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white"
            >
              <option value={TimeFrame.ALL}>All Time</option>
              <option value={TimeFrame.HOUR}>Past Hour</option>
              <option value={TimeFrame.DAY}>Past Day</option>
              <option value={TimeFrame.WEEK}>Past Week</option>
              <option value={TimeFrame.MONTH}>Past Month</option>
              <option value={TimeFrame.YEAR}>Past Year</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label
              htmlFor="post-limit"
              className="block text-sm font-medium text-neutral-500 mb-1"
            >
              Post Limit
            </label>
            <input
              type="number"
              id="post-limit"
              value={postLimit}
              onChange={(e) => setPostLimit(Number(e.target.value))}
              min="1"
              max="1000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="min-score"
              className="block text-sm font-medium text-neutral-500 mb-1"
            >
              Minimum Score
            </label>
            <input
              type="number"
              id="min-score"
              value={minScore || ''}
              onChange={(e) => setMinScore(e.target.value ? Number(e.target.value) : undefined)}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="min-comments"
              className="block text-sm font-medium text-neutral-500 mb-1"
            >
              Minimum Comments
            </label>
            <input
              type="number"
              id="min-comments"
              value={minComments || ''}
              onChange={(e) => setMinComments(e.target.value ? Number(e.target.value) : undefined)}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 text-white px-4 py-2 hover:rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Fetch Data"}
          </button>
        </div>
      </div>
      {(validationError || error) && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600 text-sm">{validationError || error}</p>
        </div>
      )}
    </form>
  );
}

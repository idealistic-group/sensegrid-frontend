import { useState } from "react";

interface DataCollectionFormProps {
  onSubmit: (params: { sources: string[], subreddit_name?: string, question?: string }) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export function DataCollectionForm({
  onSubmit,
  loading,
  error,
}: DataCollectionFormProps) {
  const [subredditName, setSubredditName] = useState("python");
  const [selectedSources, setSelectedSources] = useState<string[]>(["reddit"]);
  const [question, setQuestion] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setValidationError(null);
    
    if (!subredditName && !question) {
      setValidationError('Either subreddit_name or question must be provided');
      return;
    }

    const params = {
      sources: selectedSources,
      ...(subredditName && { subreddit_name: subredditName }),
      ...(question && { question })
    };
    onSubmit(params);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-4 flex-col">
        <div>
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

        <div>
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
          <div className="flex items-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white px-4 py-2 hover:rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Fetch Data"}
            </button>
          </div>
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

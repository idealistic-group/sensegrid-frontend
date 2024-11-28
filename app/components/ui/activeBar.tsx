import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function ActiveBar() {
    const [activeTab, setActiveTab] = useState('insights');

    const trendData = [
        { month: 'Jan', users: 4000 },
        { month: 'Feb', users: 3000 },
        { month: 'Mar', users: 5000 },
        { month: 'Apr', users: 4500 },
        { month: 'May', users: 6000 },
        { month: 'Jun', users: 7000 },
    ];

    return (
        <>
            <div className="flex border-b">
              <button
                className={`px-4 py-2 ${
                  activeTab === 'insights'
                    ? 'border-b-2 border-purple-500 text-purple-600'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('insights')}
              >
                Insights
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === 'trends'
                    ? 'border-b-2 border-purple-500 text-purple-600'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('trends')}
              >
                Trends
              </button>
            </div>
            <div className="p-6">
            {activeTab === 'insights' ? (
              <div className="space-y-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900">Key Insights</h3>
                  <div className="space-y-3 mt-2">
                    <p className="text-sm text-purple-700 flex items-center">
                      <span className="mr-2">📱</span>
                      73% of customers request mobile payment integration
                    </p>
                    <p className="text-sm text-purple-700 flex items-center">
                      <span className="mr-2">⭐</span>
                      User engagement increased by 45% this quarter
                    </p>
                    <p className="text-sm text-purple-700 flex items-center">
                      <span className="mr-2">📈</span>
                      Feature adoption rate is up 28% month-over-month
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">89%</div>
                    <div className="text-sm text-gray-500">Customer Satisfaction</div>
                    <div className="text-xs text-green-600 mt-1">↑ 12% from last month</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">2.3k</div>
                    <div className="text-sm text-gray-500">Daily Active Users</div>
                    <div className="text-xs text-green-600 mt-1">↑ 305 new users</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">4.8</div>
                    <div className="text-sm text-gray-500">App Store Rating</div>
                    <div className="text-xs text-green-600 mt-1">↑ 0.3 points</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">18min</div>
                    <div className="text-sm text-gray-500">Avg. Session Time</div>
                    <div className="text-xs text-green-600 mt-1">↑ 3min increase</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-700 mb-4">Usage Trends</h3>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={trendData}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line 
                                type="monotone" 
                                dataKey="users" 
                                stroke="#8884d8" 
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Popular Features</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Mobile Payments (42% usage)</li>
                      <li>• Dark Mode (38% usage)</li>
                      <li>• Quick Search (35% usage)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Growth Metrics</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• User Growth: +27%</li>
                      <li>• Revenue Growth: +32%</li>
                      <li>• Retention Rate: 78%</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
    )
}
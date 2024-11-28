"use client";

import ActiveBar from "./ui/activeBar";

export default function DashboardPreview() {
  return (
    <div className="relative w-full max-w-2xl">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 blur-sm" />
      <div className="relative w-full bg-white rounded-xl shadow-[0_0_100px_-12px_rgb(233,213,255)] overflow-hidden flex before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-purple-500 before:via-purple-300 before:to-purple-500 before:rounded-xl before:content-[''] before:animate-gradient">
        <div className="relative w-full h-full bg-white rounded-xl flex">
          <div className="w-16 bg-gray-50 border-r flex flex-col items-center py-4 space-y-6">
          </div>

          <div className="flex-1">
            <ActiveBar />
          </div>
        </div>
      </div>
    </div>
  );
}

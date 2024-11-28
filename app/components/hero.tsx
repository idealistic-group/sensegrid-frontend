import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <div className="h-full px-6 lg:px-8 py-16 sm:py-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-x-12">
        <div className="lg:w-1/2">
          <h1 className="font-bold tracking-tight text-black/80 text-left">
            <span className="block text-8xl ">Decode Customer Needs,</span>
            <span className="block text-6xl text-purple-400">
              Define Your Success
            </span>
          </h1>
          <p className="text-lg leading-8 text-gray-300">
            Transform millions of customer conversations into actionable
            business intelligence. Spot market opportunities others miss, and
            build products people actually want.
          </p>
          <button className="hover:rounded-3xl bg-purple-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors mt-8">
            Start Free Trial
          </button>
        </div>

        <div className="lg:w-1/2">
          <DashboardPreview />
        </div>
      </div>
    </div>
  );
}

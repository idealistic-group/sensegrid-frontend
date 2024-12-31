import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <div className="h-full px-6 lg:px-8 py-16 sm:py-16 relative">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-x-12 relative z-10">
        <div className="">
          <h1 className="font-extrabold tracking-tight text-neutral-900 text-left">
            <span className="block text-8xl ">
              Decode Customer Needs, Define Your Success
            </span>
          </h1>
          <p className="text-lg leading-8 text-neutral-700">
            Transform millions of customer conversations into actionable
            business intelligence. Spot market opportunities others miss, and
            build products people actually want.
          </p>
          <Button className="hover:rounded-3xl hover:shadow-lg shadow-md hover:shadow-emerald-600/50 shadow-emerald-600/50 border rounded-none bg-emerald-600 hover:bg-transparent hover:bg-emerald-600 hover:text-white border-neutral-900 px-8 py-6 text-sm font-semibold transition-all duration-700 ease-in-out mt-8">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}

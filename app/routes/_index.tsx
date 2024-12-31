import { type MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import Hero from "~/components/hero";
import FeatureCards from "~/components/feature-cards";
import Featured2nd from "~/components/featured-2nd";
import Footer from "~/components/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "SenseGrid - Decode Customer Needs, Define Your Success" },
    { name: "description", content: "SenseGrid transforms scattered customer signals into actionable business intelligence." },
    { name: "og:title", content: "SenseGrid - Decode Customer Needs, Define Your Success" },
    { name: "og:description", content: "SenseGrid transforms scattered customer signals into actionable business intelligence." },
    { name: "og:type", content: "website" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      {/* <div className="absolute inset-0 opacity-5 text-purple-900 text-[200px] md:text-[320px] font-bold overflow-hidden whitespace-nowrap">
        senseGrid
      </div> */}
      <Header/>
      <Hero/>
      <FeatureCards />
      <Featured2nd />
      <Footer />
    </div>
  );
}

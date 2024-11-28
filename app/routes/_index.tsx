import { type MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import Hero from "~/components/hero";

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
      <Header/>
      <Hero/>
    </div>
  );
}

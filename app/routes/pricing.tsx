import Header from "~/components/header";
import PricingTable from "~/components/pricingTable";
import { type MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "SenseGrid - pricing" },
    { name: "description", content: "Discover sensegrid pricing." },
  ];
};

export default function Pricing() {
  return (
    <>
      <div className="min-h-screen max-w-7xl mx-auto">
        <Header />

        <PricingTable />
        <Footer />
      </div>
    </>
  );
}

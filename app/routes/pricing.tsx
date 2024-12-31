import Header from "~/components/header";
import PricingTable from "~/components/pricingTable";

export default function Pricing() {
  return (
    <>
      <div className="min-h-screen max-w-7xl mx-auto">
        <Header />

        <PricingTable />
      </div>
    </>
  );
}

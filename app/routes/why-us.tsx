
import Header from '~/components/header';
import Footer from '~/components/footer';
import { Button } from '~/components/ui/button';
import WhyUsCards from '~/components/whyUsCards';
import { type MetaFunction } from "@remix-run/node";
import BusinessTransform from '~/components/businessTransform';

export const meta: MetaFunction = () => {
    return [
        { title: "SenseGrid - Why Us" },
        { name: "description", content: "Discover why SenseGrid is the best choice for your business." },
    ];
}

export default function WhyUs() {
    return (
        <div className="min-h-screen max-w-7xl mx-auto">
            <Header />
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                        Transform Customer Signals Into Business Success
                    </h1>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        SenseGrid decodes millions of customer conversations into actionable intelligence,
                        helping businesses build better products and capture market opportunities others miss.
                    </p>
                </div>

                <WhyUsCards />

                <BusinessTransform />

                <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                        Ready to Transform Your Customer Understanding?
                    </h2>
                    <p className="text-lg text-neutral-700 mb-6">
                        Join us to innovate your business using SenseGrid to build better products and capture market opportunities.
                    </p>
                    <Button className="hover:rounded-3xl hover:shadow-lg shadow-md hover:shadow-emerald-600/50 shadow-emerald-600/50 border rounded-none bg-emerald-600 hover:bg-transparent hover:bg-emerald-600 hover:text-white border-neutral-900 px-8 py-6 text-sm font-semibold transition-all duration-700 ease-in-out mt-8">
                        Get started today
                    </Button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
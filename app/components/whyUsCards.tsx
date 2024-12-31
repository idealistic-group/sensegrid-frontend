import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';

export default function WhyUsCards() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white shadow-lg relative overflow-hidden md:mt-12 hover:scale-110 transition ease-in-out" style={{ backgroundImage: 'url(/images/cost.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-[inherit]"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-2">
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-50">60% Cost Reduction</Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                    <p className="text-white">
                        Replace expensive, time-consuming market research with real-time customer intelligence.
                        Get months of insights in days, not weeks.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-white shadow-lg relative overflow-hidden md:mb-12 hover:scale-110 transition ease-in-out" style={{ backgroundImage: 'url(/images/data.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-[inherit]"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-2">
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-50">Data-Driven Decisions</Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                    <p className="text-white">
                        Our Question Intelligence Engine analyzes millions of customer conversations across
                        platforms to reveal true needs and opportunities.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-white shadow-lg relative overflow-hidden md:mt-12 hover:scale-110 transition ease-in-out" style={{ backgroundImage: 'url(/images/competitive.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-[inherit]"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-2">
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Competitive Edge</Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                    <p className="text-white">
                        Identify underserved markets and competitor blind spots before others do.
                        Stay ahead with real-time trend tracking.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { ChevronsRight } from "lucide-react";

export default function FeatureCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3 px-4 py-12">
      <Card className="relative overflow-hidden border-neutral-900 border-2">
        <CardHeader>
          <CardTitle className="text-[36px] font-extrabold">
            Data Collection
          </CardTitle>
          <CardDescription className="text-[16px] text-neutral-900 font-semibold">
            Comprehensive data gathering from online platforms with real-time
            monitoring and historical analysis.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ChevronsRight className="h-4 w-4" />
              Continuous platform scanning
            </li>
            <li className="flex items-center gap-2">
              <ChevronsRight className="h-4 w-4" />
              Real-time question monitoring
            </li>
            <li className="flex items-center gap-2">
              <ChevronsRight className="h-4 w-4" />
              Reddit data collection
            </li>
            <li className="flex items-center gap-2">
              <ChevronsRight className="h-4 w-4" />
              Trend pattern recognition
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden border-neutral-900 border-2">
        <CardHeader>
          <CardTitle className="text-[36px] font-extrabold">Analysis</CardTitle>
          <CardDescription className="text-[16px] text-neutral-900 font-semibold">
            Advanced AI-powered analysis tools to extract meaningful patterns
            and insights from collected data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ChevronsRight className="h-4 w-4" />
              Natural language processing
            </li>
            <li className="flex items-center gap-2">
              <ChevronsRight className="h-4 w-4" />
              Semantic clustering
            </li>
            <li className="flex items-center gap-2">
              <ChevronsRight className="h-4 w-4" />
              Sentiment analysis
            </li>
            <li className="flex items-center gap-2">
              <ChevronsRight className="h-4 w-4" />
              Demand intensity scoring
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden border-neutral-900 border-2">
        <CardHeader>
          <CardTitle className="text-[36px] font-extrabold">
            Actionable Insights
          </CardTitle>
          <CardDescription className="text-[16px] text-neutral-900 font-semibold">
            Transform analyzed data into strategic recommendations and market
            opportunities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ChevronsRight className="h-4 w-4" />
              Prioritized opportunities
            </li>
            <li className="flex items-center gap-2">
              <ChevronsRight className="h-4 w-4" />
              Market sizing estimates
            </li>
            <li className="flex items-center gap-2">
              <ChevronsRight className="h-4 w-4" />
              Product recommendations
            </li>
            <li className="flex items-center gap-2">
              <ChevronsRight className="h-4 w-4" />
              Marketing guidance
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

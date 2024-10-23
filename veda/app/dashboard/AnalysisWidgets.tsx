import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MainTitle, Subtitle, BodyText, MetaText } from "../components/typography"
import { Button } from '@/components/ui/button';
import { calculateRICE, performMoSCoWAnalysis, getGeneralFeedback } from '../actions/analysisActions';

interface Feature {
    id: string;
    name: string;
    description: string;
    parentId: string | null;
    type: 'feature' | 'project';
}

interface AnalysisWidgetsProps {
    feature: Feature | null;
    features: Feature[];
}

interface RICEScore {
    id: string;
    reach: number;
    impact: number;
    confidence: number;
    effort: number;
    score: number;
}

interface RICEScores {
    features: RICEScore[];
}

const AnalysisWidgets: React.FC<AnalysisWidgetsProps> = ({ feature, features }) => {
    const [riceScores, setRiceScores] = useState<RICEScores>({ features: [] });
    const [moscowAnalysis, setMoscowAnalysis] = useState<{ features: MoSCoWCategory[] }>({ features: [] });
    const [feedback, setFeedback] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const isDataAvailable = riceScores.features.length > 0 && moscowAnalysis.features.length > 0 && feedback !== null;

    const handleAnalyze = async () => {
        setIsLoading(true);
        try {
            const riceResult = await calculateRICE(feature, features);
            const moscowResult = await performMoSCoWAnalysis(feature, features);
            const feedbackResult = await getGeneralFeedback(feature, features, riceResult.features, moscowResult.features);
            setRiceScores(riceResult);
            setMoscowAnalysis(moscowResult);
            setFeedback(feedbackResult);
        } catch (error) {
            console.error('Error during analysis:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-2">
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        <MainTitle>Feature Analysis</MainTitle>
                        <Button variant="default" size="sm" onClick={handleAnalyze} disabled={isLoading}>
                            {isLoading ? 'Analyzing...' : 'Analyze'}
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col gap-2'>
                    <MetaText>This dashboard provides insights into the selected feature and all available features.</MetaText>
                    <BodyText>
                        Currently analyzing: <strong>{feature?.name}</strong>
                    </BodyText>
                </CardContent>
            </Card>

            <Card className={`bg-primary text-primary-foreground ${!isDataAvailable ? 'opacity-50 pointer-events-none' : ''}`}>
                <CardHeader>
                    <CardTitle>General Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                    {feedback && (
                        <>
                            <p className="text-base italic mb-4">{feedback.feedback}</p>
                            <ol className="list-decimal list-inside">
                                {feedback.list.map((featureId, index) => (
                                    <li key={index} className="mb-2">
                                        {features.find(f => f.id === featureId)?.name || featureId}
                                    </li>
                                ))}
                            </ol>
                        </>
                    )}
                </CardContent>
            </Card>

            <Card className={!isDataAvailable ? 'opacity-50 pointer-events-none' : ''}>
                <CardHeader className="pb-3">
                    <CardTitle>
                        <MainTitle>All Features</MainTitle>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead><Subtitle>Feature Name</Subtitle></TableHead>
                                <TableHead><Subtitle>Reach</Subtitle></TableHead>
                                <TableHead><Subtitle>Impact</Subtitle></TableHead>
                                <TableHead><Subtitle>Confidence</Subtitle></TableHead>
                                <TableHead><Subtitle>Effort</Subtitle></TableHead>
                                <TableHead><Subtitle>RICE Score</Subtitle></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {features.map((item) => {
                                console.log(riceScores);
                                const riceScore = riceScores.features.find(score => score.id === item.id);
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell><BodyText>{item.name}</BodyText></TableCell>
                                        <TableCell><BodyText>{riceScore?.reach.toFixed(2) || '-'}</BodyText></TableCell>
                                        <TableCell><BodyText>{riceScore?.impact.toFixed(2) || '-'}</BodyText></TableCell>
                                        <TableCell><BodyText>{riceScore?.confidence.toFixed(2) || '-'}</BodyText></TableCell>
                                        <TableCell><BodyText>{riceScore?.effort.toFixed(2) || '-'}</BodyText></TableCell>
                                        <TableCell><BodyText>{riceScore?.score.toFixed(2) || '-'}</BodyText></TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card className={!isDataAvailable ? 'opacity-50 pointer-events-none' : ''}>
                <CardHeader className="pb-3">
                    <CardTitle>
                        <MainTitle>MoSCoW Analysis</MainTitle>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                        {["Must Have", "Should Have", "Could Have", "Won't Have"].map((category) => (
                            <Card key={category}>
                                <CardContent className="p-2">
                                    <Subtitle>{category}</Subtitle>
                                    <ul className="list-disc pl-4">
                                        {moscowAnalysis.features
                                            .filter(item => item.category === category)
                                            .map(item => (
                                                <li key={item.id}>
                                                    <BodyText>
                                                        {features.find(f => f.id === item.id)?.name || item.id}
                                                    </BodyText>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AnalysisWidgets;

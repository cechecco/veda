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
    const [moscowAnalysis, setMoscowAnalysis] = useState<Record<string, boolean> | null>(null);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleAnalyze = async () => {
        setIsLoading(true);
        try {
            const [riceResult, moscowResult, feedbackResult] = await Promise.all([
                calculateRICE(feature, features),
                performMoSCoWAnalysis(feature, features),
                getGeneralFeedback(feature, features)
            ]);
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

            <Card className='bg-primary text-primary-foreground'>
                <CardHeader>
                    <CardTitle>General Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                    {feedback && <p className="text-base italic">{feedback}</p>}
                </CardContent>
            </Card>

            <Card>
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

            <Card>
                <CardHeader className="pb-3">
                    <CardTitle>
                        <MainTitle>MoSCoW Analysis</MainTitle>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                        {["Must Have", "Should Have", "Could Have", "Won't Have"].map((item: string) => (
                            <Card key={item}>
                                <CardContent className="p-2 text-center">
                                    <Subtitle>{item}</Subtitle>
                                    {moscowAnalysis && (
                                        <BodyText>{moscowAnalysis[item] ? 'Yes' : 'No'}</BodyText>
                                    )}
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

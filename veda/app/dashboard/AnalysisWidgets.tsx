import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MainTitle, Subtitle, BodyText } from "../components/typography"

interface RiceAnalysisData {
  feature: string;
  reach: number;
  impact: number;
  confidence: number;
  effort: number;
}

interface AnalysisWidgetsProps {
  riceData: RiceAnalysisData[];
}

const AnalysisWidgets: React.FC<AnalysisWidgetsProps> = ({ riceData }) => {
  const calculateRiceScore = (item: RiceAnalysisData) => {
    return (item.reach * item.impact * item.confidence) / item.effort;
  };

  return (
    <div className="space-y-2">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>
            <MainTitle>RICE Frame Prioritization Analysis</MainTitle>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead><Subtitle>Feature</Subtitle></TableHead>
                <TableHead><Subtitle>Reach</Subtitle></TableHead>
                <TableHead><Subtitle>Impact</Subtitle></TableHead>
                <TableHead><Subtitle>Confidence</Subtitle></TableHead>
                <TableHead><Subtitle>Effort</Subtitle></TableHead>
                <TableHead><Subtitle>RICE Score</Subtitle></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {riceData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell><BodyText>{item.feature}</BodyText></TableCell>
                  <TableCell><BodyText>{item.reach}</BodyText></TableCell>
                  <TableCell><BodyText>{item.impact}</BodyText></TableCell>
                  <TableCell><BodyText>{item.confidence}</BodyText></TableCell>
                  <TableCell><BodyText>{item.effort}</BodyText></TableCell>
                  <TableCell><BodyText>{calculateRiceScore(item).toFixed(2)}</BodyText></TableCell>
                </TableRow>
              ))}
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

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
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">RICE Frame Prioritization Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Reach</TableHead>
                <TableHead>Impact</TableHead>
                <TableHead>Confidence</TableHead>
                <TableHead>Effort</TableHead>
                <TableHead>RICE Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {riceData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.feature}</TableCell>
                  <TableCell>{item.reach}</TableCell>
                  <TableCell>{item.impact}</TableCell>
                  <TableCell>{item.confidence}</TableCell>
                  <TableCell>{item.effort}</TableCell>
                  <TableCell>{calculateRiceScore(item).toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">MoSCoW Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {["Must Have", "Should Have", "Could Have", "Won't Have"].map((item: string) => (
              <Card key={item}>
                <CardContent className="p-2 text-center text-sm">
                  {item}
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

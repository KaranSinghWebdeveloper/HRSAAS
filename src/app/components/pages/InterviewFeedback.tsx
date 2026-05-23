import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Badge } from '../ui/badge';
import { Slider } from '../ui/slider';
import { ArrowLeft, Star, ThumbsUp, ThumbsDown, MinusCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function InterviewFeedback() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [technicalRating, setTechnicalRating] = useState([3]);
  const [communicationRating, setCommunicationRating] = useState([3]);
  const [behavioralRating, setBehavioralRating] = useState([3]);
  const [overallDecision, setOverallDecision] = useState('');

  const interview = {
    candidate: 'Sarah Johnson',
    position: 'Senior Frontend Developer',
    round: 'Technical Round 2',
    date: '2024-05-24',
    time: '11:00 AM',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Feedback submitted successfully!');
    navigate('/interviews');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/interviews')}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Interview Feedback</h1>
          <p className="text-muted-foreground mt-1">Provide feedback for the interview</p>
        </div>
      </div>

      {/* Interview Details */}
      <Card>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Candidate</p>
              <p className="font-semibold text-lg">{interview.candidate}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Position</p>
              <p className="font-semibold text-lg">{interview.position}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Interview Round</p>
              <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400">
                {interview.round}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Interview Date & Time</p>
              <p className="font-medium">{interview.date} at {interview.time}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Technical Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills Evaluation</CardTitle>
            <CardDescription>Rate the candidate's technical competency</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label>Technical Proficiency</Label>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">{technicalRating[0]}</span>
                  <span className="text-sm text-muted-foreground">/5</span>
                </div>
              </div>
              <Slider
                value={technicalRating}
                onValueChange={setTechnicalRating}
                max={5}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Poor</span>
                <span>Below Average</span>
                <span>Average</span>
                <span>Good</span>
                <span>Excellent</span>
              </div>
            </div>

            <div>
              <Label htmlFor="technicalNotes">Technical Skills Notes</Label>
              <Textarea
                id="technicalNotes"
                rows={4}
                placeholder="Describe the candidate's technical skills, problem-solving approach, code quality..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Communication Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Communication Skills</CardTitle>
            <CardDescription>Evaluate the candidate's communication abilities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label>Communication Rating</Label>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">{communicationRating[0]}</span>
                  <span className="text-sm text-muted-foreground">/5</span>
                </div>
              </div>
              <Slider
                value={communicationRating}
                onValueChange={setCommunicationRating}
                max={5}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Poor</span>
                <span>Below Average</span>
                <span>Average</span>
                <span>Good</span>
                <span>Excellent</span>
              </div>
            </div>

            <div>
              <Label htmlFor="communicationNotes">Communication Notes</Label>
              <Textarea
                id="communicationNotes"
                rows={4}
                placeholder="Comment on clarity of thought, ability to explain concepts, listening skills..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Behavioral Assessment */}
        <Card>
          <CardHeader>
            <CardTitle>Behavioral Assessment</CardTitle>
            <CardDescription>Evaluate cultural fit and soft skills</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label>Behavioral Rating</Label>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">{behavioralRating[0]}</span>
                  <span className="text-sm text-muted-foreground">/5</span>
                </div>
              </div>
              <Slider
                value={behavioralRating}
                onValueChange={setBehavioralRating}
                max={5}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Poor</span>
                <span>Below Average</span>
                <span>Average</span>
                <span>Good</span>
                <span>Excellent</span>
              </div>
            </div>

            <div>
              <Label htmlFor="behavioralNotes">Behavioral Notes</Label>
              <Textarea
                id="behavioralNotes"
                rows={4}
                placeholder="Assess team fit, work ethic, motivation, problem-solving mindset..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Overall Decision */}
        <Card>
          <CardHeader>
            <CardTitle>Overall Decision</CardTitle>
            <CardDescription>Make your hiring recommendation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="mb-3 block">Decision</Label>
              <RadioGroup value={overallDecision} onValueChange={setOverallDecision}>
                <div className="grid md:grid-cols-4 gap-4">
                  <Card className={`cursor-pointer transition-colors ${overallDecision === 'pass' ? 'border-green-500 bg-green-500/5' : ''}`}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <RadioGroupItem value="pass" id="pass" />
                      <Label htmlFor="pass" className="cursor-pointer flex items-center gap-2 flex-1">
                        <ThumbsUp className="w-5 h-5 text-green-500" />
                        <span>Pass</span>
                      </Label>
                    </CardContent>
                  </Card>

                  <Card className={`cursor-pointer transition-colors ${overallDecision === 'reject' ? 'border-red-500 bg-red-500/5' : ''}`}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <RadioGroupItem value="reject" id="reject" />
                      <Label htmlFor="reject" className="cursor-pointer flex items-center gap-2 flex-1">
                        <ThumbsDown className="w-5 h-5 text-red-500" />
                        <span>Reject</span>
                      </Label>
                    </CardContent>
                  </Card>

                  <Card className={`cursor-pointer transition-colors ${overallDecision === 'hold' ? 'border-amber-500 bg-amber-500/5' : ''}`}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <RadioGroupItem value="hold" id="hold" />
                      <Label htmlFor="hold" className="cursor-pointer flex items-center gap-2 flex-1">
                        <MinusCircle className="w-5 h-5 text-amber-500" />
                        <span>Hold</span>
                      </Label>
                    </CardContent>
                  </Card>

                  <Card className={`cursor-pointer transition-colors ${overallDecision === 'next' ? 'border-blue-500 bg-blue-500/5' : ''}`}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <RadioGroupItem value="next" id="next" />
                      <Label htmlFor="next" className="cursor-pointer flex items-center gap-2 flex-1">
                        <Star className="w-5 h-5 text-blue-500" />
                        <span>Next Round</span>
                      </Label>
                    </CardContent>
                  </Card>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="summary">Overall Summary</Label>
              <Textarea
                id="summary"
                rows={5}
                placeholder="Provide a comprehensive summary of the interview, key strengths, areas of concern, and your recommendation..."
              />
            </div>

            <div>
              <Label htmlFor="nextSteps">Recommended Next Steps</Label>
              <Textarea
                id="nextSteps"
                rows={3}
                placeholder="Suggest next steps for this candidate (e.g., schedule next round, send offer, reject with specific feedback)..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Buttons */}
        <div className="flex gap-4">
          <Button type="submit" className="flex-1">
            Submit Feedback
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate('/interviews')}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

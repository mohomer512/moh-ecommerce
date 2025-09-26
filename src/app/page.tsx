import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-6 p-6 max-w-md mx-auto">
      <Button variant="elevated">Im a button</Button>

      <Input placeholder="I'm an input" />

      <Progress value={50} className="w-full" />

      <Textarea placeholder="I'm a text area" />

      <Checkbox> checkbox </Checkbox>
    </div>
  );
}
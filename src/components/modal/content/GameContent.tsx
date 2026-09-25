import { Button } from "react95";
import { GameIcon } from "@/components/icons";

export default function GameContent() {
  return (
    <div className="flex flex-col items-center gap-3 py-4 text-center text-sm">
      <GameIcon className="h-12 w-12" aria-hidden="true" />
      <p className="font-bold">Coming soon</p>
      <p className="max-w-xs">
        A daily word or crossword puzzle — likely powered by a NYTimes
        Wordle-style API or similar — will live here.
      </p>
      <Button type="button" disabled>
        Play
      </Button>
    </div>
  );
}

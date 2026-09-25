"use client";

import { useEffect, useState } from "react";
import { Button } from "react95";

const WORD_LENGTH = 5;
const MAX_GUESSES = 6;
const ALPHABET = "QWERTYUIOPASDFGHJKLZXCVBNM";

type LetterState = "correct" | "present" | "absent";

function scoreGuess(guess: string, solution: string): LetterState[] {
  const result: LetterState[] = Array(WORD_LENGTH).fill("absent");
  const remaining = solution.split("");

  for (let index = 0; index < WORD_LENGTH; index += 1) {
    if (guess[index] === solution[index]) {
      result[index] = "correct";
      remaining[index] = "";
    }
  }

  for (let index = 0; index < WORD_LENGTH; index += 1) {
    if (result[index] === "correct") continue;
    const matchIndex = remaining.indexOf(guess[index]);
    if (matchIndex !== -1) {
      result[index] = "present";
      remaining[matchIndex] = "";
    }
  }

  return result;
}

function tileClass(state?: LetterState) {
  if (state === "correct") return "border-[#3b8062] bg-[#3b8062] text-white";
  if (state === "present") return "border-[#d3aa37] bg-[#d3aa37] text-black";
  if (state === "absent") return "border-[#777] bg-[#777] text-white";
  return "border-[#777] bg-white text-black";
}

export default function GameContent() {
  const [solution, setSolution] = useState<string | null>(null);
  const [printDate, setPrintDate] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let active = true;

    fetch("/api/game/daily", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("The daily puzzle is unavailable.");
        return response.json();
      })
      .then((data: { solution?: unknown; printDate?: unknown }) => {
        if (!active) return;
        if (
          typeof data.solution !== "string" ||
          !/^[a-z]{5}$/i.test(data.solution) ||
          typeof data.printDate !== "string"
        ) {
          throw new Error("The daily puzzle could not be loaded.");
        }
        setSolution(data.solution.toUpperCase());
        setPrintDate(data.printDate);
      })
      .catch(() => {
        if (active) setError("Could not load today’s puzzle. Check your connection and try again.");
      });

    return () => {
      active = false;
    };
  }, [retryCount]);

  const finished =
    solution !== null &&
    (guesses.includes(solution) || guesses.length === MAX_GUESSES);
  const won = solution !== null && guesses.includes(solution);

  function submitGuess() {
    if (!solution || finished || currentGuess.length !== WORD_LENGTH) return;
    setGuesses((previous) => [...previous, currentGuess]);
    setCurrentGuess("");
  }

  function pressKey(key: string) {
    if (!solution || finished) return;
    if (key === "ENTER") {
      submitGuess();
    } else if (key === "⌫") {
      setCurrentGuess((previous) => previous.slice(0, -1));
    } else if (/^[A-Z]$/.test(key)) {
      setCurrentGuess((previous) =>
        previous.length < WORD_LENGTH ? previous + key : previous,
      );
    }
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Enter") pressKey("ENTER");
      else if (event.key === "Backspace") pressKey("⌫");
      else if (/^[a-z]$/i.test(event.key)) pressKey(event.key.toUpperCase());
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const keyboardStates = new Map<string, LetterState>();
  if (solution) {
    guesses.forEach((guess) => {
      scoreGuess(guess, solution).forEach((state, index) => {
        const letter = guess[index];
        const existing = keyboardStates.get(letter);
        if (state === "correct" || (state === "present" && existing !== "correct")) {
          keyboardStates.set(letter, state);
        } else if (!existing) {
          keyboardStates.set(letter, state);
        }
      });
    });
  }

  const message = error
    ? error
    : finished
      ? won
        ? "Brilliant! You solved it."
        : `The word was ${solution}. Better luck tomorrow!`
      : solution
        ? ""
        : "Loading today’s puzzle…";

  return (
    <section className="mx-auto flex w-full max-w-[390px] flex-col items-center gap-3 py-2 text-center text-sm">
      <div className="flex w-full items-center justify-between gap-2">
        <div className="text-left">
          <h2 className="text-base font-bold">Daily Wordle</h2>
          <p className="text-xs">Guess the 5-letter word in 6 tries</p>
        </div>
        {printDate && <time className="text-xs" dateTime={printDate}>{printDate}</time>}
      </div>

      <div className="grid w-fit grid-cols-5 gap-1.5" role="group" aria-label="Word guesses">
        {Array.from({ length: MAX_GUESSES }, (_, row) => {
          const guess = guesses[row] ?? (row === guesses.length ? currentGuess : "");
          const states = guesses[row] && solution ? scoreGuess(guess, solution) : [];
          return Array.from({ length: WORD_LENGTH }, (_, column) => (
            <div
              key={`${row}-${column}`}
              aria-label={
                states[column]
                  ? `${guess[column]}, ${states[column]}`
                  : guess[column] || "empty"
              }
              className={`flex h-12 w-12 items-center justify-center border-2 text-xl font-bold ${tileClass(states[column])}`}
            >
              {guess[column] ?? ""}
            </div>
          ));
        })}
      </div>

      <p className="min-h-5 text-xs" role="status" aria-live="polite">
        {message || `${MAX_GUESSES - guesses.length} guesses remaining`}
      </p>

      <div className="flex w-full flex-col gap-1.5" aria-label="On-screen keyboard">
        {[ALPHABET.slice(0, 10), ALPHABET.slice(10, 19), ALPHABET.slice(19)].map(
          (row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-1">
              {rowIndex === 2 && (
                <button
                  type="button"
                  onClick={() => pressKey("ENTER")}
                  disabled={!solution || finished || currentGuess.length !== WORD_LENGTH}
                  className="min-w-12 border-2 border-[#777] bg-[#d6d6d6] px-2 text-[10px] font-bold disabled:opacity-50"
                  aria-label="Submit guess"
                >
                  ENTER
                </button>
              )}
              {row.split("").map((letter) => {
                const state = keyboardStates.get(letter);
                const background = state === "correct"
                  ? "border-[#3b8062] bg-[#3b8062] text-white"
                  : state === "present"
                    ? "border-[#d3aa37] bg-[#d3aa37] text-black"
                    : state === "absent"
                      ? "border-[#777] bg-[#777] text-white"
                      : "border-[#777] bg-[#d6d6d6] text-black";
                return (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => pressKey(letter)}
                    disabled={!solution || finished}
                    className={`h-10 min-w-7 flex-1 border-2 text-sm font-bold disabled:opacity-70 ${background}`}
                    aria-label={letter}
                  >
                    {letter}
                  </button>
                );
              })}
              {rowIndex === 2 && (
                <button
                  type="button"
                  onClick={() => pressKey("⌫")}
                  disabled={!solution || finished || currentGuess.length === 0}
                  className="min-w-12 border-2 border-[#777] bg-[#d6d6d6] px-2 text-sm font-bold disabled:opacity-50"
                  aria-label="Delete letter"
                >
                  ⌫
                </button>
              )}
            </div>
          ),
        )}
      </div>

      {error && (
        <Button
          type="button"
          onClick={() => {
            setError("");
            setRetryCount((previous) => previous + 1);
          }}
          className="font-bold"
        >
          Try again
        </Button>
      )}
    </section>
  );
}

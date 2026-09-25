type DailyPuzzleResponse = {
  solution?: unknown;
  print_date?: unknown;
};

export async function GET() {
  const printDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  try {
    const response = await fetch(
      `https://www.nytimes.com/svc/wordle/v2/${printDate}.json`,
      { cache: "no-store" },
    );
    if (!response.ok) throw new Error("Puzzle request failed");

    const puzzle = (await response.json()) as DailyPuzzleResponse;
    if (
      typeof puzzle.solution !== "string" ||
      !/^[a-z]{5}$/i.test(puzzle.solution) ||
      puzzle.print_date !== printDate
    ) {
      throw new Error("Puzzle response was invalid");
    }

    return Response.json({
      solution: puzzle.solution,
      printDate,
    });
  } catch {
    return Response.json(
      { error: "The daily puzzle is unavailable." },
      { status: 502 },
    );
  }
}
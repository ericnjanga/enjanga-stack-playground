

export interface Learner {
  fullName: string;
  level: number;
  scores: number[];
}

export interface Summary {
  id: string;
  scoreRating: number;
}

export function evaluateLearners(
  learners: Learner[]
): Summary[] {
  return learners
    .filter((learner) => learner.level >= 2)
    .map((learner) => {
      const lowestScores = [...learner.scores]
        .sort((a, b) => a - b)
        .slice(0, 4);

      const normalizedScores =
        lowestScores.length === 1
          ? [lowestScores[0], lowestScores[0]]
          : lowestScores;

      const total = normalizedScores.reduce(
        (sum, score) => sum + score,
        0
      );

      return {
        id: learner.fullName.slice(0, 3).toUpperCase(),
        scoreRating: total / normalizedScores.length,
      };
    })
    .sort((a, b) => a.scoreRating - b.scoreRating);
}
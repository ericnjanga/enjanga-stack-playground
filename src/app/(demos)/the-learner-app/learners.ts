

export interface Learner {
  fullName: string;
  level: number;
  scores: number[];
}

export interface Summary {
  id: string;
  scoreRating: number;
}

/**
 * 
 * Our objective: Transform an array of Learner objects into an array of Summary objects.
 *
 * The requirements: 
 * Filter: Exclude learners whose level is below 2. 
 * Select scores: Keep the four lowest scores for each eligible learner. 
 * Handle single scores: If a learner has only one score, duplicate it so there are two scores. 
 * Transform: Generate an uppercase ID using the first three letters of the learner's name, and calculate the average of the retained scores. 
 * Sort: Return the results in ascending order of average score.
 * @param learners 
 * @returns 
 */
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
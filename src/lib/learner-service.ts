import learners from "@/app/(demos)/the-learner-app/learners.json";
import type { Learner } from "@/app/(demos)/the-learner-app/learners";

export function getLearners(): readonly Learner[] {
  return learners;
}

import { getLearners } from "@/lib/learner-service";

export function GET() {
  return Response.json(getLearners());
}

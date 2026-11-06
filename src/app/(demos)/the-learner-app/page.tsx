import HeroDemo from "@/components/HeroDemo";
import { getDemoByRoute } from "@/data/demos";
import LearnerAppVersions from "./LearnerAppVersions";

const demo = getDemoByRoute("/the-learner-app");

export default function LearnerAppPage() {
  return (
    <>
      {demo && <HeroDemo title={demo.title} description={demo.description} />}
      <LearnerAppVersions />
    </>
  );
}

/** @param {HTMLElement} root */
import { fetchJson } from '@/lib/http/fetchJson';
import { Learner, Summary, evaluateLearners } from '../learners';




function getLearner(learner: Learner): HTMLLIElement {
  const li = document.createElement("li");
  li.className = 'rounded-lg border border-gray-200 bg-white p-4 shadow-sm';

  // Learner name
  const name = document.createElement("h3");
  name.className = 'text-lg font-semibold text-gray-800';
  name.textContent = learner.fullName;
  
  
  // Learner level
  const level = document.createElement("p");
  level.className = 'text-sm text-gray-600';
  level.textContent = `Level: ${learner.level}`;

  // Learner scores
  const scores = document.createElement("p");
  scores.className = 'mt-2 text-sm text-gray-700';
  scores.textContent = `Scores: ${learner.scores.join(", ")}`;

  // Assemble the list item
  li.append(name, level, scores);

  return li;
}


const renderLearners = (learners: Learner[], container: Element) => {

  // 1. Create the unordered list
  const ul = document.createElement("ul");
  ul.className = "grid grid-cols-3 gap-3";

  // 2. Create a document fragment
  const fragment = document.createDocumentFragment();

  // 3. Create one list item per learner
  learners.forEach((learner) => {
    const li = getLearner(learner);
    fragment.append(li);
  });

  // 4. Append the fragment to the unordered list
  ul.append(fragment);

  // 5. Replace the container's existing content with the new list
  container.replaceChildren(ul);
};


export function mountVanillaVersion(root: Element) {

  (async() => {
    root.textContent = "Loading the vanilla JavaScript implementation...";

    const listOfLearners: Learner[] = await fetchJson("/api/learners")
   
    if (root) {
      renderLearners(listOfLearners, root);
    }
  })();

  return () => root.replaceChildren();
}

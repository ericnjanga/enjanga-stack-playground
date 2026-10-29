import { expect, test } from "vitest";
import { demos, currentDemos, plannedDemos, getCurrentDemos, getPlannedDemos, getDemoByRoute } from "@/data/demos";

test("every demo has a unique ID and belongs to exactly one valid group", () => {
  const ids = demos.map((demo) => demo.id);
  const groupedIds = [...currentDemos, ...plannedDemos];
  expect(new Set(ids).size).toBe(ids.length);
  expect(ids.every(Number.isSafeInteger)).toBe(true);
  expect(new Set(groupedIds).size).toBe(groupedIds.length);
  expect([...groupedIds].sort()).toEqual([...ids].sort());
});

test("group resolution preserves ID order and current demos have routes", () => {
  expect(getCurrentDemos().map((demo) => demo.id)).toEqual(currentDemos);
  expect(getPlannedDemos().map((demo) => demo.id)).toEqual(plannedDemos);
  expect(getCurrentDemos().every((demo) => Boolean(demo.route))).toBe(true);
});

test("route metadata resolves independently of its current or planned group", () => {
  for (const demo of demos.filter((demo) => demo.route)) {
    expect(getDemoByRoute(demo.route!)).toBe(demo);
  }
  expect(getDemoByRoute("/missing-demo")).toBeUndefined();
});

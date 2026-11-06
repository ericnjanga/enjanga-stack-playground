"use client";

import { useEffect, useRef } from "react";
import { mountVanillaVersion } from "./index";

export default function VanillaVersion() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (root.current) return mountVanillaVersion(root.current);
  }, []);

  return <div ref={root} />;
}

"use client";

import { useEffect } from "react";

export default function BodyDebugLogger() {
  useEffect(() => {
    const attrs = Array.from(document.body.attributes).map(attr => attr.name);
    console.log("🔍 Attributs présents sur <body> :", attrs);
  }, []);

  return null;
}

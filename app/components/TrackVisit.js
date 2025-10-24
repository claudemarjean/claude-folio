"use client";
import { useEffect } from "react";
import { trackVisit } from "@/utils/trackVisit";

export default function TrackVisit() {
  useEffect(() => {
    trackVisit();
  }, []);

  return null; 
}

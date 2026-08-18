"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Preference = "full" | "reduced" | "system";
type MotionContextValue = {
  reduced: boolean;
  preference: Preference;
  setPreference: (value: Preference) => void;
};

const MotionContext = createContext<MotionContextValue>({
  reduced: false,
  preference: "full",
  setPreference: () => {},
});

function systemPrefersReduced() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function MotionPreferences({ children }: { children: React.ReactNode }) {
  // Full motion is the art-directed default; reduced and system modes remain one click away.
  const [preference, setPreferenceState] = useState<Preference>("full");
  const [systemReduced, setSystemReduced] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("teacher-site-motion") as Preference | null;
    if (saved === "full" || saved === "reduced" || saved === "system") {
      requestAnimationFrame(() => setPreferenceState(saved));
    }
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSystemReduced(media.matches);
    requestAnimationFrame(update);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const reduced = preference === "reduced" || (preference === "system" && systemReduced);

  useEffect(() => {
    document.documentElement.dataset.motion = reduced ? "reduced" : "full";
    document.documentElement.dataset.motionPreference = preference;
  }, [reduced, preference]);

  const setPreference = (value: Preference) => {
    setPreferenceState(value);
    window.localStorage.setItem("teacher-site-motion", value);
  };

  const value = useMemo(() => ({ reduced, preference, setPreference }), [reduced, preference]);
  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useSiteMotion() {
  return useContext(MotionContext);
}

export function MotionPreferenceControl() {
  const { preference, reduced, setPreference } = useSiteMotion();
  const next: Preference = preference === "full" ? "reduced" : preference === "reduced" ? "system" : "full";
  const label = preference === "system" ? `Motion: system${systemPrefersReduced() ? " (reduced)" : " (full)"}` : reduced ? "Motion: reduced" : "Motion: full";

  return (
    <button className="motion-control" type="button" onClick={() => setPreference(next)} aria-label={`${label}. Activate to switch to ${next} motion.`} title={`Switch to ${next} motion`}>
      <span className="motion-control-icon" aria-hidden="true"><i /><i /><i /></span>
      <span>{label}</span>
    </button>
  );
}

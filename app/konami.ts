
import { useEffect, useRef } from "react";

export function useKonami(callback: () => void) {
  const sequenceRef = useRef<string>("");
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      sequenceRef.current += String(e.keyCode - 37);
      if (/113302022928$/.test(sequenceRef.current)) {
        callback();
        sequenceRef.current = "";
      }
      // Limit length to avoid memory leak
      if (sequenceRef.current.length > 12) {
        sequenceRef.current = sequenceRef.current.slice(-12);
      }
    };
    window.addEventListener("keyup", handler);
    return () => {
      window.removeEventListener("keyup", handler);
    };
  }, [callback]);
}

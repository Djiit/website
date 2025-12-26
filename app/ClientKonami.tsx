"use client";

import { useKonami } from "./konami";

export default function ClientKonami() {
  useKonami(() => {
    alert("Konami code activated!");
  });
  return null;
}

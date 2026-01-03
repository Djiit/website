"use client";

import dynamic from "next/dynamic";

const ClientKonami = dynamic(() => import("./ClientKonami"), { ssr: false });

export function KonamiWrapper() {
  return <ClientKonami />;
}

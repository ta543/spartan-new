import advertorial from "./adv.json";
import advertorialMedia from "./adv-media.json";

import { TopBar } from "@/sections/TopBar";

export default function CellularEnergyDiscoveryPage() {
  return (
    <main className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto bg-white tracking-[normal] leading-6 pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-apple_system">
      <TopBar content={advertorial} media={advertorialMedia} />
    </main>
  );
}

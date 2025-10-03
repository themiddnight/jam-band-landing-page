import type { Metadata } from "next";
import InstructionsPage from "@/components/instructions/InstructionsPage";

export const metadata: Metadata = {
  title: "Instructions | COLLAB - Jam Band",
  description: "Learn how to use COLLAB - Jam Band's virtual instruments, effects, sequencer, and collaboration features. Complete guide for real-time collaborative music making.",
  keywords: [
    "instructions",
    "how to use",
    "virtual instruments",
    "keyboard tutorial",
    "guitar tutorial", 
    "drum tutorial",
    "sequencer guide",
    "effects tutorial",
    "collaboration guide",
    "music theory",
    "jam band tutorial"
  ],
};

export default function Instructions() {
  return <InstructionsPage />;
}
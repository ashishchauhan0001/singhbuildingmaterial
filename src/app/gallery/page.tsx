import { FocusCards } from "@/components/ui/focus-cards";
import gallery from "../../data/gallery.json"

export default function FocusCardsDemo() {
  return (
    <div className="min-h-screen flex flex-col bg-black py-12 pt-36 relative">
      <div> <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-14">Gallery</h1></div>
      <div>
      <FocusCards cards={gallery} />
      </div>
    </div>
  );
}

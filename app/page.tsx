import fs from "node:fs";
import path from "node:path";
import Collage from "@/components/Collage";
import { tiles } from "@/content/tiles";

function imageExists(file: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "images", file));
}

export default function Home() {
  return <Collage tiles={tiles.map((tile) => ({ ...tile, hasImage: imageExists(tile.image) }))} />;
}

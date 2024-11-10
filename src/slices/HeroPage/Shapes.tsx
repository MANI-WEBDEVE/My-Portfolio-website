"use client";
import dynamic from 'next/dynamic';


// Dynamically import the Shapes component with SSR disabled
const ShapesContent = dynamic<{}>(
  () => import("../../components/ShapeContent").then((mod) => mod.ShapesContent), 
  { ssr: false }
);
export default function Shapes() {
  return (
    <div className="row-span-1 row-start-1 -my-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <ShapesContent />
    </div>
  );
}

// ShapesContent.js file mein yeh code rakhein (Client-only component)


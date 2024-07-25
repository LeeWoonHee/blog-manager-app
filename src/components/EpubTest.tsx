import React, { useEffect, useRef } from "react";
import ePub, { Rendition } from "epubjs";

const EpubTest: React.FC = () => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const book = ePub("/mybook.epub");
    let rendition: Rendition;

    if (viewerRef.current) {
      rendition = book.renderTo(viewerRef.current, {
        width: "100%",
        height: "100%",
      });

      rendition.display();
    }

    // Cleanup function to destroy the rendition when the component is unmounted
    return () => {
      if (rendition) {
        rendition.destroy();
      }
    };
  }, []);

  return <div ref={viewerRef} style={{ width: "600px", height: "400px" }} />;
};

export default EpubTest;

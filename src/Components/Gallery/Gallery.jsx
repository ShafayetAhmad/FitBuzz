import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    document.title = "FitBuzz | Homepage";
  }, []);
  return <div>Gallery</div>;
};

export default Gallery;

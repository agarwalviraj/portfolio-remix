import Application from "../application";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";
import images from "../../../public/assets/tech-stack";

const TechStack = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.TECHSTACK,
  );
  return (
    <Application currentId={currentId}>
      <div className="main-section tech-stack">
        <div className="text">
          <span>My humble...</span>
          <h1>Tech Stack</h1>
        </div>
        <div className="technologies">
          {images.map((src, id) => {
            return <img key={id} src={src} />;
          })}
        </div>
      </div>
    </Application>
  );
};

export default TechStack;

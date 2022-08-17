import { useMainStore } from "../store/MainStore";
import { close } from "../utils/actions";
import { ApplicationType } from "../utils/types";

interface IconProps {
  app: ApplicationType;
  id: number;
}

const Icons = () => {
  const { allApplications, setAllApplications, setActive } = useMainStore()!;

  const Icon = ({ app, id }: IconProps) => {
    return (
      <div
        className="icon"
        onClick={() =>
          close(allApplications, id, setActive, setAllApplications, false)
        }
      >
        {<app.icon />} <br />
        <span>{app.name}</span>
      </div>
    );
  };

  return (
    <div className="icons">
      {allApplications.map((app, idx) => (
        <Icon key={idx} app={app} id={idx} />
      ))}
    </div>
  );
};

export default Icons;

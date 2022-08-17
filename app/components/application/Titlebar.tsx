import { useMainStore } from "../../store/MainStore";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { FaRegWindowMinimize } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { close, maximize, minimize } from "../../utils/actions";

interface TitlebarProps {
  currentId: number;
}

const Titlebar = ({ currentId }: TitlebarProps) => {
  const { setActive, allApplications, setAllApplications } = useMainStore()!;
  return (
    <div
      className="titlebar"
      onClick={() => setActive(allApplications[currentId].slug)}
      onMouseDown={() => setActive(allApplications[currentId].slug)}
    >
      <div className="titlebar-buttons">
        <AiOutlineClose
          className="close"
          onClick={() =>
            close(allApplications, currentId, setActive, setAllApplications)
          }
        />
        <FiMaximize2
          className="maximize"
          onClick={() =>
            maximize(allApplications, currentId, setActive, setAllApplications)
          }
        />

        <FaRegWindowMinimize
          className="minimize"
          onClick={() =>
            minimize(allApplications, currentId, setAllApplications, setActive)
          }
        />
      </div>
      <span className="title">{allApplications[currentId].name}</span>
      <div></div>
    </div>
  );
};

export default Titlebar;

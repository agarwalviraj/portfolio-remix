import { Dispatch, SetStateAction } from "react";
import { ApplicationType, slugs } from "./types";

export function close(
  allApplications: ApplicationType[],
  currentId: number,
  setActive: Dispatch<SetStateAction<slugs | undefined>>,
  setAllApplications: Dispatch<SetStateAction<ApplicationType[]>>,
  closeIfOpen = true,
) {
  const updatedApp = allApplications;
  updatedApp[currentId].isMinimized = false;
  updatedApp[currentId].isOpen = closeIfOpen
    ? !updatedApp[currentId].isOpen
    : true;
  setActive(allApplications[currentId].slug);
  setAllApplications([...updatedApp]);
}

export function maximize(
  allApplications: ApplicationType[],
  currentId: number,
  setActive: Dispatch<SetStateAction<slugs | undefined>>,
  setAllApplications: Dispatch<SetStateAction<ApplicationType[]>>,
) {
  const updatedApp = allApplications;
  updatedApp[currentId].isMaximized = !updatedApp[currentId].isMaximized;
  setActive(allApplications[currentId].slug);
  setAllApplications([...updatedApp]);
}

export function minimize(
  allApplications: ApplicationType[],
  currentId: number,
  setAllApplications: Dispatch<SetStateAction<ApplicationType[]>>,
  setActive: Dispatch<SetStateAction<slugs | undefined>>,
) {
  const updatedApp = allApplications;
  updatedApp[currentId].isMinimized = !updatedApp[currentId].isMinimized;
  setActive(undefined);
  setAllApplications([...updatedApp]);
}

export function maximizeOne(
  slug: ApplicationType["slug"],
  allApplications: ApplicationType[],
  setAllApplications: Dispatch<SetStateAction<ApplicationType[]>>,
  oneFocus: boolean = false,
  setRecents?: Dispatch<boolean>,
) {
  const updatedApps = allApplications;
  oneFocus && updatedApps.map((app) => (app.isMinimized = true));
  updatedApps.map((app) => {
    app.slug == slug ? (app.isMinimized = false) : null;
  });
  setAllApplications(updatedApps);
  setRecents && setRecents(false);
}

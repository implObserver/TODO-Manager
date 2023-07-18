import { OpenedFolder } from "../models/folderModels";
import { Link } from "../models/linkOfPath";
import { getLinkNodes } from "../views/nodes/content";
import { setListeners } from "./listeners";

export const getLink = () => {
    let link = Link(OpenedFolder.getOpenedFolder());
    link.setNode(getLinkNodes(link.getName()));
    setListeners().forLinkOfPath(link);
    return link;
}
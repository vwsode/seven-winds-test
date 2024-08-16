import { ArrowDown } from "./ArrowDown";
import { Dashboard } from "./Dashboard";
import { Document } from "./Document";
import { Grid } from "./Grid";
import { Share } from "./Share";
import { Trash } from "./Trash";
import { IconBaseProps, IconVariant } from "./types";

export const iconComponentsMap: Record<IconVariant, React.FC<IconBaseProps>> = {
  document: Document,
  trash: Trash,
  dashboard: Dashboard,
  share: Share,
  grid: Grid,
  "arrow-down": ArrowDown,
};

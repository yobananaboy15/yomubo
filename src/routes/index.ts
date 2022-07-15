import { lazy } from "react";

export const routes = {
  Home: lazy(() => import("./Home")),
  Voting: lazy(() => import("./Voting")),
};

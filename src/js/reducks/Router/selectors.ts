import { RouteList } from "appConfig";
import { RouterState } from "connected-react-router";
import { RootState } from "reducks/store";
import { createSelector } from "reselect";

const RouterSelector = (state: RouterState) => state

export const getPageNumber = createSelector(
  [RouterSelector],
  routerState => {
    const locationName = routerState.location.pathname

    switch (locationName) {
      case RouteList.top:
        return 0;
      case RouteList.machines:
        return 1;
      case RouteList.systems:
        return 2;
      case RouteList.products:
        return 3;
      case RouteList.companies:
        return 4;
      case RouteList.users:
        return 5;
      default:
        return 0;
    }
  }
);

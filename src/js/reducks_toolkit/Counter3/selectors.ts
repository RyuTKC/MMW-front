import { RootStateType } from "reducks/store";
import { createSelector, createSelectorCreator } from "reselect";
import { CountStateType } from "./types";

const counter3Selector = (state: CountStateType) => state


export const getCount3Value = createSelector(
  [counter3Selector],
  state => state.value
);
import { handleActions } from "redux-actions";

import { getMenu, getComplete } from "../actions/headerActions";

export const headerReducer = handleActions(
  new Map([
    [
      getMenu,
      (state, action) => ({
        menuItems: [...state.menuItems, action.payload]
      })
    ],
    [
      getComplete,
      (state, action) => ({
        menuItems: [...action.payload]
      })
    ]
  ]),
  {
    menuItems: []
  }
)

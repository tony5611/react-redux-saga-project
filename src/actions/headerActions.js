import { createAction } from "redux-actions";

/**
 * Action types
 */
export const GET_MENU = 'GET_MENU_ITEM';
export const MENU_RECEIVED = 'MENU_RECEIVED';
export const GET_COMPLETE = 'GET_COMPLETE';

export const getMenu = createAction(
  GET_MENU,
  items => items
)

export const menuReceived = createAction(
  MENU_RECEIVED,
  items => items
)

export const getComplete = createAction(
  GET_COMPLETE
)
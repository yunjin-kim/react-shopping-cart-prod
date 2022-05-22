import { createAsyncState } from 'lib/requestUtils';
import { CARTS_ACTIONS } from '../types';

const getCartListAction = {
  pending: () => ({
    type: CARTS_ACTIONS.UPDATE_CART_LIST_PENDING,
    async: createAsyncState.pending(),
  }),

  success: (payload) => ({
    type: CARTS_ACTIONS.UPDATE_CART_LIST_SUCCESS,
    payload,
    async: createAsyncState.success(),
  }),

  error: (payload) => ({
    type: CARTS_ACTIONS.UPDATE_CART_LIST_PENDING,
    async: createAsyncState.error(payload),
  }),
};

const addCartListAction = {
  pending: () => ({
    type: CARTS_ACTIONS.ADD_CART_LIST_PENDING,
    async: createAsyncState.pending(),
  }),

  success: (payload) => ({
    type: CARTS_ACTIONS.ADD_CART_LIST_SUCCESS,
    payload,
    async: createAsyncState.success(),
  }),

  error: (payload) => ({
    type: CARTS_ACTIONS.ADD_CART_LIST_ERROR,
    async: createAsyncState.error(payload),
  }),
};

const updateCartItemSuccess = (payload) => ({
  type: CARTS_ACTIONS.UPDATE_CART_ITEM_SUCCESS,
  payload,
});

const updateCartItemChecked = (id, isChecked) => ({
  type: CARTS_ACTIONS.UPDATE_CART_ITEM_CHECKED,
  payload: { id, isChecked },
});

const updateCartItemAllChecked = (isChecked) => ({
  type: CARTS_ACTIONS.UPDATE_CART_ITEM_ALL_CHECKED,
  payload: { isChecked },
});

const removeCartItemSuccess = (id) => ({
  type: CARTS_ACTIONS.REMOVE_CART_ITEM_SUCCESS,
  payload: { id },
});

const removeCartItemListSuccess = (idList) => ({
  type: CARTS_ACTIONS.REMOVE_CART_ITEM_LIST_SUCCESS,
  payload: { idList },
});

export {
  getCartListAction,
  addCartListAction,
  updateCartItemSuccess,
  updateCartItemChecked,
  updateCartItemAllChecked,
  removeCartItemSuccess,
  removeCartItemListSuccess,
};

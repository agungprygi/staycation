import { CHECKOUT_BOOKING } from "../types";

export const checkoutBooking = (payload) => async (dispatch) => {
    dispatch({
        type: CHECKOUT_BOOKING,
        payload: payload
    });
}
import {
  OrderAction,
  OrderState,
  UpdateHotelRoomAction,
  UpdateProductAction,
} from "./types";

const updateProductReducer = (
  state: OrderState,
  action: UpdateProductAction,
): OrderState => {
  const id = `${action.id}${action.variation || ""}`;
  const selectedProducts = { ...state.selectedProducts };
  const productItems = selectedProducts[id] ? [...selectedProducts[id]] : [];

  switch (action.type) {
    case "incrementProduct":
      productItems.push({
        id: action.id,
        variation: action.variation,
        answers: {},
        attendeeName: "",
        attendeeEmail: "",
      });
      break;
    case "decrementProduct":
      productItems.splice(0, 1);
      break;
  }

  if (productItems.length === 0) {
    delete selectedProducts[id];
  } else {
    selectedProducts[id] = productItems;
  }

  return {
    ...state,
    selectedProducts,
  };
};

const updateHotelRoomReducer = (
  state: OrderState,
  action: UpdateHotelRoomAction,
): OrderState => {
  const id = action.id;
  const hotelRooms = { ...state.selectedHotelRooms };
  const hotelRoomById = hotelRooms[action.id] ? [...hotelRooms[id]] : [];

  switch (action.type) {
    case "addHotelRoom":
      hotelRoomById.push({
        id,
        checkin: action.checkin,
        checkout: action.checkout,
        numNights: action.checkout.diff(action.checkin, "days"),
      });
      break;
    case "removeHotelRoom":
      hotelRoomById.splice(action.index, 1);
      break;
  }

  if (hotelRoomById.length === 0) {
    delete hotelRooms[id];
  } else {
    hotelRooms[id] = hotelRoomById;
  }

  return {
    ...state,
    selectedHotelRooms: hotelRooms,
  };
};

export const reducer = (state: OrderState, action: OrderAction): OrderState => {
  switch (action.type) {
    case "incrementProduct":
    case "decrementProduct":
      return updateProductReducer(state, action);
    case "addHotelRoom":
    case "removeHotelRoom":
      return updateHotelRoomReducer(state, action);
    case "updateTicketAnswer": {
      const products = state.selectedProducts[action.id];
      const newProduct = {
        ...products[action.index],
        answers: {
          ...products[action.index].answers,
          [action.question]: action.answer,
        },
      };

      products[action.index] = newProduct;

      return {
        ...state,
        selectedProducts: {
          ...state.selectedProducts,
          [action.id]: products,
        },
      };
    }
    case "updateTicketInfo": {
      const products = state.selectedProducts[action.id];
      const newProduct = {
        ...products[action.index],
        [action.key]: action.value,
      };

      products[action.index] = newProduct;

      return {
        ...state,
        selectedProducts: {
          ...state.selectedProducts,
          [action.id]: products,
        },
      };
    }
    case "updateInvoiceInformation":
      return {
        ...state,
        invoiceInformation: action.data,
      };
    case "updateIsBusiness":
      return {
        ...state,
        selectedProducts: {},
        invoiceInformation: {
          ...state.invoiceInformation,
          isBusiness: action.isBusiness,
        },
      };
  }
};

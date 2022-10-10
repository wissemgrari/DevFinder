export const userReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
        data: {},
        error: {},
      };
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
        error: {},
      };
    case 'FETCH_ERROR':
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

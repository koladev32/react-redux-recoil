const counterReducer = (state = 1, action: any) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      default:
        return state;
    }
  };
  export default counterReducer;
export const view = {
  view: "main",
  hidden: "cart"
};

const viewHandler = (state = view, action) => {
  switch (action.type) {
    case "CHANGE_VIEW":
      return state.view === "main"
        ? { view: "cart", hidden: "main" }
        : { view: "main", hidden: "cart" };
    default:
      return state;
  }
};

export default viewHandler;

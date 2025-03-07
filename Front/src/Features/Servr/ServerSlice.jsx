const initialServerState = {
  topEventLists: [],
  upComingEventList: [],
  questionsList: null,
};

export default function serverReducer(state = initialServerState, action) {
  switch (action.type) {
    case "server/data":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

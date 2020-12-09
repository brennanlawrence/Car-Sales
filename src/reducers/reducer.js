import state from "./initialState";
import { ADD_ITEM, REMOVE_ITEM } from "../actions/action";

const reducer = (thisState = state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // use Array.find to get the option you want to add
      const newFeature = thisState.additionalFeatures.find(
        (feature) => feature.id == action.payload
      );
      console.log(newFeature);
      // use Array.some to see if it has already been added
      const optionAlreadyAdded = thisState.car.features.some(
        (e) => e.id === newFeature.id
      );
      // if not, add it
      const newFeatureArray = thisState.car.features.concat(newFeature);
      console.log(optionAlreadyAdded);
      if (!optionAlreadyAdded) {
        // otherwise, just return state as-is
        return {
          ...thisState,
          car: {
            ...thisState.car,
            features: newFeatureArray,
          },
          additionalPrice: thisState.additionalPrice + newFeature.price,
        };
      } else {
        return thisState;
      }

    case REMOVE_ITEM:
      const filteredFeatures = thisState.car.features.filter(
        (feature) => feature.id != action.payload
      );
      return {
        ...thisState,
        car: {
          ...thisState.car,
          features: filteredFeatures,
        },
        additionalPrice: filteredFeatures.reduce(
          (additionalPrice, feature) => additionalPrice + feature.price
        , 0),
      };
    default:
      return thisState;
  }
};

export default reducer;

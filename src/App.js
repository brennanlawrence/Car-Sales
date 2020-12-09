import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import state from "./reducers/initialState";
import { addItem, removeItem } from "./actions/action";

const App = (props) => {
  const buyItem = (evt) => {
    props.addItem(evt.target.getAttribute("reference"));
  };

  const dontBuyItem = (evt) => {
    props.removeItem(evt.target.getAttribute("reference"))
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeItem={dontBuyItem} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          addItem={buyItem}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  additionalPrice: state.additionalPrice,
  car: state.car,
  additionalFeatures: state.additionalFeatures,
});

export default connect(mapStateToProps, {
  addItem,
  removeItem,
})(App);

import React from "react";
import "../App.css";
import { getCocktail } from "../actions/CocktailAction";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

import NavBar from "./NavBar";

const Cocktail = props => {
  return (
    <div className="App">
      <NavBar />
      <header className="list-header">
        <h1>RandoDrinko</h1>
        {/* {!props.cocktail && !props.isFetching && (
          <p>It's five o'clock somewhere, right?</p>
        )}
        {props.isFetching && (
          <Loader type="Puff" color="#c6b19d" height={100} width={100} />
        )}
        <button onClick={props.getCocktail}>New Cocktail</button>
        {props.cocktail && (
          <div>
            <p>Shell: {props.taco.shell.name}</p>
            <p>Base Layer: {props.taco.base_layer.name}</p>
            <p>Mixin: {props.taco.mixin.name}</p>
            <p>Seasoning: {props.taco.seasoning.name}</p>
            <p>Condiment: {props.taco.condiment.name}</p>

            <p className="cocktail_suggestion ">
              Need some grub to go with that delicious cocktail? We can generate
              a taco suggestion for you too.
            </p> */}

        <p>Feature coming soon. For now, how about another taco?</p>

        <a className="cocktail_button" href="/home">
          It's Taco Time
        </a>
        {/* </div>
        )} */}
      </header>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cocktail: state.cocktail,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getCocktail })(Cocktail);

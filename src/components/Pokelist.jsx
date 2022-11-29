import Card from "./Card";
import classes from "./Pokelist.module.css";
import React, { Component } from "react";

class Pokelist extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((p) => {
          return fetch(p.url).then((res) => res.json());
        });

        Promise.all(fetches).then((res) =>
          this.setState({ data: res, isLoading: false })
        );
      });

    // console.log(this.state.data)
  }

  render() {
    // loading ... medsaage when data is loading
    if (this.state.isLoading) {
      return <p>Loading</p>;
    }

    return (
      <div className={classes.flex}>
        <h1>pokelist</h1>
        <div className={classes.cards}>
          {this.state.data.map((card) => (
            <Card
              name={card.name}
              key={card.name}
              image={card.sprites.other.dream_world.front_default}
            />
          ))}

          {/* <Card />
              <Card />
              <Card /> */}
        </div>
      </div>
    );
  }
}

export default Pokelist;

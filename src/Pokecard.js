import React, { Component } from "react";
import "./css/Pokecard.css";
class Pokecard extends Component {
  render() {
    const name = this.props.name;
    const type = this.props.type;
    const id = this.props.id;
    const exp = this.props.base_experience;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
    return (
      <div className="Pokecard">
        <img src={` ${image}${id}.png`} alt={name} />
        <h3>{name}</h3>
        <h5>{type}</h5>
        <h5>{id}</h5>
        <h5>{exp}</h5>
      </div>
    );
  }
}

export default Pokecard;

import React, { Component } from "react";
import "./dropDown.css";
// import { Appcontext } from "../App";
const race = ["Easy", "Medium", "Hard", "Extreme"];

class Dropdown extends Component {
  // static contextType = Appcontext;
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      haveText: "Medium",
    };
  }
  componentDidUpdate() {
    this.props.setMode(this.state.haveText);
  }
  render() {
    const { isOpen, haveText } = this.state;

    return (
      <div className={isOpen ? "dropdown active" : "dropdown"} onClick={this.handleClick}>
        <div className="dropdown__text">{!haveText ? "Select Mode" : haveText}</div>
        {this.itemList(race)}
      </div>
    );
  }

  handleClick = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleText = (ev) => {
    this.setState({
      haveText: ev.currentTarget.textContent,
    });
  };

  itemList = (props) => {
    const list = props.map((item) => (
      <div onClick={this.handleText} className="dropdown__item" key={item.toString()}>
        {item}
      </div>
    ));

    return <div className="dropdown__items"> {list} </div>;
  };
}
export default Dropdown;

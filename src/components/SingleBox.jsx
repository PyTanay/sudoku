import React, { useState, useContext, useEffect, useRef } from "react";
import { AppContext } from "../App";
import "./singleBox.css";

function SingleBox(props) {
  const {
    selected,
    setSelected,
    value,
    getCol,
    getBlock,
    getBlockAddress,
    initialValue,
    path,
    setPath,
    setFwPath,
    solution,
    displayError,
    highlight,
    autoValChange,
  } = useContext(AppContext);
  const [address] = useState([props.row, props.col]);
  const [check, setCheck] = useState(displayError);
  var classList = ["singleBox"];
  const pervValueRef = useRef();
  useEffect(() => {
    pervValueRef.current = value;
  });
  useEffect(() => {
    setCheck(displayError);
  }, [displayError]);
  const prevValue = pervValueRef.current;
  useEffect(() => {
    if (prevValue !== undefined && initialValue !== undefined) {
      const currVal = value[props.row][props.col];
      const prevVal = prevValue[props.row][props.col];
      if (currVal !== prevVal && initialValue[props.row][props.col] === null && autoValChange.current === false) {
        // console.log(autoValChange.current);
        const data = { row: props.row, col: props.col, currVal, prevVal };
        const tempPath = JSON.parse(JSON.stringify(path));
        tempPath.push(data);
        setPath(tempPath);
        setFwPath([]);
        // console.log(`Address ${props.row},${props.col} changed from ${prevVal} to ${currVal}`);
        // console.log(path);
      } else if (autoValChange.current === true && props.row === 8 && props.col === 8) {
        autoValChange.current = false;
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  //this is for original data - that can not be changed
  if (initialValue.length > 0) {
    if (initialValue[address[0]][address[1]] !== null) {
      // console.log(initialValue[address[0]][address[1]],address)
      classList.push("disabledBox");
    }
  }

  //this adds class to display selected number
  if (selected.toString() === address.toString() && !classList.includes("selectedBox")) {
    classList.push("selectedBox");
  } else {
    classList = classList.filter((elem) => elem !== "selectedBox");
  }
  //this adds class to display mistakes you have made compared to solution
  if (
    check &&
    value[address[0]][address[1]] !== solution[address[0]][address[1]] &&
    value[address[0]][address[1]] !== null &&
    !classList.includes("errorBox") &&
    !classList.includes("disabledBox")
  ) {
    classList.push("errorBox");
  } else {
    classList = classList.filter((elem) => elem !== "errorBox");
  }

  //this adds class to display similar cells
  if (value[address[0]][address[1]] !== null && selected[0] !== undefined) {
    if (value[address[0]][address[1]] === value[selected[0]][selected[1]] && address.toString() !== selected.toString()) {
      classList.push("similarBox");
    } else {
      classList = classList.filter((elem) => elem !== "similarBox");
    }
  }
  //this is for validation and adds class to invalid cells
  //row test
  if (
    selected[0] !== undefined &&
    value[selected[0]][selected[1]] !== null &&
    address[0] === selected[0] &&
    address[1] !== selected[1]
  ) {
    if (
      value[address[0]].filter((x) => x === value[selected[0]][selected[1]]).length > 1 &&
      value[address[0]][address[1]] === value[selected[0]][selected[1]]
    ) {
      classList.push("dangerBox");
    } else {
      classList = classList.filter((elem) => elem !== "dangerBox");
    }
  }
  //column test
  if (
    selected[0] !== undefined &&
    value[selected[0]][selected[1]] !== null &&
    address[1] === selected[1] &&
    address[0] !== selected[0]
  ) {
    if (
      getCol(value, selected[1]).filter((x) => x === value[selected[0]][selected[1]]).length > 1 &&
      value[address[0]][address[1]] === value[selected[0]][selected[1]]
    ) {
      classList.push("dangerBox");
    } else {
      classList = classList.filter((elem) => elem !== "dangerBox");
    }
  }
  //block test
  if (
    selected[0] !== undefined &&
    value[selected[0]][selected[1]] !== null &&
    address[0] !== selected[0] &&
    getBlockAddress(address).toString() === getBlockAddress(selected).toString()
  ) {
    if (
      getBlock(value, getBlockAddress(address)).filter((x) => x === value[address[0]][address[1]]).length > 1 &&
      value[address[0]][address[1]] === value[selected[0]][selected[1]]
    ) {
      classList.push("dangerBox");
    } else {
      classList = classList.filter((elem) => elem !== "dangerBox");
    }
  }
  //highlight numbers based on the numberBox selection
  if (highlight !== null && value[address[0]][address[1]] === highlight) {
    classList.push("similarBox");
  }

  return (
    <div onClick={() => setSelected(address)} className={classList.join(" ")}>
      <div className="text1">{value[address[0]][address[1]]}</div>
    </div>
  );
}

export default SingleBox;

import React from "react";
import NumberSelector from "./NumberSelector";
import "./allNumSel.css";
import { BiEraser, BiExport, BiReset } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdPause } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import Utility from "./Utility";
import Solve from "./Solve";

function AllNumSel() {
  var arr1 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    <BiEraser tip="Delete" />,
    <AiFillStepBackward tip="Step Back" />,
    <MdPause tip="Pause" />,
    <AiFillStepForward tip="Step Forward" />,
  ];
  if (window.innerWidth <= 600) {
    arr1 = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      <AiFillStepBackward tip="Step Back" />,
      <BiEraser tip="Delete" />,
      <AiFillStepForward tip="Step Forward" />,
      <FaHome tip="Home" />,
      <BiExport tip="Export" />,
      <BiReset tip="Reset" />,
      <BsCheckCircle tip="Check" />,
      <MdPause tip="Pause" />,
    ];
  }
  return (
    <div className="allNumSel">
      {arr1.map((x, index) => (
        <NumberSelector key={index} val={x} />
      ))}
      {window.innerWidth > 620 && <Utility />}
      {window.innerWidth <= 620 && <Solve />}
    </div>
  );
}

export default AllNumSel;

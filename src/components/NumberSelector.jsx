import React, { useContext } from "react";
import { AppContext } from "../App";
import { useHistory } from "react-router-dom";
import "./numberSelector.css";
import ReactTooltip from "react-tooltip";

function NumberSelector(props) {
  const {
    value,
    setValue,
    selected,
    setHighlight,
    initialValue,
    timerControls,
    setDisplayError,
    paused,
    setPaused,
    path,
    setPath,
    fwPath,
    setFwPath,
    autoValChange,
  } = useContext(AppContext);
  const history = useHistory();
  const onclick1 = () => {
    if (selected[0] >= 0) {
      var temp = JSON.parse(JSON.stringify(value));
      // console.log(props.val.type.name)
      if (props.val >= 0 && props.val < 10) {
        temp[selected[0]][selected[1]] = props.val.toString();
      } else if (props.val.props.tip === "Delete") {
        temp[selected[0]][selected[1]] = null;
      }
      //add the methods to go back and forward here
      setValue(temp);
      setHighlight(null);
    } else {
      setHighlight(props.val.toString());
    }
    if (!(props.val >= 0 && props.val < 10)) {
      if (props.val.props.tip === "Reset") {
        if (initialValue.length > 0) {
          setValue(initialValue);
          timerControls.current.reset();
          timerControls.current.start();
        }
      } else if (props.val.props.tip === "Home") {
        history.push("/");
      } else if (props.val.props.tip === "Check") {
        setDisplayError(true);
        setTimeout(() => {
          setDisplayError(false);
        }, 2000);
      } else if (props.val.props.tip === "Pause") {
        setPaused(!paused);
      } else if (props.val.props.tip === "Step Back") {
        if (path.length !== 0) {
          var temp1 = JSON.parse(JSON.stringify(value));
          var tempPath = JSON.parse(JSON.stringify(path));
          var tempFwPath = JSON.parse(JSON.stringify(fwPath));
          var lastElem = tempPath.pop();
          tempFwPath.push(lastElem);
          temp1[lastElem.row][lastElem.col] = lastElem.prevVal;
          // console.log(tempFwPath);
          // console.log(fwPath);
          autoValChange.current = true;
          setFwPath(tempFwPath);
          setValue(temp1);
          setPath(tempPath);
          // console.log(tempPath);
          // console.log(lastElem, temp[lastElem.row][lastElem.col]);
          // console.log(temp);
        }
      } else if (props.val.props.tip === "Step Forward") {
        // console.log(fwPath);
        if (fwPath.length !== 0) {
          var temp2 = JSON.parse(JSON.stringify(value));
          var tempPath2 = JSON.parse(JSON.stringify(path));
          var tempFwPath2 = JSON.parse(JSON.stringify(fwPath));
          var lastElem2 = tempFwPath2.pop();
          temp2[lastElem2.row][lastElem2.col] = lastElem2.currVal;
          tempPath2.push(lastElem2);
          autoValChange.current = true;
          setPath(tempPath2);
          setFwPath(tempFwPath2);
          setValue(temp2);
        }
      }
    }
  };
  const dataTip = props.val >= 0 && props.val < 10 ? null : props.val.props.tip;
  return (
    <div className="numberSelector" onClick={onclick1}>
      <div className="text" data-tip={dataTip}>
        <ReactTooltip effect="solid" delayShow={500} border={true} borderColor=" rgb(56, 125, 204)" />
        {props.val}
      </div>
    </div>
  );
}

export default NumberSelector;

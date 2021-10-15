import React, { useState } from "react";
import "./Calculator.scss";
import { CalculateCurrentValue } from "./CalculatorFunctions";
import { CONFIG, SYMBOLWISEFUNC } from "./input-config";

const Calculator = () => {
  const [symbolHasClicked, setSymbolHasClicked] = useState(false);
  const [symbolHasTwoClicked, setSymbolHasTwoClicked] = useState(false);
  const [currentArray, setCurrentArray] = useState([]);
  const [currentInput, setCurentInput] = useState(0);
  const [currentCalculatedValue, setCurentCalculatedValue] = useState(0);
  const createInputZone = () => {
    return CONFIG.map((each) => {
      return <div className="input-row">{createRow(each)}</div>;
    });
  };
  const checkForTwoSymbol = () => {
    const keys = Object.keys(SYMBOLWISEFUNC);
    const lengthArr = keys.filter((each) => {
      return currentArray.includes(each);
    });
    return lengthArr.length > 0 ? true : false;
  };
  const onClickHandler = (eachOp) => {
    debugger;
    let crntInpt = currentInput;
    if (
      symbolHasClicked &&
      typeof currentArray[currentArray.length - 1] === "string" &&
      !symbolHasTwoClicked
    ) {
      crntInpt = 0;
    }
    if (symbolHasTwoClicked || (checkForTwoSymbol() && !eachOp.bold)) {
      const crnt = SYMBOLWISEFUNC[currentArray[1]](
        currentArray[0],
        Number(crntInpt)
      );
      setCurentCalculatedValue(crnt);
      setCurentInput(crnt);
      const clonedArr = [];
      clonedArr.push(crnt);
      clonedArr.push(eachOp.disp);
      setCurrentArray(clonedArr);
      setSymbolHasClicked(true);
      return;
    }
    if (eachOp.bold) {
      setCurentInput(eachOp.func(crntInpt, Number(eachOp.disp)));
      setSymbolHasClicked(false);
      setSymbolHasTwoClicked(false);
    } else {
      const clonedArr = [];
      clonedArr.push(crntInpt);
      clonedArr.push(eachOp.disp);
      if (currentArray.includes("+") || currentArray.includes("-")) {
        setSymbolHasTwoClicked(true);
      } else {
        setSymbolHasClicked(true);
      }
      setCurrentArray(clonedArr);
    }
  };
  const createRow = (eachRow) => {
    return eachRow.map((eachOp) => {
      return (
        <div
          className={eachOp.bold ? "bold" : ""}
          onClick={() => onClickHandler(eachOp)}
        >
          {eachOp["html"] ? eachOp["html"] : eachOp.disp}
        </div>
      );
    });
  };
  const createCalculationDetails = () => {
    return currentArray.map((each) => {
      return <div>{each}</div>;
    });
  };
  return (
    <div className="main-cont">
      <div className="sec-header">
        <div>Standard</div>
        <div>
          <span>&#8635;</span>
        </div>
      </div>
      <div className="calculation-zone">
        <div className="cal-details">{createCalculationDetails()}</div>
        <div className="cal-current-items">{currentInput}</div>
      </div>
      <div className="input-zone">{createInputZone()}</div>
    </div>
  );
};

export default Calculator;

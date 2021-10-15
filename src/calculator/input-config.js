import {
  Additon,
  ClearAll,
  ClearCurrentInput,
  Division,
  EqualTo,
  InputDot,
  InputNumber,
  InputSymbol,
  InputZero,
  Multiplication,
  Percentage,
  Substraction,
} from "./CalculatorFunctions";

export const CONFIG = [
  [
    {
      disp: "perc",
      bold: false,
      func: Division,
      html: <span>&#37;</span>,
    },
    {
      disp: "CE",
      bold: false,
      func: ClearCurrentInput,
      html: <span>CE</span>,
    },
    {
      disp: "C",
      bold: false,
      func: ClearAll,
      html: <span>C</span>,
    },
    {
      disp: "del",
      bold: false,
      func: Division,
      html: <span>x</span>,
    },
  ],
  [
    {
      disp: "1/x",
      bold: false,
      func: Division,
      html: (
        <span>
          <sup>i</sup><i>&#8725; </i><i>x</i>
        </span>
      ),
    },
    {
      disp: "x^2",
      bold: false,
      func: Division,
      html: (
        <span>
          <i>x</i>&#178;
        </span>
      ),
    },
    {
      disp: "root x",
      bold: false,
      func: Division,
      html: <span>√</span>,
    },
    {
      disp: "div",
      bold: false,
      func: Division,
      html: <span>&#247;</span>,
    },
  ],
  [
    {
      disp: "7",
      bold: true,
      func: InputNumber,
    },
    {
      disp: "8",
      bold: true,
      func: InputNumber,
    },
    {
      disp: "9",
      bold: true,
      func: InputNumber,
    },
    {
      disp: "x",
      bold: false,
      func: Multiplication,
      html: <span>&#215;</span>,
    },
  ],
  [
    {
      disp: "4",
      bold: true,
      func: InputNumber,
    },
    {
      disp: "5",
      bold: true,
      func: InputNumber,
    },
    {
      disp: "6",
      bold: true,
      func: InputNumber,
    },
    {
      disp: "-",
      bold: false,
      func: Substraction,
      html: <span>&#8722;</span>,
    },
  ],
  [
    {
      disp: "1",
      bold: true,
      func: InputNumber,
    },
    {
      disp: "2",
      bold: true,
      func: InputNumber,
    },
    {
      disp: "3",
      bold: true,
      func: InputNumber,
    },
    {
      disp: "+",
      bold: false,
      func: Additon,
      html: <span>&#43;</span>,
    },
  ],
  [
    {
      disp: "+/-",
      bold: true,
      func: InputSymbol,
      html: <span><sup>+</sup>/-</span>,
    },
    {
      disp: "0",
      bold: true,
      func: InputZero,
    },
    {
      disp: ".",
      bold: true,
      func: InputDot,
    },
    {
      disp: "=",
      bold: false,
      func: EqualTo,
      html: <span>&#61;</span>,
    },
  ],
];

export const SYMBOLWISEFUNC = {
  "+": Additon,
  "-": Substraction,
  "x": Multiplication,
  "perc": Percentage
};
export const SYMBOLWISEHTML = {
    "+": Additon,
    "-": Substraction,
    "x": Multiplication,
    "perc": <span>&#37;</span>
  };
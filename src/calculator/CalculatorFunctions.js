export const InputNumber = (existing, a) => {
  return Number(existing.toString() + a.toString());
};
export const InputSymbol = (existing, a) => {
  return existing;
};
export const InputZero = (existing, a) => {
  let num = "";
  if (existing.toString() === "0") {
    num = "0";
  } else {
    num = existing.toString() + a.toString();
  }
  return Number(num);
};
export const InputDot = (existing) => {
  if (!existing.toString().includes(".")) {
    return existing.toString() + ".";
  }
  return existing;
};
export const EqualTo = (a) => {
  return a;
};
export const ClearCurrentInput = () => {
  return 0;
};
export const ClearAll = () => {
  return 0;
};
export const CalculateCurrentValue = (currentCalculatedValue, currentInput) => {
  return 0;
};
export const Additon = (a, b) => {
  return a + b;
};

export const Substraction = (a, b) => {
  return a - b;
};

export const Multiplication = (a, b) => {
  return a * b;
};

export const Division = (a, b) => {
  return a / b;
};

export const Square = (a) => {
  return a * a;
};

export const DivideByX = (a) => {
  return 1 / a;
};
export const Percentage = (a) => {
  return a / 100;
};

export const Root = (a) => {
  return Math.sqrt(a);
};
export const Negate = (a) => {
  return a * -1;
};

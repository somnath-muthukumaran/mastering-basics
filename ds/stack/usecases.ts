import { StackAbstraction } from "./abstraction";
import { ArrayBasedStack } from "./array-based";
import { ObjectBasedStack } from "./object-based";

export function reverseAString(stack: StackAbstraction<string>, str: string) {
  for (const char of str) {
    stack.push(char);
  }
  let result = "";
  while (!stack.isEmpty()) {
    result += stack.pop();
  }

  return result;
}

export function postFixEval(stack: StackAbstraction<number>, str: string) {
  const inputs = str.split(" ");
  for (const el of inputs) {
    const item = Number(el);
    if (!isNaN(item)) {
      stack.push(item);
    } else {
      const pos2 = stack.pop();
      const pos1 = stack.pop();
      if (pos2 === undefined || pos1 === undefined) {
        throw new Error("Invalid postfix expression: not enough operands.");
      }

      let result: number;
      switch (el) {
        case "+":
          result = pos1 + pos2;
          break;
        case "*":
          result = pos1 * pos2;
          break;
        case "-":
          result = pos1 - pos2;
          break;
        case "/":
          result = pos1 / pos2;
          break;
        default:
          throw new Error(`unsupported operator: ${el}`);
      }
      stack.push(result);
    }
  }
  return stack.peek();
}

export function balancedParentheses(
  stack: StackAbstraction<string>,
  str: string
) {
  const inputs = str.split("");
  const brackets: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const openBrackets = Object.values(brackets);
  for (const el of inputs) {
    if (openBrackets.includes(el)) {
      stack.push(el);
    } else {
      if (stack.isEmpty()) {
        return false;
      }
      if (stack.pop() !== brackets[el]) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

export function convertInfixExpToPrefix(
  stack: StackAbstraction<string>,
  str: string
) {
  const inputs = str.split(" ");
  for (const el of inputs) {
  }
}

(function runner() {
  const arrStack = new ArrayBasedStack<string>();
  const objStack = new ObjectBasedStack<string>();
  //   const result = reverseAString(objStack, "Hello");
  //   const arrStack = new ArrayBasedStack<number>();
  //   const objStack = new ObjectBasedStack<number>();
  //   const result = postFixEval(objStack, "3 4 + 5 *");
  //   const result = balancedParentheses(arrStack, "({[]})");
  const result = convertInfixExpToPrefix(arrStack, "A + B * C");
  console.log("result-->  ", result);
})();

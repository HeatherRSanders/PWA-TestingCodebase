class InvalidStringTypeError extends Error {
  constructor() {
    super("A type of string must be passed");
  }
}

class EmptyStringError extends Error {
  constructor() {
    super("Cannot use an empty string.");
  }
}

//Functions

function reverseString(str) {
  if (typeof str !== "string") {
    throw new InvalidStringTypeError();
  }

  if (str.length === 0) {
    throw new EmptyStringError();
  }

  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new InvalidStringTypeError();
  }

  if (str.length === 0) {
    throw new EmptyStringError();
  }

  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

function capitalizeWords(str) {
  if (typeof str !== "string") {
    throw new InvalidStringTypeError();
  }

  if (str.length === 0) {
    throw new EmptyStringError();
  }

  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function countVowels(str) {
  if (typeof str !== "string") {
    throw new InvalidStringTypeError();
  }

  if (str.length === 0) {
    throw new EmptyStringError();
  }
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Tests

test(`Test for function: reverseString`, () => {
  expect(() => reverseString(true)).toThrow(InvalidStringTypeError);

  expect(() => reverseString("")).toThrow(EmptyStringError);

  expect(reverseString("Foo Bar!")).toBe("!raB ooF");
  expect(reverseString("Hello World")).toBe("dlroW olleH");

  expect(() => reverseString(-111)).toThrow(InvalidStringTypeError);
});

test(`Test for function: isPalindrome`, () => {
  expect(() => isPalindrome(true)).toThrow(InvalidStringTypeError);
  expect(() => isPalindrome("")).toThrow(EmptyStringError);

  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  expect(isPalindrome("No 'x' in Nixon")).toBe(true);
  expect(isPalindrome("Hello World")).toBe(false);
  expect(isPalindrome("-12")).toBe(false);
  expect(() => isPalindrome(-111)).toThrow(InvalidStringTypeError);
});

test(`Test for function: capitalizeWords`, () => {
  expect(() => capitalizeWords(true)).toThrow(InvalidStringTypeError);
  expect(() => capitalizeWords("")).toThrow(EmptyStringError);
  expect(capitalizeWords("hello world")).toBe("Hello World");
  expect(capitalizeWords("javaScript is fun")).toBe("JavaScript Is Fun"); // See line 89

  expect(capitalizeWords("what is the definition of insanity?")).toBe(
    "What Is The Definition Of Insanity?",
  ); //Javascripting

  expect(() => capitalizeWords(-111)).toThrow(InvalidStringTypeError);
});

test(`Test for function: countVowels`, () => {
  expect(() => countVowels(true)).toThrow(InvalidStringTypeError);
  expect(() => countVowels("")).toThrow(EmptyStringError);
  expect(countVowels("hello world")).toBe(3);
  expect(countVowels("Let this be the end")).toBe(5);
  expect(countVowels("What is the definition of insanity?")).toBe(12);
  expect(() => countVowels(-111)).toThrow(InvalidStringTypeError);

  expect(countVowels("1234123541234")).toBe(0);
});

// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2

test("tests password: 1234abcd", () => {
  expect(isStrongPassword("1234abcd")).toBe(false);
});

test("tests password: xyz", () => {
  expect(isStrongPassword("xyz")).toBe(false);
});

test("tests date: 1/1/2000", () => {
  expect(isDate("1/1/2000")).toBe(true);
});

test("tests date: 12/24/1020", () => {
  expect(isDate("12/24/1020")).toBe(true);
});

test("tests date: 812005", () => {
  expect(isDate("812005")).toBe(false);
});

test("tests date: 5/24/100", () => {
  expect(isDate("5/24/100")).toBe(false);
});

test("tests hex color: #FFFFFF", () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});

test("tests hex color: #c5acee", () => {
  expect(isHexColor("#c5acee")).toBe(true);
});

test("tests hex color: #00000", () => {
  expect(isHexColor("#00000")).toBe(false);
});

test("tests hex color: white", () => {
  expect(isHexColor("white")).toBe(false);
});

// isPhoneNumber tests
test("valid phone number 1", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test("valid phone number 2", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test("invalid phone number 1", () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test("invalid phone number 2", () => {
  expect(isPhoneNumber("(123) 456-789")).toBe(false);
});

// isEmail tests
test("invalid email 1", () => {
  expect(isEmail("")).toBe(false);
});

test("invalid email 2", () => {
  expect(isEmail("gmail.com")).toBe(false);
});

test("valid email 1", () => {
  expect(isEmail("helloworld@gmail.com")).toBe(true);
});

test("valid email 2", () => {
  expect(isEmail("username@n.us")).toBe(true);
});

// isStrongPassword tests
test("valid password 1", () => {
  expect(isStrongPassword("password123")).toBe(true);
});

test("valid password 2", () => {
  expect(isStrongPassword("Password_123")).toBe(true);
});

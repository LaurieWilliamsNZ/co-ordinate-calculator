import { cleanup, render, screen } from '@testing-library/react';
import App, { inputPairsAreValid } from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { findClosestPair } from './helpers';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

//TODO: add test to check if coOrdinates, setCordinates state exists in App.tsx
//TODO: add test to check if error, setError state exists in App.tsx

test('renders input box', () => {
  render(<App />);
  const inputBox = screen.getByRole('textbox');
  expect(inputBox).toBeInTheDocument();
});

test('renders submit button', () => {
  render(<App />);
  const submitButton = screen.getByRole('button');
  expect(submitButton).toBeInTheDocument();
});

test('input box is empty', () => {
  render(<App />);
  const inputBox = screen.getByRole('textbox');
  expect(inputBox).toHaveValue('');
});

test('should have a p tag with text containing Input:', () => {
  render(<App />);
  const pElement = screen.getByText(/Input:/i);
  expect(pElement).toBeInTheDocument();
});

test('should have a p tag with text containing Furthest:', () => {
  render(<App />);
  const pElement = screen.getByText(/Furthest:/i);
  expect(pElement).toBeInTheDocument();
});

test('should have a p tag with text containing Average Distance:', () => {
  render(<App />);
  const pElement = screen.getByText(/Average Distance:/i);
  expect(pElement).toBeInTheDocument();
});

test('inputPairsAreValid should return false if input is empty', () => {
  expect(inputPairsAreValid('')).toBe(false);
});

test('inputPairsAreValid should be true if output to 1 decimal place and distances to two decimal places.', () => {
  expect(inputPairsAreValid('1, 2')).toBe(true);
  expect(inputPairsAreValid('1.3, 0.1')).toBe(false);
  expect(inputPairsAreValid('10, 13')).toBe(true);
  expect(inputPairsAreValid('foo, bar')).toBe(false);
});

test('inputPairsAreValid should return false if input is more than one pair', () => {
  expect(inputPairsAreValid('0.0, 1.0 3.5, 8.0')).toBe(false);
});

test('findClosestPair should return the closest pair of points and the distance between them', () => {
  const points = [
    [0, 1.2],
    [3, 8],
    [4, 3],
    [10, 13],
  ];
  const expectedResult = { point1: [0, 1.2], point2: [4, 3], distance: 4.39 };

  expect(findClosestPair(points)).toEqual(expectedResult);
});

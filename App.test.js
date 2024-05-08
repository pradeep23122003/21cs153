import { render, screen } from '@testing-library/react';
import App from './App';
import AverageCalculator from './AverageCalculator';

test('renders learn react link', () => {
  render(<AverageCalculator />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

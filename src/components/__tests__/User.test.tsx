import { render, screen } from '@testing-library/react';
import User from '../User';

test('renders user name correctly', () => {
  render(<User name="Leon" tax={100} />);
  const userName = screen.getByText(/Leon/i);
  const userTax = screen.getByText(/100/i);
  expect(userName).toBeInTheDocument();
  expect(userTax).toBeInTheDocument();
});

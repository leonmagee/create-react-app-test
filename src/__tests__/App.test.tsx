import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const appTitle = screen.getByText(/Intuit Craft Demo/i);
  // const linkElement = screen.getByText(/learn react/i);
  expect(appTitle).toBeInTheDocument();
});

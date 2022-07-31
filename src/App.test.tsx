import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login H1 tag', () => {
  render(<App />);
  const h1Element = screen.getByText(/Login to continue/i);
  expect(h1Element).toBeInTheDocument();
});

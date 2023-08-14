import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Non vuoi utilizzare il tuo indirizzo/i);
  expect(linkElement).toBeInTheDocument();
});

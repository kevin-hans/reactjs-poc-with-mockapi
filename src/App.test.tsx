import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo image', () => {
  render(<App />);
  const imgElement = screen.getByAltText(/logo/i);
  expect(imgElement).toBeVisible

});
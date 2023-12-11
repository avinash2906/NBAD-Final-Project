import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; // Add this import
import HomePage from '../HomePage/HomePage';

test('renders homepage with buttons', () => {
  render(
    <Router>
      <HomePage />
    </Router>
  );

  // Check if the heading is present
  const headingElement = screen.getByText(/Please select which action you want to perform/i);
  expect(headingElement).toBeInTheDocument();
});

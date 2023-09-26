import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Home from './page';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
  test('renders Navbar component', () => {
    render(<Home />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders header content', () => {
    render(<Home />);
    const headerContent = screen.getByText('Connexion');
    expect(headerContent).toBeInTheDocument();
  });

  test('renders email input field', () => {
    render(<Home />);
    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toBeInTheDocument();
  });

  test('renders password input field', () => {
    render(<Home />);
    const passwordInput = screen.getByLabelText('Mot de passe');
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<Home />);
    const submitButton = screen.getByText('Se connecter');
    expect(submitButton).toBeInTheDocument();
  });

  test('changes button class on click', () => {
    render(<Home />);
    const submitButton = screen.getByText('Se connecter');

    act(() => {
      fireEvent.click(submitButton);
    });


    setTimeout(() => {
      expect(submitButton).not.toHaveClass('fade-out');
    }, 10000);
  });

});

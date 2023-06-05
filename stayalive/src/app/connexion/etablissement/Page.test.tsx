import '@testing-library/jest-dom/extend-expect'; 
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';

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

  test('renders input fields', () => {
    render(<Home />);
    const etablissementInput = screen.getByLabelText('Numéro d\'établissement');
    const posteInput = screen.getByLabelText('Numéro de poste');
    const passwordInput = screen.getByLabelText('Mot de passe');
    expect(etablissementInput).toBeInTheDocument();
    expect(posteInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders login button', () => {
    render(<Home />);
    const loginButton = screen.getByText('Se connecter');
    expect(loginButton).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './NavbarC';

describe('Navbar', () => {
  test('renders logo image', () => {
    render(<Navbar />);
    const logoImage = screen.getByAltText('Description de l\'image');
    expect(logoImage).toBeInTheDocument();
  });

  test('renders logo text', () => {
    render(<Navbar />);
    const logoText = screen.getByText('StayAlive');
    expect(logoText).toBeInTheDocument();
  });

  test('renders navigation buttons', () => {
    render(<Navbar />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);
  });

  test('renders login button', () => {
    render(<Navbar />);
    const loginButton = screen.getByText('Se connecter');
    expect(loginButton).toBeInTheDocument();
  });

  test('login button redirects to "/connexion" page', () => {
    render(<Navbar />);
    const loginButton = screen.getByText('Se connecter');
    expect(loginButton).toHaveAttribute('href', '/connexion');
  });
});

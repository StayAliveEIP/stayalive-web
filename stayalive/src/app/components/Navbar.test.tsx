import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Navbar from './NavbarC';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar', () => {
  test('renders logo image', () => {
    render(<Navbar isLoginPage={false} />);
    const logoImage = screen.getByAltText('Description de l\'image');
    expect(logoImage).toBeInTheDocument();
  });

  test('renders logo text', () => {
    render(<Navbar isLoginPage={false} />);
    const logoText = screen.getByText('StayAlive');
    expect(logoText).toBeInTheDocument();
  });

  test('renders navigation buttons', () => {
    render(<Navbar isLoginPage={true} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });

  test('renders login button', () => {
    render(<Navbar isLoginPage={false} />);
    const loginButton = screen.getByText('Se connecter');
    expect(loginButton).toBeInTheDocument();
  });

  test('login button redirects to "/connexion" page', () => {
    render(
      <MemoryRouter>
        <Navbar isLoginPage={false} />
      </MemoryRouter>
    );
    const loginButton = screen.getByText('Se connecter');
    const linkElement = loginButton.closest('a');
    expect(linkElement).toHaveAttribute('href', '/connexion');
  });

  test('changes button class on click', () => {
    render(<Navbar isLoginPage={false} />);
    const loginButton = screen.getByText('Se connecter');

    act(() => {
      fireEvent.click(loginButton);
    });

    expect(loginButton).toHaveClass('red-button button-transition button-clicked');

    setTimeout(() => {
      expect(loginButton).not.toHaveClass('button-clicked');
    }, 300);
  });
});



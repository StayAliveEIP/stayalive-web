import '@testing-library/jest-dom/extend-expect';
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

  test('renders "En tant que:" subheader', () => {
    render(<Home />);
    const subheader = screen.getByText('En tant que:');
    expect(subheader).toBeInTheDocument();
  });

  test('renders "Etablissement" button with correct link', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const etablissementButton = screen.getByRole('button', { name: 'Etablissement' });
    expect(etablissementButton).toBeInTheDocument();
    const linkElement = etablissementButton.closest('a');
    expect(linkElement).toHaveAttribute('href', '/connexion/etablissement');
  });

  test('renders "Sauveteur" button with correct link', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const sauveteurButton = screen.getByRole('button', { name: 'Sauveteur' });
    expect(sauveteurButton).toBeInTheDocument();
    const linkElement = sauveteurButton.closest('a');
    expect(linkElement).toHaveAttribute('href', '/connexion/sauveteur');
  });

  test('changes button class on click', () => {
    render(<Home />);
    const etablissementButton = screen.getByRole('button', { name: 'Etablissement' });

    act(() => {
      fireEvent.click(etablissementButton);
    });

    expect(etablissementButton).toHaveClass('button fade-out');

    // Wait for the animation to complete (adjust the timeout if needed)
    setTimeout(() => {
      expect(etablissementButton).not.toHaveClass('fade-out');
    }, 10000);
  });
});

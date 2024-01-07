import { render, fireEvent, screen } from '@testing-library/react';
import Home from './[your-path-to-file]'; // Remplacer par le chemin d'accès approprié au fichier

jest.mock('isomorphic-fetch'); 

describe('Home Page', () => {

  beforeEach(() => {
    render(<Home />);
  });

  test('should render the Navbar', () => {
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  test('should render the email and password inputs', () => {
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Mot de passe/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('should update the state when input values change', () => {
    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    expect(emailInput.value).toBe('test@email.com');

    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput.value).toBe('password123');
  });

  test('should call handleSubmit function when Se connecter button is clicked', () => {
    const loginButton = screen.getByText(/Se connecter/i);
    fireEvent.click(loginButton);

    // Ici, vous pouvez également utiliser un mock pour vérifier si la fonction fetch a été appelée.
  });

  test('should render social media buttons', () => {
    const facebookButton = screen.getByAltText(/F Logo/i);
    const googleButton = screen.getByAltText(/G Logo/i);
    const appleButton = screen.getByAltText(/A Logo/i);

    expect(facebookButton).toBeInTheDocument();
    expect(googleButton).toBeInTheDocument();
    expect(appleButton).toBeInTheDocument();
  });

  test('should render return button with Retour text', () => {
    const returnButton = screen.getByText(/Retour/i);
    expect(returnButton).toBeInTheDocument();
  });

});

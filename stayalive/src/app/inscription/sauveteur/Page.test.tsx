import { render, fireEvent, screen } from '@testing-library/react';
import Home from './page'; // Remplacer par le chemin d'accès approprié au fichier

jest.mock('isomorphic-fetch'); 

describe('SignUp Page', () => {

  beforeEach(() => {
    render(<Home />);
  });

  test('should render the Navbar', () => {
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  test('should render the inputs for account creation', () => {
    const emailInput = screen.getByLabelText(/Email/i);
    const lastnameInput = screen.getByLabelText(/Nom/i);
    const firstnameInput = screen.getByLabelText(/Prénom/i);
    const phoneInput = screen.getByLabelText(/Téléphone/i);
    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    const confirmPassInput = screen.getByLabelText(/Confirmation Mot de passe/i);

    expect(emailInput).toBeInTheDocument();
    expect(lastnameInput).toBeInTheDocument();
    expect(firstnameInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPassInput).toBeInTheDocument();
  });

  test('should toggle CGU checkbox on click', () => {
    const cguCheckbox = screen.getByLabelText(/J'accepte les CGU/i);
    fireEvent.click(cguCheckbox);
    expect(cguCheckbox.checked).toBe(true);
  });

  test('should call handleSignupButtonClick function when S’inscrire button is clicked', () => {
    const signupButton = screen.getByText(/S’inscrire/i);
    fireEvent.click(signupButton);

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

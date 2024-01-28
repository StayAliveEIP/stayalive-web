import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Home from './page'; // Remplacer par le chemin d'accès approprié
import fetchMock from 'jest-fetch-mock';


fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
  render(<Home />);
});

describe('SignUp Page', () => {
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

    expect(emailInput).toBeInTheDocument();
    expect(lastnameInput).toBeInTheDocument();
    expect(firstnameInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('updates form fields on user input', () => {
    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    expect(emailInput.value).toBe('test@test.com');

    // Répétez pour les autres champs de saisie...
  });

  test('updates form fields on user input', () => {
    const lastnameInput = screen.getByLabelText(/Email/i);
    fireEvent.change(lastnameInput, { target: { value: 'Matthieu' } });
    expect(lastnameInput.value).toBe('Matthieu');

    // Répétez pour les autres champs de saisie...
  });

  test('updates form fields on user input', () => {
    const firstnameInput = screen.getByLabelText(/Email/i);
    fireEvent.change(firstnameInput, { target: { value: 'Queru' } });
    expect(firstnameInput.value).toBe('Queru');

    // Répétez pour les autres champs de saisie...
  });

  test('updates form fields on user input', () => {
    const phoneInput = screen.getByLabelText(/Email/i);
    fireEvent.change(phoneInput, { target: { value: '0606060606' } });
    expect(phoneInput.value).toBe('0606060606');

    // Répétez pour les autres champs de saisie...
  });

  test('updates form fields on user input', () => {
    const passwordInput = screen.getByLabelText(/Email/i);
    fireEvent.change(passwordInput, { target: { value: '0606060606' } });
    expect(passwordInput.value).toBe('0606060606');

    // Répétez pour les autres champs de saisie...
  });

  test('should toggle CGU checkbox on click', () => {
    const cguCheckbox = screen.getByLabelText(/J'accepte les CGU/i);
    fireEvent.click(cguCheckbox);
    expect(cguCheckbox.checked).toBe(true);
  });

  test('should handle sign up submission with valid data', async () => {
    // Mocking fetch response
    fetchMock.mockResponseOnce(JSON.stringify({ message: 'Inscription réussie !' }));

    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const signupButton = screen.getByText(/S’inscrire/i);
    fireEvent.click(signupButton);

    // Here you can add assertions to check if certain actions were taken after successful submission
  });

  test('should handle sign up submission with invalid data', async () => {
    // Mocking fetch response for failure
    fetchMock.mockResponseOnce(JSON.stringify({ message: 'Erreur lors de la connexion' }), { status: 400 });

    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });

    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    fireEvent.change(passwordInput, { target: { value: 'pass' } });

    const signupButton = screen.getByText(/S’inscrire/i);
    fireEvent.click(signupButton);

    // Here you can add assertions to check if error handling is done correctly
  });

  // Additional tests...
});
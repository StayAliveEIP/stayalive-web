import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders input fields', () => {
    render(<Home />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Mot de passe');
    const confirmPasswordInput = screen.getByLabelText('Confirmation Mot de passe');
    const submitButton = screen.getByRole('button', { name: /S'inscrire/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('changes CGU checkbox status on click', () => {
    render(<Home />);
    const cguCheckbox = screen.getByLabelText(/J'accepte les CGU/i);

    fireEvent.click(cguCheckbox);

    expect(cguCheckbox).toBeChecked();

    fireEvent.click(cguCheckbox);

    expect(cguCheckbox).not.toBeChecked();
  });

  it('submits the form when CGU is checked', () => {
    render(<Home />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Mot de passe');
    const confirmPasswordInput = screen.getByLabelText('Confirmation Mot de passe');
    const submitButton = screen.getByRole('button', { name: /S'inscrire/i });

    // fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    // fireEvent.change(passwordInput, { target: { value: 'password123' } });
    // fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

    const cguCheckbox = screen.getByLabelText(/J'accepte les CGU/i);
    // fireEvent.click(cguCheckbox);

    // fireEvent.click(submitButton);

  });
});

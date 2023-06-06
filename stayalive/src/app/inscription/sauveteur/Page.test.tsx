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
});

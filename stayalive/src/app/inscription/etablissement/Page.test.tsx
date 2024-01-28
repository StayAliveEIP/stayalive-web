import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
    test('renders header content', () => {
      render(<Home />);
      const headerContent = screen.getByText('Création de Compte');
      expect(headerContent).toBeInTheDocument();
    });
  
    test('renders input fields', () => {
      render(<Home />);
      const siretInput = screen.getByLabelText('Numéro de Siret');
      const telephoneInput = screen.getByLabelText('Numéro Téléphone');
      const emailInput = screen.getByLabelText('Email');
      expect(siretInput).toBeInTheDocument();
      expect(telephoneInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
    });
  
    test('renders submit button', () => {
      render(<Home />);
      const submitButton = screen.getByText('Faire la demande');
      expect(submitButton).toBeInTheDocument();
    });
  });
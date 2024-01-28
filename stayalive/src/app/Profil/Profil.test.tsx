import { render, screen } from '@testing-library/react';
import Profil from './page';

describe('Profil Component', () => {

  beforeEach(() => {
    render(<Profil />);
  });

  test('should render the NavbarD component', () => {
    expect(screen.getByText(/Nom Prénom/i)).toBeInTheDocument();
  });

  test('should render photo section with a change photo button', () => {
    const button = screen.getByText(/Changer la photo/i);
    expect(button).toBeInTheDocument();
  });

  test('should display user email and phone', () => {
    expect(screen.getByText(/utilisateur@email.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\+33 1 23 45 67 89/i)).toBeInTheDocument();
  });

  test('should display tables with correct titles', () => {
    expect(screen.getByText(/Historique de vos Sauvetages/i)).toBeInTheDocument();
    expect(screen.getByText(/Historique de vos Signalements/i)).toBeInTheDocument();
  });

  test('should render correct number of rows for sauvegardes', () => {
    const rows = screen.getAllByText(/Rue de Sauvetage/i);
    expect(rows).toHaveLength(2);
  });

  test('should render correct number of rows for signalements', () => {
    const rows = screen.getAllByText(/Rue de Signalement/i);
    expect(rows).toHaveLength(2);
  });
});
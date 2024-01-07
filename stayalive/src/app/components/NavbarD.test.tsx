import { render, fireEvent, screen } from '@testing-library/react';
import NavbarD from './NavBarD';

describe('NavbarD Component', () => {

  beforeEach(() => {
    render(<NavbarD isLoginPage={false} />);
  });

  test('should render the StayAlive logo text', () => {
    const logoText = screen.getByText(/StayAlive/i);
    expect(logoText).toBeInTheDocument();
  });

  test('should render Acceuil and Dashboard buttons', () => {
    const homeButton = screen.getByText(/Acceuil/i);
    const dashboardButton = screen.getByText(/Dashboard/i);

    expect(homeButton).toBeInTheDocument();
    expect(dashboardButton).toBeInTheDocument();
  });

  test('should render Mon Profil button', () => {
    const profileButton = screen.getByText(/Mon Profil/i);
    expect(profileButton).toBeInTheDocument();
  });

  test('should change button class on click', () => {
    const profileButton = screen.getByText(/Mon Profil/i);
    fireEvent.click(profileButton);

    expect(profileButton.className).toContain('button-clicked');
  });

});


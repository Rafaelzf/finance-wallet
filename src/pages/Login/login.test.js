import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './index';

describe('<Login />', () => {
  it('Should render component Login', () => {
    render(<Login />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByRole('textbox', { type: 'password' });
    const disablebutton = screen.getByRole('button', { name: 'Entrar' });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(disablebutton).toBeInTheDocument();
  });

  it('Shoud be allow button', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');

    fireEvent.change(emailInput, { target: { value: 'user.biga@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });

    await waitFor(() => {
      const navLink = getByTestId('go-to-page');
      expect(navLink).toBeInTheDocument();
    });
  });
});

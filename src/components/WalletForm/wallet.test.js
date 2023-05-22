import { render, screen } from '@testing-library/react';

import WalletForm from './index';

describe('<WalletForm />', () => {
  it('Should render component WalletForm', () => {
    render(<WalletForm />);
    const WalletFormComponent = screen.getByTestId('component-walletForm');

    expect(WalletFormComponent).toBeInTheDocument();
  });
});

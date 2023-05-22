import { render, screen } from '@testing-library/react';

import Wallet from './index';

describe('<Wallet />', () => {
  it('Should render component Header and Table', () => {
    render(<Wallet />);
    const headerComponent = screen.getByTestId('component-header');
    const tableComponent = screen.getByTestId('component-table');

    expect(headerComponent).toBeInTheDocument();
    expect(tableComponent).toBeInTheDocument();
  });
});

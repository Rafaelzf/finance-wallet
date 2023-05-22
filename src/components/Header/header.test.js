import { render, screen } from '@testing-library/react';

import Header from './index';

describe('<Header />', () => {
  it('Should render component Header', () => {
    render(<Header />);
    const headerComponent = screen.getByTestId('component-header');

    expect(headerComponent).toBeInTheDocument();
  });
});

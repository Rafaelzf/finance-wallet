import { render, screen } from '@testing-library/react';

import Table from './index';

describe('<Table />', () => {
  it('Should render component Table', () => {
    render(<Table />);
    const TableComponent = screen.getByTestId('component-table');

    expect(TableComponent).toBeInTheDocument();
  });
});

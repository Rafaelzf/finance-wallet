import React, { Component } from 'react';
import './styles.css';
import Logo from '../../img/icons/logo.png';

import ChooseExpense from '../ChooseExpense';

class Header extends Component {
  render() {
    return (
      <div className="container" data-testid="component-header">
        <header>
          <ul className="flex-content">
            <li>
              <img src={ Logo } alt="Trybe wallet" className="logo" />
            </li>
            <li className="totalExpenses">
              Total de despesas:
              <span className="value">320.98 BRL</span>
            </li>
            <li className="perfil">email@emai.com</li>
          </ul>
        </header>
        <ChooseExpense />
      </div>
    );
  }
}

export default Header;

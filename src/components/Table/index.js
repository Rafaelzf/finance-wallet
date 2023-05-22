import React from 'react';
import './styles.css';
import Edit from '../../img/icons/editar.svg';
import Remove from '../../img/icons/excluir.svg';

function Table() {
  return (
    <div data-testid="component-table">
      <ul className="table thead">
        <li className="cell">Descrição</li>
        <li className="cell">Tag</li>
        <li className="cell">Método de pagamento</li>
        <li className="cell">Valor</li>
        <li className="cell">Moeda</li>
        <li className="cell">Câmbio utilizado</li>
        <li className="cell">Valor convertido</li>
        <li className="cell">Moeda de conversão</li>
        <li className="cell">Editar/Excluir</li>
      </ul>
      <ul className="table tbody">
        <li className="cell">Célula 1</li>
        <li className="cell">Célula 1</li>
        <li className="cell">Célula 1</li>
        <li className="cell">Célula 1</li>
        <li className="cell">Célula 1</li>
        <li className="cell">Célula 1</li>
        <li className="cell">Célula 1</li>
        <li className="cell">Célula 1</li>
        <li className="cell">
          <button type="button">
            <img src={ Edit } alt="Editar" />
          </button>
          <button type="button">
            <img src={ Remove } alt="Excluir" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Table;

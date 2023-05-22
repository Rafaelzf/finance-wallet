import React from 'react';
import './styles.css';

function ChooseExpense() {
  return (
    <form className="container-ChooseExpense">
      <ul>
        <li>
          <span>Descrição da despesa</span>
          <input type="text" name="expenseName" />
        </li>
        <li>
          <span>Categoria da despesa</span>
          <select name="select">
            <option value="valor1">Valor 1</option>
            <option value="valor2" selected>
              Valor 2
            </option>
            <option value="valor3">Valor 3</option>
          </select>
        </li>
        <li>
          <span>Valor</span>
          <input type="number" />
        </li>
        <li>
          <span>Método de pagamento</span>
          <select name="select">
            <option value="valor1">Valor 1</option>
            <option value="valor2" selected>
              Valor 2
            </option>
            <option value="valor3">Valor 3</option>
          </select>
        </li>
        <li>
          <span>Moeda</span>
          <select name="select">
            <option value="valor1">Valor 1</option>
            <option value="valor2" selected>
              Valor 2
            </option>
            <option value="valor3">Valor 3</option>
          </select>
        </li>
      </ul>
      <footer>
        <button className="add-expenses" type="button">
          Adicionar despesa
        </button>
      </footer>
    </form>
  );
}

export default ChooseExpense;

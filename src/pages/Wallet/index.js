import React from 'react';
import './styles.css';

import { Header, Table } from '../../components';

function Wallet() {
  return (
    <>
      <div className="WalletContainer">
        <Header />
      </div>
      <div className="TableContainer">
        <Table />
      </div>
    </>
  );
}

export default Wallet;

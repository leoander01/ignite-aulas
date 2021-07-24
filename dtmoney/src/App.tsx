import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from '../src/components/Header';
import { Dashboard } from '../src/components/Dashboard';

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root');

export function App() {
    //como o modal será inciado
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
    }
  
    function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
    }
  

  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </div>
  );
}

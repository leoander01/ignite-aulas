import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from '../src/components/Header';
import { Dashboard } from '../src/components/Dashboard';
import { NewTransactionModal } from '../src/components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root');

export function App() {
    //como o modal será iniciado
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    //abrir modal
    function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
    }
  
    //fechar modal
    function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
    }
  

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

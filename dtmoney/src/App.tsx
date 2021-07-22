import { Header } from '../src/components/Header';
import { Dashboard } from '../src/components/Dashboard';

import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />

      <GlobalStyle />
    </div>
  );
}

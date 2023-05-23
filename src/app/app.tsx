import { ZustandApp } from '../zustand-app';
import { withProviders } from './providers';

import './styles/index.scss';

function App() {
  return <ZustandApp />;
}

export default withProviders(App);

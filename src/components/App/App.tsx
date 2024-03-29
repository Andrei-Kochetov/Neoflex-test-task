import '../../styles/index.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="app container">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;

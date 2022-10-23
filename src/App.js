import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout';
import CarsList from './pages/CarsList';

function App() {
  return (
    <div>
      <Layout >
        <Routes>
          <Route path="/" element={<CarsList />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

import './App.css';

import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';

import { initialContextState } from './app/actions/questionActions';
import Layout from './app/layout/Layout';
import Home from './app/pages/home';
import { AppContext } from './app/providers/contextProvider';
import { questionReducer } from './app/reducers/questionReducer/questionsReducer';

const App = () => {
  const [contextValue, setContextValue] = useReducer(
    questionReducer,
    initialContextState
  );
  return (
    <AppContext.Provider value={{ contextValue, setContextValue }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;

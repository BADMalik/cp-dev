import './App.css';

import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';

import { initialContextState } from './app/actions/questionActions';
import Layout from './app/layout/Layout';
import Home from './app/pages/home';
import TestScreen from './app/pages/testScreen';
import PrivateRoutes from './app/protectedRoutes';
import { AppContext } from './app/providers/contextProvider';
import { questionReducer } from './app/reducers/questionReducer/questionsReducer';

const App = () => {
  const [contextValue, setContextValue] = useReducer(
    questionReducer,
    initialContextState
  );
  // const configs = useMemo(getRouteConfigs, []);
  // return generateRoutesFromConfig(configs);
  return (
    <AppContext.Provider value={{ contextValue, setContextValue }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/test-screen" element={<TestScreen />} />
          </Route>
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;

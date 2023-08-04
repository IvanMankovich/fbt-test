import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from './components/Layout/Layout';
import { Modal } from './components/Modal/Modal';
import { DispatchContext } from './context/context';
import { UsersSearch } from './modules/UsersSearch';
import { requestsService } from './services/Requests.service';

import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    requestsService.getData(dispatch);
  }, [dispatch]);

  return (
    <div className='App'>
      <DispatchContext.Provider value={dispatch}>
        <Layout>
          <UsersSearch />
        </Layout>
        <Modal />
      </DispatchContext.Provider>
    </div>
  );
}

export default App;

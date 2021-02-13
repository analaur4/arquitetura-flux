import { Provider } from 'react-redux';

import store from './store';

// import Students from './views/pages/Students';
import ChuckNorris from './views/pages/ChuckNorris';

function App() {
  return (
    <Provider store={ store }>
      {/* <Students /> */}
      <ChuckNorris />
    </Provider>
  );
}

export default App;

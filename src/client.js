import React      from 'react';
import ReactDOM   from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

const component = (
<Provider store={store}>	
	<Router>
      {routes}
    </Router>
</Provider>   
)

ReactDOM.render(component, document.getElementById('react-view'));
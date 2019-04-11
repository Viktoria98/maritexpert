import React, { Component } from 'react';

import StateCounter from './StateCounter';
import ReduxCounter from './ReduxCounter';

class CharacterPage extends Component {
  render() {
    return (
    	<div>
	    	<h3>State Counter</h3>
	    	<StateCounter />
	    	<h3>Redux Counter</h3>
			<ReduxCounter />
	    </div>
    )
  }
}

export default CharacterPage;
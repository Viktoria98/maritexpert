import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from 'components/App';
import LoginPage from 'components/LoginPage';
import CharactersPage from 'components/CharactersPage';
import StartPage from 'components/StartPage';

export default (
	<div>
        <App />
        <Route path="/" exact component={StartPage} />
        <Route path="/login/" component={LoginPage} />
        <Route path="/characters/" component={CharactersPage} />
    </div>
);
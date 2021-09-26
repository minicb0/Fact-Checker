import React from 'react';
import {Route, useHistory} from 'react-router-dom';

export const PrivateRoute = ({component, path, ...options}) => {
	const history = useHistory();
	const user = localStorage.getItem('apiToken');

	if (!user) {
		history.push('/login');
	} else {
		return <Route {...options} component={component} />;
	}
	return null;
};
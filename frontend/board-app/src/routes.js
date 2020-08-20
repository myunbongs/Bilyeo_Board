import React from 'react';
import { Route } from 'react-router-dom';
import BoardList from './containers/BoardListView';
import BoardDetail from './containers/BoardDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={BoardList} />
        <Route exact path='/:boardID' component={BoardDetail} />
    </div>
);

export default BaseRouter;
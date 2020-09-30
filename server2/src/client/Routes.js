import React from 'react';
// import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage'

// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/users" component={UsersList} />
//         </div>
//     )
// }

export default [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersListPage
    }
];
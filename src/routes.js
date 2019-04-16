import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
var routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage></HomePage>
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage></ProductListPage>
    },
    {
        path: '/product/add',
        exact: false,
        main: () => <ProductActionPage></ProductActionPage>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match}) => <ProductActionPage match={match}></ProductActionPage>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage></NotFoundPage>
    }
];
export default routes;
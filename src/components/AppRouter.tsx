import React from 'react';
import {Routes, Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    const auth = true;
    console.log(publicRoutes)
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    path={route.path}
                    element={route.element}
                    key={route.path}
                     />
            )}
        </Routes>
    );
};

export default AppRouter;
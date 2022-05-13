import React from "react";
import Login from "../pages/login";
import Event from "../pages/Event";

export interface IRouter {
    path: string;
    element?: React.ReactNode;
    exact?: boolean;
}

export enum RouterNames {
    LOGIN = "/login",
    EVENT = "/",
}

export const publicRoutes: IRouter[] = [
    {
        path: "/login",
        element: Login,
        exact: true

    }
];

export const privateRoutes: IRouter[] = [
    {
        path: RouterNames.EVENT,
        element: Event,
        exact: true
    }
];
import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    isAllowed: boolean;
    children?: React.ReactNode;
    redirectTo?: string;
}

export const ProtectedRoute = ({
    isAllowed,
    children,
    redirectTo = "/login",
}: Props) => {
    if (isAllowed)
        return children ? children : <Outlet />;
    return <Navigate to={redirectTo} />;
};

import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    isAllowed: boolean;
    children?: React.ReactElement;
    redirectTo?: string;
}

function ProtectedRoute ({
    isAllowed,
    children,
    redirectTo = "/login",
}: Props) {
    if (isAllowed)
        return children ? children : <Outlet />;
    return <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
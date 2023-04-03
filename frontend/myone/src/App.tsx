import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navigation from "./components/Navegation";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { useAuthStore } from "./store/auth";
import { Container } from "./components/Container";


const queryClient = new QueryClient();

function App() {

  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Home />} />
            <Route element={<ProtectedRoute isAllowed={isAuth}  />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

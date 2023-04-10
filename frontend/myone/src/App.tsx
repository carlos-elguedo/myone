import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Enter from "./components/Enter";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoutes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { useAuthStore } from "./store/auth";
import { Container } from "./components/Container";


const queryClient = new QueryClient();

function App() {

  const isAuth = useAuthStore((state) => state.isAuth);
  console.log("🚀 ~ file: App.tsx:19 ~ App ~ isAuth:", isAuth)

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/login" element={<Enter />} />
            <Route element={<ProtectedRoute isAllowed={isAuth} />}>
              <Route path="/" element={<Home />} />
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

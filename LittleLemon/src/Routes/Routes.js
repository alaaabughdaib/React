import "../App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Loading from "../pages/Loading/Loading";
import SharedPage from '../pages/SharedPage/SharedPage'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Menu from '../pages/Menu/Menu'
import Reserve from '../pages/Booking/Booking'
import Error from '../pages/ErrorNotFound/Error'

 function AppRoutes() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loading />}>
                <SharedPage />
              </React.Suspense>
            }
          >
           
            <Route
              index
              element={
                <React.Suspense fallback={<Loading />}>
                  <Home />
                </React.Suspense>
              }
            />
            <Route
              path="about"
              element={
                <React.Suspense fallback={<Loading />}>
                  <About />
                </React.Suspense>
              }
            />
            <Route
              path="menu"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Menu />
                </React.Suspense>
              }
            />
            <Route
              path="booking"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Reserve />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Error />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}
export default AppRoutes;
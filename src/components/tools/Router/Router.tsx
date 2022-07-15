import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Paths } from "consts/router";
import { routes } from "routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>...Loading</>}>
        <Routes>
          <Route path={Paths.HOME} element={<routes.Home />} />
          <Route path={Paths.VOTING()} element={<routes.Voting />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

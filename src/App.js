import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, Fragment, useEffect } from "react";
import { Routing } from "./Routes";
import PageLoading from "./Component/PageLoading";
function App() {
  return (
    <>
      <BrowserRouter>
        <RenderRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
const RenderRoutes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        {Routing &&
          Routing.map((values, i) => {
            const Component = values?.element;
            const Layout = values.layout || Fragment;

            return (
              <Fragment key={i}>
                <Route
                  path={values?.path}
                  element={
                    <Layout>
                      <Component />
                    </Layout>
                  }
                />
              </Fragment>
            );
          })}
      </Routes>
    </Suspense>
  );
};

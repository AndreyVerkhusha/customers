import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routes } from "@/routes";
import Layout from "@/components/Layout/Layout";

function App() {

    return (
        <div className="app">
            <AnimatePresence>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        {routes.map((Page) =>
                            <Route
                                path={Page.path}
                                element={<Page.Component/>}
                                key={Page.path}
                            />
                        )}
                    </Route>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;

import { Route, Router } from "react-router-dom";
import Home from "../pages/Home";

const routes = () => {
    <>
        <Router>
            <Route path="/" element={<Home />}>
            </Route>
        </Router>

    </>
}

export default routes
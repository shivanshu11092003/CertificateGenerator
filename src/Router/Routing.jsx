import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import AllFiles from "../Components/AllFiles";
import Deleted from "../Components/Deleted";
import Recent from "../Components/Recent";
import Starred from "../Components/Starred";
import Dashboard from "../Screen/Dashboard";
import Downloads from "../Screen/Downloads";
import Login from "../Screen/Login";
import Root from "../Screen/Root";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>

        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="downloads" element={<Downloads />}>
            <Route path="recent" element={<Recent />} />
            <Route path="starred" element={<Starred />} />
            <Route path="allfiles" element={<AllFiles />} />
            <Route path="deleted" element={<Deleted />} />
        </Route>


    </Route>


), {
    future: {
        v7_relativeSplatPath: true,
        v7_normalizeFormMethod: true,
        v7_fetcherPersist: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,

    },
});

export default router;
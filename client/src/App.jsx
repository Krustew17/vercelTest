import { Routes, Route } from "react-router-dom";
import paths from "./config/paths.js";

function App() {
    return (
        <Routes>
            <Route
                path={paths.home}
                element={<h1>GOOD JOB BUDDY {import.meta.env.VITE_TEST}</h1>}
            />
        </Routes>
    );
}

export default App;

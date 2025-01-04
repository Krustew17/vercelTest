import { Routes, Route } from "react-router-dom";
import paths from "./config/paths.js";

function App() {
    return (
        <Routes>
            <Route path={paths.home} element={<h1>it works looool</h1>} />
        </Routes>
    );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";

const App = () => {
    return (
        <Routes>
            {/* ルート定義 */}
            <Route path="/" element={<Start />} />
        </Routes>
    );
};

export default App;

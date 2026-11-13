import { Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Start from "./pages/Start";
import Tutorial from "./pages/Tutorial";

const App = () => {
    return (
        <Routes>
            {/* ルート定義 */}
            <Route path="/" element={<Start />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/game" element={<Game />} />
        </Routes>
    );
};

export default App;

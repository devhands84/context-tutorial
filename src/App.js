import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./context/color";
import SelectColors from "./components/SelectColor";
const App = () => {
    return (
        <ColorProvider>
            <div>
                <SelectColors />
                <ColorBox />
            </div>
        </ColorProvider>
    );
};

export default App;

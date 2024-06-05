import { Content } from "./components/Content/Content";
import { HeaderTitle } from "./components/Header/HeaderTitle";

function App() {
    return (
        <>
            <Content>
                <HeaderTitle />
                <h1 className="font-bold text-3xl text-blue-dark">
                    Hello, World
                </h1>
            </Content>
        </>
    );
}

export default App;

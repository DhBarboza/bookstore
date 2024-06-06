import backgroundImageHeader from "../../assets/images/background-header.png";
import { Content } from "../Content/Content";
import { HeaderTitle } from "./HeaderTitle";

export function Header() {
    return (
        <header
            style={{ backgroundImage: `url(${backgroundImageHeader})` }}
            className="w-auto"
        >
            <Content>
                <HeaderTitle />
                <div className="mt-24">
                    <p className="text-7xl font-bold text-blue-dark">
                        Find books <br />
                        that suit you!
                    </p>
                    <p className="text-gray-500 my-6 text-xl">Lorem Ipsum</p>
                </div>
                <button className="bg-blue-light px-5 py-2 rounded-lg shadow text-white font-medium">
                    Search books
                </button>
            </Content>
        </header>
    );
}

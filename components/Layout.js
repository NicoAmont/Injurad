import Footer from "./Footer";
import Header from "./header/Header";

export default function Layout ( { children }) {
    return (
        <div clasName="content" >
            <Header />
            {children }
            <Footer />
        </div>
    )
}

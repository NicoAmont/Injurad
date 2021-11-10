import Footer from "./Footer";
import Header from "./header/Header";

export default function Layout ( { children }) {
    return (
        <div className="overflow-hidden bg-bd" >
            <Header />
            {children }
            <Footer />
        </div>
    )
}
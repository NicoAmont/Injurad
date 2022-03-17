import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout ( { children }) {
    return (
        <div className="overflow-hidden bg-bgr" >

            <Header />
            {children }
            <Footer />

        </div>
    )
}

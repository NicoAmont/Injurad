import Header from "./header/Header";

export default function Layout ( { children }) {
    return (
        <div className="overflow-hidden " >

            <Header />
            {children }

        </div>
    )
}

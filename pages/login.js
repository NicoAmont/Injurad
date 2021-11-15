import Leftside from "../components/Login/Leftside";
import Rightside from "../components/Login/Rightside";

export default function login() {
    return (
        <div>
            <main className="bg-bl overflow-hidden grid xl:grid-cols-5 grid-cols-1 h-full pt-12 relative z-30">

                <Leftside  />
                <Rightside  />

            </main>
        </div>
    )
}

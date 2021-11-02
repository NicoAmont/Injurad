import Notifications from "./Notifications";
import Post from "./Post";
import styles from "../styles/Home.module.css"

export default function Feed() {
    return (
        <div className="bg-bgr w-full p-1 md:p-1 ">
            <div className="md:grid grid-cols-1 md:grid-cols-3 mt-20">
                <Post />
                <Notifications />
            </div>
        </div>
    )
}

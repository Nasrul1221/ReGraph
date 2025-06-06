import { Outlet } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";

export default function SharedLayout() {
    return (
        <>
            <div className="fixed right-0 left-0">
                <Header />
                <Aside />
            </div>
        
            <section>
                <Outlet />
            </section>
        </>
    )
}
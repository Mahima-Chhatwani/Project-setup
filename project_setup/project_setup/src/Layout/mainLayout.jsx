import { Outlet } from "react-router-dom"
import NavBar from "@/Pages/NavBar"
import Footer from "@/Pages/Footer"

const MainLayout = ()=>{
    return(
        <>
        <section >
            <div>
            Navbar
            </div>
            <Outlet/>
            <div>
            
            </div>
        </section>
        </>
    )
}

export default MainLayout
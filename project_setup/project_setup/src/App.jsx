import { Button } from "@/components/ui/button";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import NavBar from "./Pages/NavBar";
import NotFound from "./Errors/NotFound";
import Pages from "./Pages/Pages";
import Bookings from "./Pages/Bookings";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";

function App() {
  return (
    <>
      {/* <NavBar/> */}
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users/list?" element={<Users />} />
          <Route path="/users/:id/:name?" element={<UserDetails />} />

          <Route path="IN">
            <Route path="/IN/user">
              <Route path="/IN/user/listing" element={<Listing />} />
              <Route path="/IN/user/login" element={<Login />} />
            </Route>
          </Route>
        </Route>

        <Route path="/pages" element={<Pages />}>
          <Route index element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bookings" element={<Bookings />} />
        </Route>

        {/* <Route path="/*" element={<Navigate to="/"/>}/> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

// <Route path="/*" element = {<h1>404 Page Not Found</h1>}/> should be mentioned at las because if any page doesnt exist it will reflect a error message and /* is for that only
// There is one more method if any particular page is not there it can direct to any existing page by <Route path="/*" element={<Navigate to="/"/>}/>

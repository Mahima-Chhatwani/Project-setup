// import { Button } from "@/components/ui/button";
import Home from "./Pages/Home";
// import Listing from "./Pages/Listing";
import { Navigate,Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import NavBar from "./Pages/NavBar";
import NotFound from "./Errors/NotFound";
// import Pages from "./Pages/Pages";
import Bookings from "./Pages/Bookings";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";
import Register from "./Pages/Register";
// import Dashboard from "./Pages/Dashboard";
// import Blog from "./Pages/Blog";
import UserDashboard from "./Pages/UserDashboard";
import AdminDashboard from "./Pages/AdminDashboard"
import ListingGrid from "./Pages/ListingGrid";
import ListingDetails from "./Pages/ListingDetails";
import BlogGrid from "./Pages/BlogGrid";
import BlogDetails from "./Pages/BlogDetails";
import Footer from "./Pages/Footer";
import MainLayout from "./Layout/mainLayout";
import FAQ from "./Pages/FAQ";
import RefundPolicy from "./Pages/RefundPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";

function App() {
  return (
    <>
      {/* <NavBar/> */}
      
      
      <Routes>
        <Route path="/test" element={<MainLayout/>}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          {/* <Route path="/footer" element={<Footer/>}/> */}
          {/* <Route path="/listing" element={<Listing />} /> */}
          {/* <Route path="/blog" element= {<Blog/>}/> */}
          {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/list?" element={<Users />} />
          <Route path="/users/:id/:name?" element={<UserDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/faq" element={< FAQ />}/>
          <Route path="/refundpolicy" element={< RefundPolicy />} />
          <Route path="/privacypolicy" element={< PrivacyPolicy/>} />
          <Route path="/termsconditions" element={< TermsConditions/>}/>
          
          {/* Dashboard Dropdown */}
          <Route path="userdashboard" element={<UserDashboard/>}/>
          <Route path="admindashboard" element={<AdminDashboard/>}/>
          {/* Pages Dropdown */}
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bookings" element={<Bookings />} />
          {/* Listing Dropdown */}
          <Route path="listinggrid" element={<ListingGrid/>}/>
          <Route path="listingdetails" element={<ListingDetails/>}/>
          {/* Blog Dropdown */}
          <Route path="bloggrid" element={<BlogGrid/>}/>
          <Route path="blogdetails" element={<BlogDetails/>}/>

          
         
          {/* <Route path="/*" element={<Navigate to="/"/>}/> */}
        <Route path="/*" element={<NotFound />} />
         </Route>
      </Routes>
        <Footer/>
      
    </>
  );
}

export default App;




    
              
              
              
           
          
        

        
        
        

        
// <Route path="/*" element = {<h1>404 Page Not Found</h1>}/> should be mentioned at las because if any page doesnt exist it will reflect a error message and /* is for that only
// There is one more method if any particular page is not there it can direct to any existing page by <Route path="/*" element={<Navigate to="/"/>}/>

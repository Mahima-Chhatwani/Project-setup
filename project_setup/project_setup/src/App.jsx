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
// User Dashboard
import UserDashboard from "./Pages/UserDashboard";
import MyBookings from "./Pages/MyBookings";
import Reviews from "./Pages/Reviews";
import Wishlist from "./Pages/Wishlist";
import Messages from "./Pages/Messages";
import MyWallet from "./Pages/MyWallet";
import Payments from "./Pages/Payments";
import Setting from "./Pages/Setting";
import Security from "./Pages/Security";
import Preferences from "./Pages/Preferences";
import Notifications from "./Pages/Notifications";
import Integration from "./Pages/Integration";
// Admin Dashboard
import AdminDashboard from "./Pages/AdminDashboard"
import Reservations from "./Reservations";
import Calendar from "./Pages/Calendar";
import Quotations from "./Pages/Quotations";
import Enquiries from "./Pages/Enquiries";
import Locations from "./Pages/Locations";
import Drivers from "./Pages/Drivers";
import Customers from "./Pages/Customers";
import Cars from "./Pages/Cars";
import Features from "./Pages/Features";
import Safety from "./Pages/Safety";
import Doors from "./Pages/Doors";
import Seats from "./Pages/Seats";
import Cylinder from "./Pages/Cylinder";
import Fuels from "./Pages/Fuels";
import Colors from "./Pages/Colors";
import Steering from "./Pages/Steering";
import Models from "./Pages/Models";
import Transmissions from "./Pages/Transmissions";
import Types from "./Pages/Types";
import Brands from "./Pages/Brands";
import AdminReviews from "./Pages/AdminReviews";
import Tracking from "./Pages/Tracking";
import Maintainance from "./Pages/Maintainance";
import Inspections from "./Pages/Inspections";
import SeasonPricing from "./Pages/Seasonal-Pricing";
import ExtraServices from "./Pages/Extra-Services";
import AdminInvoices from "./Pages/AdminInvoice";
import AdminPayments from "./Pages/AdminPayments";
import AdminMessages from "./Pages/AdminMessages";
import Coupons from "./Pages/Coupons";
import NewsLetter from "./Pages/NewsLetter";
import Cities from "./Pages/Cities";
import States from "./Pages/States";
import Countries from "./Pages/Countries";
import FAQCategory from "./Pages/FAQCategory";
import AdminFAQ from "./Pages/AdminFAQ";
import AdminTestimonials from "./Pages/AdminTestimonials";
import Announcements from "./Pages/Announcements";
import ContactMessages from "./Pages/ContactMessages";
import Tickets from "./Pages/Tickets";
import AdminUsers from "./Pages/AdminUsers";
import RolesPermissions from "./Pages/RolesPermissions";
import Rentals from "./Pages/Rentals";
import Earnings from "./Pages/Earnings";
import Income from "./Pages/Income";
import Password from "./Pages/Password";
import AdminLogin from "./Pages/AdminLogin";
import Reset from "./Pages/Reset";
import Verification from "./Pages/Verification";
import Tracker from "./Pages/Tracker";
import AdminIntegration from "./Pages/AdminIntegration";
import AdminNotification from "./Pages/AdminNotification";
import AdminSecurity from "./Pages/AdminSecurity";
import AdminProfile from "./Pages/AdminProfile";
import RentalSettings from "./Pages/RentalSettings";
import Insaurance from "./Pages/Insaurance";
import BankAccount from "./Pages/BankAccount";
import Currencies from "./Pages/Currencies";
import Tax from "./Pages/Tax";
import PaymentMethods from "./Pages/PaymentMethods";
// import ListingDetails from "./Pages/ListingDetails";
import ListingGrid from "./Pages/ListingGrid";
import BlogGrid from "./Pages/BlogGrid";
import BlogDetails from "./Pages/BlogDetails";
import Footer from "./Pages/Footer";
import MainLayout from "./Layout/mainLayout";
import FAQ from "./Pages/FAQ";
import RefundPolicy from "./Pages/RefundPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import Testimonials from "./Pages/Testimonials";
import Invoice from "./Pages/Invoice";






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
          <Route path="/testimonials" element={<Testimonials/>}/>
         
          
          {/* User Dashboard Dropdown */}
          <Route path="userdashboard" element={<UserDashboard/>}/>
          <Route path="mybookings" element={<MyBookings />}/>
          <Route path="reviews" element={<Reviews />} />
          <Route path="wishlist" element={<Wishlist/>} />
          <Route path="messages" element={<Messages/>} />
          <Route path="mywallet" element={<MyWallet />} />
          <Route path="payments" element={<Payments />} />
          <Route path="setting" element={<Setting />} />
          <Route path="/security" element={<Security />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/integration" element={<Integration />} />

          {/* Admin Dashboard Dropdown */}
          <Route path="admindashboard" element={<AdminDashboard/>}/>
          <Route path="/reservations" element={<Reservations/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/quotations" element={<Quotations/>}/>
          <Route path="/enquiries" element={<Enquiries/>}/>
          <Route path="/customers" element={<Customers />}/>
          <Route path="/drivers" element={<Drivers />}/>
          <Route path="/locations" element={<Locations />}/>
          <Route path="/cars" element={<Cars />}/>
          <Route path="/features" element={<Features />}/>
          <Route path="/safety" element={<Safety />}/>
          <Route path="/doors" element={<Doors />}/>
          <Route path="/seats" element={<Seats />}/>
          <Route path="/cylinder" element={<Cylinder />}/>
          <Route path="/fuels" element={<Fuels />}/>
          <Route path="/colors" element={<Colors />}/>
          <Route path="/steering" element={<Steering />}/>
          <Route path="/models" element={<Models />}/>
          <Route path="/transmissions" element={<Transmissions />}/>
          <Route path="/types" element={<Types />}/>
          <Route path="/adminreviews" element={<AdminReviews />}/>
          <Route path="/tracking" element={<Tracking />}/>
          <Route path="/maintainance" element={<Maintainance />}/>
          <Route path="/inspections" element={<Inspections />}/>
          <Route path="/seasonal-pricing" element={<SeasonPricing />}/>
          <Route path="/extra-services" element={<ExtraServices />}/>
          <Route path="/adminpayments" element={<AdminPayments />}/>
          <Route path="/admininvoice" element={<AdminInvoices />}/>
          <Route path="/newsletter" element={<NewsLetter/>}/>
          <Route path="/coupons" element={<Coupons />}/>
          <Route path="/adminmessages" element={<AdminMessages />}/>
          <Route path="/cities" element={<Cities />}/>
          <Route path="/states" element={<States />}/>
          <Route path="/countries" element={<Countries />}/>
          <Route path="/faqcategory" element={<FAQCategory />}/>
          <Route path="/adminfaq" element={<AdminFAQ />}/>
          <Route path="/admintestimonials" element={<AdminTestimonials />}/>
          <Route path="/tickets" element={<Tickets />}/>
          <Route path="/announcements" element={<Announcements />}/>
          <Route path="/contactmessages" element={<ContactMessages />}/>
          <Route path="/roles" element={<RolesPermissions />}/>
          <Route path="/adminusers" element={<AdminUsers />}/>
          <Route path="/rentals" element={<Rentals />}/>
          <Route path="/earnings" element={<Earnings />}/>
          <Route path="/income" element={<Income />}/>
          <Route path="/reset" element={<Reset />}/>
          <Route path="/verification" element={<Verification />}/>
          <Route path="/password" element={<Password />}/>
          <Route path="/adminlogin" element={<AdminLogin />}/>
          <Route path="/tracker" element={<Tracker />}/>
          <Route path="/adminintegration" element={<AdminIntegration />}/>
          <Route path="/adminnotification" element={<AdminNotification />}/>
          <Route path="/adminsecurity" element={<AdminSecurity />}/>
          <Route path="/adminprofile" element={<AdminProfile />}/>
          <Route path="/rentalsettings" element={<RentalSettings />}/>
          <Route path="/insaurance" element={<Insaurance />}/>
          <Route path="/bankaccount" element={<BankAccount />}/>
          <Route path="/currencies" element={<Currencies />}/>
          <Route path="/tax" element={<Tax />}/>
          <Route path="/paymentmethods" element={<PaymentMethods />}/>
          {/* Pages Dropdown */}
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="invoice" element= {<Invoice />}/>
          {/* Listing Dropdown */}
          <Route path="listinggrid" element={<ListingGrid/>}/>
          {/* <Route path="listingdetails" element={<ListingDetails/>}/> */}
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

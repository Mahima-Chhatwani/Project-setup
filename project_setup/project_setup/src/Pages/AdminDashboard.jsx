import { useState } from "react"
import React  from "react"
import {Home, Calendar, Users, Car, FileText, Mail, Settings, ClipboardList, MapPin, Star, Wrench, Search, ChevronDown, ChevronUp, FileQuestion, PersonStanding, Clock } from "lucide-react"
import { Link } from "react-router-dom"


// Left Side Bar
const SidebarItem = ({icon:Icon, title, children, defaultOpen =false}) =>{
    const [open, setOpen] = useState(defaultOpen)
    return(
        <div className="mb-2">
            <button className="flex items-center justify-between w-full text-left px-4 py-2 font-semibold text-orange-500 hover:bg-orange-200 rounded"
            onClick={()=>setOpen(!open)}
            >
             <span className="flex items-center gap-2">
                <Icon className="w-4 h-4" />{title}
             </span>
              {children && (open ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
            </button>
            {open && children && (
                <ul className="pl-10 text-sm text-gray-700 space-y-1 mt-1">{children}</ul>
            )}
        </div>
    )
};

const SidebarLink = ({to, children})=>(
    <li>
        <Link to={to} className=" px-2 py-1 hover:text-orange-500 transition-colors">
        {children}
        </Link>
    </li>
);



const AdminDashboard = ()=>{
    return(
        <>
        <aside className="w-72 min-h-screen bg-white border-r shadow-sm p-4">
            <h1 className="text-2xl font-bold text-orange-500 mb-6 flex items-center gap-2">
                <Car className="w-6 h-6" /> Quent
            </h1>

            <div className="mb-4">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"/>
                    <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-9 pr-4 py-2 border rounded text-sm"
                    />
                </div>
            </div>

            {/* Main Section */}
            <SidebarItem icon ={Home} title="Dashboard" />

            <hr></hr>

            {/* Bookings Section */}
            <p className="text-xs text-gray-400 font-medium px-4 mt-6 mb-2">BOOKINGS</p>
            <SidebarLink to="/reservations">Reservations</SidebarLink>
            <SidebarLink to="/calendar">Calender</SidebarLink>
            <SidebarLink to="/quotations">Quotations</SidebarLink>
            <SidebarLink to="/enquiries">Enquiries</SidebarLink>

            <hr ></hr>

            {/* Manage Section */}
            <p className="text-xs text-gray-400 font-medium px-4 mt-6 mb-2">MANAGE</p>
            <SidebarLink to="/customers">Customers</SidebarLink>
            <SidebarLink to="/drivers">Drivers</SidebarLink>
            <SidebarLink to="/locations">Locations</SidebarLink>

            <hr></hr>

            {/* Cars Section */}
            <p className="text-xs text-gray-400 font-medium px-4 mt-6 mb-2">RENTAL</p>
            <SidebarLink to="/cars">Cars</SidebarLink>

            <SidebarItem icon={ClipboardList} title="Car Attributes">
             <SidebarLink to="/brands">Brands</SidebarLink>
             <SidebarLink to="/types">Types</SidebarLink>
             <SidebarLink to="/models">Models</SidebarLink>
             <SidebarLink to="/transmissions">Transmissions</SidebarLink>
             <SidebarLink to="/fuels">Fuels</SidebarLink>
             <SidebarLink to="/colors">Colors</SidebarLink>
             <SidebarLink to="/steering">Steering</SidebarLink>
             <SidebarLink to="/seats">Seats</SidebarLink>
             <SidebarLink to="/cylinder">Cylinder</SidebarLink>
             <SidebarLink to="/doors">Doors</SidebarLink>
             <SidebarLink to="/features">Features</SidebarLink>
             <SidebarLink to="/safety">Safety Features</SidebarLink>
            </SidebarItem>

            <SidebarLink  to="/extra-services">Extra Services</SidebarLink>
            <SidebarLink to="/seasonal-pricing">Seasonal Pricing</SidebarLink>
            <SidebarLink to="/inspections">Inspections</SidebarLink>
            <SidebarLink to="/tracking">Tracking</SidebarLink>
            <SidebarLink to="/maintainance">Maintainance</SidebarLink>
            <SidebarLink to="/adminreviews">Reviews</SidebarLink>

            <hr></hr>

            {/* Finance & Accounts */}
            <p className="text-xs text-gray-400 font-medium px-4 mt-6 mb-2">FINANCE & ACCOUNTS</p>
            <SidebarLink to="/admininvoice">AdminInvoices</SidebarLink>
            <SidebarLink to="/adminpayments">AdminPayments</SidebarLink>

            <hr></hr>

            {/* Others */}
            <p className="text-xs text-gray-400 font-medium px-4 mt-6 mb-2">OTHERS</p>
            <SidebarLink to="/adminmessages">AdminMessages</SidebarLink>
            <SidebarLink to="/coupons">Coupons</SidebarLink>
            <SidebarLink to="/newsletter">NewsLetter</SidebarLink>

            <hr></hr>

            {/* Content Management System Section */}
             <p className="text-xs text-gray-400 font-medium px-4 mt-6 mb-2">CMS</p>
             <SidebarItem icon={MapPin} title="Location">
             <SidebarLink to="/countries">Countries</SidebarLink>
             <SidebarLink to="/states">States</SidebarLink>
             <SidebarLink to="/cities">Cities</SidebarLink>
             </SidebarItem>
             <SidebarLink to="/admintestimonials">Testimonials</SidebarLink>
             <SidebarItem icon={FileQuestion} title="FAQ">
            <SidebarLink to="/adminfaq">FAQ</SidebarLink>
            <SidebarLink to="/faqcategory">FAQ Category</SidebarLink>
             </SidebarItem>

             <hr></hr>

             {/* Support Section */}
             <p className="text-xs text-gray-400 font-medium px-4 mt-6 mb-2">SUPPORT</p>
             <SidebarLink to="/contactmessages">Contact Messages</SidebarLink>
             <SidebarLink to="/announcements">Announcements</SidebarLink>
             <SidebarLink to="/tickets">Tickets</SidebarLink>

             <hr></hr> 

             {/* User Management section */}
             <p className="text-xs text-gray-400 font-medium px-4 mt-6 mb-2">USER MANAGEMENT</p>
             <SidebarLink to="/adminusers">Users</SidebarLink>
             <SidebarLink to="/roles">Roles & Permissions</SidebarLink>

             <hr></hr>  

             {/* Reports */}
             <p className="text-xs text-gray-400 font-medium px-4 mt-6 mb-2">REPORTS</p>
             <SidebarLink to="/income">Income vs Expense</SidebarLink>
             <SidebarLink to="/earnings">Earnings</SidebarLink>
             <SidebarLink to="/rentals">Rentals</SidebarLink>

             <hr></hr>

             {/* Authentication */}
             <p className="text-xs text-gray-400 font-medium px-4 mt-6 mb-2">AUTHENTICATION</p>
             <SidebarLink to="/adminlogin">Login</SidebarLink>
             <SidebarLink to="/password">Forgot Password</SidebarLink>
             <SidebarLink to="/verification">Email Verification</SidebarLink>
             <SidebarLink to="/reset">Reset Password</SidebarLink>

             <hr></hr>

             {/* Settings & Configurations */}
             <p className="text-xs text-gray-400 font-medium px-4 mt-6 mb-2">SETTINGS & CONFIGURATIONS</p>
             <SidebarItem icon={PersonStanding} title="Account Settings">
                <SidebarLink to="/adminprofile">Profile</SidebarLink>
                <SidebarLink to="/adminsecurity">Security</SidebarLink>
                <SidebarLink to="/adminnotification">Notifications</SidebarLink>
                <SidebarLink to="/adminintegration">Integrations</SidebarLink>
                <SidebarLink to="/tracker">Tracker</SidebarLink>
                </SidebarItem>

                <SidebarItem icon={Clock} title="Rental Settings">
                <SidebarLink to="/rental">Rental</SidebarLink>
                <SidebarLink to="/insaurance">Insaurance</SidebarLink>
                </SidebarItem>

                <SidebarItem icon={Settings} title="Finance Settings">
                <SidebarLink to="/paymentmethods">Payment Methods</SidebarLink>
                <SidebarLink to="/bankaccount">Bank Accounts</SidebarLink>
                <SidebarLink to="/tax">Tax Rates</SidebarLink>
                <SidebarLink to="/currencies">Currencies</SidebarLink>
                </SidebarItem>
        </aside>
        </>
    )
}

export default AdminDashboard
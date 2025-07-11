import React from "react";
import { LayoutDashboard, CalendarCheck, Heart,Star, MessageSquare, Wallet, CreditCard, Settings } from "lucide-react"
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";



// Section 1
const settingItems = [
    {name: <Link to="/userdashboard">Dashboard</Link>, icon: <LayoutDashboard size={20} />, },
    {name: <Link to="/mybookings">My Bookings</Link>, icon: <CalendarCheck size={20} />},
    {name: <Link to="/reviews">Reviews</Link>, icon: <Star size={20} />,},
    {name: <Link to="/wishlist">Wishlist</Link>, icon: <Heart size={20} />, },
    {name: <Link to="/messages">Messages</Link>, icon: <MessageSquare size={20} />, },
    {name: <Link to="/mywallet">My Wallet</Link>, icon: <Wallet size={20} />, },
    {name: <Link to="/payments">Payments</Link>, icon: <CreditCard size={20} />, },
    {name: <Link to="/settings">Settings</Link>, icon: <Settings size={20} />, active:true},
];

const Setting = () => {
    return(
        <>
       <section>
            <div className="bg-white shadow-sm p-4 rounded--md flex flex-wrap gap-6 justify-start md:justify-between items-center">
               {settingItems.map((item, idx)=>(
                <button key={idx} className={`flex flex-col items-center text-sm font-medium transition ${
                item.active
                ? "text-white bg-orange-500 px-4 py-2 rounded"
                : "text-gray-600 hover:text-orange-500"
                }`}>
            <div className="mb-1">{item.icon}</div>
            {item.name}
                </button>
               ))}
            </div>
         </section>

         <section>
            <div className="min-h-screen p-6 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-4">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="flex flex-col gap-2 bg-transparent p-0">
              <TabsTrigger
                value="profile"
                className="w-full text-left px-4 py-2 rounded-md data-[state=active]:bg-yellow-500 data-[state=active]:text-white"
              >
                <Link to="/setting">Profile</Link>
              </TabsTrigger>
              <TabsTrigger value="security" className="w-full text-left px-4 py-2 rounded-md">
                <Link to="/security">Security</Link>
              </TabsTrigger>
              <TabsTrigger value="preferences" className="w-full text-left px-4 py-2 rounded-md">
                <Link to="/preferences">Preferences</Link>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="w-full text-left px-4 py-2 rounded-md">
                <Link to="/notifications">Notifications</Link>
              </TabsTrigger>
              <TabsTrigger value="integration" className="w-full text-left px-4 py-2 rounded-md">
                <Link to="/integration">Integration</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
{/* Form */}
        <div className="md:col-span-3 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>

          <form className="space-y-6">
            {/* Basic Info */}
            <div>
              <h3 className="text-md font-medium mb-2">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                {/* Profile picture */}
                <div className="col-span-1 flex flex-col items-center gap-2">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <Input type="file" accept="image/png, image/jpeg" />
                  <p className="text-xs text-muted-foreground">PNG, JPEG under 15 MB</p>
                </div>

 {/* Name */}
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  <div>
                    <Label>First Name *</Label>
                    <Input placeholder="Enter First Name" />
                  </div>
                  <div>
                    <Label>Last Name *</Label>
                    <Input placeholder="Enter Last Name" />
                  </div>
                  <div>
                    <Label>User Name *</Label>
                    <Input placeholder="Enter User Name" />
                  </div>
                  <div>
                    <Label>Phone Number *</Label>
                    <Input type="tel" placeholder="‪+91 9876543210‬" />
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input type="email" placeholder="Enter Email" />
                  </div>
                </div>
              </div>
            </div>

 {/* Address Info */}
            <div>
              <h3 className="text-md font-medium mb-2">Address Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label>Address *</Label>
                  <Input placeholder="Enter Address" />
                </div>
                <div>
                  <Label>Country *</Label>
                  <Input placeholder="Enter Country" />
                </div>
                <div>
                  <Label>State *</Label>
                  <Input placeholder="Enter State" />
                </div>
                <div>
                  <Label>City *</Label>
                  <Input placeholder="Enter City" />
                </div>
                <div>
                  <Label>Pincode *</Label>
                  <Input placeholder="Enter Pincode" />
                </div>
              </div>
            </div>
  {/* Buttons */}
            <div className="flex justify-end gap-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>

         </section>
        </>
    )
}

// Section 2 



export default Setting
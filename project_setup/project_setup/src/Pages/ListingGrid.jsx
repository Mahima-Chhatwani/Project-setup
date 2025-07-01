import React from "react";
import { Link } from "react-router-dom";
import {ListIcon, GridIcon, MapPin} from "lucide-react"

const ListingGrid = () => {
  return (
    <>
      <section>
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Pickup Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Location
              </label>
              <input
                type="text"
                placeholder="Enter city, Airport, or Address"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Pickup Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 "
              />
            </div>

            {/* Pickup Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Time
              </label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 "
              />
            </div>

            {/* Return Date */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Return Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 "
              />
            </div>

            {/* Return Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Return Time
              </label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 "
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Link
                to="/listinggrid"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-md"
              >
                🔎Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-6">

            {/* Showing Info */}
            <div className="text-gray-700 font-medium">
             Showing 
             <span className="font-semibold text-black"> 1-5 </span>
             of{" "}
             <span className="font-semibold text-black">
                20
             </span>
               Cars
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">

                {/* Show Dropdown */}
                <div className="flex items-center gap-2">
                    <label className="teext-gray-600 text-sm">Show:</label>
                    <select className="border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-yellow-400">
                    <option>5</option>
                    <option>9</option>
                    <option>15</option>
                    <option>20</option>
                    </select>
                </div>

                {/* Sort Dropdown */}

                <div className="flex items-center gap-2">
                    <label className="text-gray-600 text-sm">
                        Sort By:
                    </label>
                    <select  className="border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-yellow-400">
                    <option>Newest</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                    <option>Popular</option>
                    </select>
                </div>

                   {/* View mode icons */}

                   <div className="flex items-center gap-2">
                    <button className="p-2 border rounded-md bg-teal-600 text-white">
                        <GridIcon  className="w-4 h-4"/>
                    </button>
                    <button className="p-2 border rounded-md bg-teal-600 text-white">
                        <ListIcon className="w-4 h-4" />
                    </button>
                    <button className="p-2 border rounded-md bg-teal-600 text-white">
                        <MapPin className="w-4 h-4"/>
                    </button>
                   </div>
            </div>

        </div>
      </section>

      <section>
        <div>

        </div>
      </section>
    </>
  );
};

export default ListingGrid;

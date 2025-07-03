import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListIcon, GridIcon, MapPin, Key } from "lucide-react";
import ChevroletPickTruckImg from "@/images/chevroletPickTruck.png";
import FordMustangImg from "@/images/fordMustang.png";
import toyotaTocamoImg from "@/images/toyotaTocamo.png";
import ferrariSpecialeImg from "@/images/ferrariSpeciale.png";
import chevroletCamaroImg from "@/images/chevroletCamaro.png";
import AcuraSportImg from "@/images/acuraSport.png";
import ToyotaCamaryImg from "@/images/toyotaCamary.png";
import KiaSoulImg from "@/images/kiaSoul.png";
import AudiImg from "@/images/audi.png";



const carData = [
  {
    id: 1,
    name: "Chevrolet Pick Truck 3.5L",
    brand: "Chevrolet",
    location: "Rajasthan,India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2012",
    image: ChevroletPickTruckImg,
    rating: 4.0,
  },

  {
    id: 2,
    name: "Ford Mustang 4.0 AT",
    brand: "Ford",
    location: "Punjab,India",
    price: "20,000",
    fuel: "Petrol",
    mileage: "42 Miles",
    transmission: "Auto",
    seats: "5 Persons",
    year: "2021",
    image: FordMustangImg,
    rating: 4.0,
  },

  {
    id: 3,
    name: "Toyota Tocamo 4WD",
    brand: "Toyota",
    location: "Madhya Pradesh,India",
    price: "30,000",
    fuel: "Diesel",
    mileage: "22 Miles",
    transmission: "Auto",
    seats: "5 Persons",
    year: "2019",
    image: toyotaTocamoImg,
    rating: 4.0,
  },

  {
    id: 4,
    name: "Ferrari 458 MM Speciale",
    brand: "Ferrari",
    location: "Chandigarh,India",
    price: "1,60,000",
    fuel: "Diesel",
    mileage: "14 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2022",
    image: ferrariSpecialeImg,
    rating: 4.0,
  },

  {
    id: 5,
    name: "2018 Chevrolet Camaro",
    brand: "Chevrolet",
    location: "Delhi,India",
    price: "36,000",
    fuel: "Diesel",
    mileage: "18 KM",
    transmission: "Manual",
    seats: "4 Persons",
    year: "2018",
    image: chevroletCamaroImg,
    rating: 5.0,
  },

  {
    id: 6,
    name: "Acura Sport Version",
    brand: "Acura",
    location: "Mumbai,India",
    price: "30,000",
    fuel: "Diesel",
    mileage: "12 KM",
    transmission: "Auto",
    seats: "5 Persons",
    year: "2013",
    image: AcuraSportImg,
    rating: 4.0,
  },

  {
    id: 7,
    name: "Toyota Camary SE 350",
    brand: "Toyota",
    location: "Odisha,India",
    price: "1,60,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Auto",
    seats: "5 Persons",
    year: "2018",
    image: ToyotaCamaryImg,
    rating: 4.0,
  },

  {
    id: 8,
    name: "Kia Soul 2016",
    brand: "KIA",
    location: "Maharashtra,India",
    price: "80,000",
    fuel: "Petrol",
    mileage: "22 KM",
    transmission: "Auto",
    seats: "5 Persons",
    year: "2016",
    image: KiaSoulImg,
    rating: 4.0,
  },

  {
    id: 9,
    name: "Audi A3 2019 New",
    brand: "Audi",
    location: "Himachal Pradesh,India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "4 Persons",
    year: "2019",
    image: AudiImg,
    rating: 4.0,
  },

  {
    id: 10,
    name: "Chevrolet Pick Truck 3.5L",
    brand: "Chevrolet",
    location: "India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2012",
    image: ChevroletPickTruckImg,
    rating: 4.0,
  },

  {
    id: 11,
    name: "Chevrolet Pick Truck 3.5L",
    brand: "Chevrolet",
    location: "India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2012",
    image: ChevroletPickTruckImg,
    rating: 4.0,
  },

  {
    id: 12,
    name: "Chevrolet Pick Truck 3.5L",
    brand: "Chevrolet",
    location: "India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2012",
    image: ChevroletPickTruckImg,
    rating: 4.0,
  },

  {
    id: 13,
    name: "Chevrolet Pick Truck 3.5L",
    brand: "Chevrolet",
    location: "India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2012",
    image: ChevroletPickTruckImg,
    rating: 4.0,
  },

  {
    id: 14,
    name: "Chevrolet Pick Truck 3.5L",
    brand: "Chevrolet",
    location: "India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2012",
    image: ChevroletPickTruckImg,
    rating: 4.0,
  },

  {
    id: 15,
    name: "Chevrolet Pick Truck 3.5L",
    brand: "Chevrolet",
    location: "India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2012",
    image: ChevroletPickTruckImg,
    rating: 4.0,
  },

  {
    id: 16,
    name: "Chevrolet Pick Truck 3.5L",
    brand: "Chevrolet",
    location: "India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2012",
    image: ChevroletPickTruckImg,
    rating: 4.0,
  },

  {
    id: 17,
    name: "Chevrolet Pick Truck 3.5L",
    brand: "Chevrolet",
    location: "India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2012",
    image: ChevroletPickTruckImg,
    rating: 4.0,
  },

  {
    id: 18,
    name: "Chevrolet Pick Truck 3.5L",
    brand: "Chevrolet",
    location: "India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2012",
    image: ChevroletPickTruckImg,
    rating: 4.0,
  },

  {
    id: 19,
    name: "Chevrolet Pick Truck 3.5L",
    brand: "Chevrolet",
    location: "India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2012",
    image: ChevroletPickTruckImg,
    rating: 4.0,
  },

  {
    id: 20,
    name: "Chevrolet Pick Truck 3.5L",
    brand: "Chevrolet",
    location: "India",
    price: "10,000",
    fuel: "Petrol",
    mileage: "10 KM",
    transmission: "Manual",
    seats: "5 Persons",
    year: "2012",
    image: ChevroletPickTruckImg,
    rating: 4.0,
  },
];

const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011"];
const brands = ["Toyota", "Kia", "Audi", "Chevrolet", "Ford", "Ferrari"];
const fuelTypes = ["Petrol", "Diesel"];
const transmissions = ["Manual", "Auto"];



const ListingGrid = () => {
  const [filters, setFilters] = useState({})
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = carData.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(carData.length / carsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCheckBoxChange = (key,value) =>{
    setFilters((prev) =>{
        const updated = {...prev};
        if (updated[key]?.includes(value)){
            updated[key] = updated[key].filter((v)=> v !== value);
        }else{
            updated[key] = [...(updated[key] || []), value];
        }
        return updated;
    })
}

  const filteredCars = carData.filter((car)=>{
    const matchesYear = 
    !filters.year || filters.year.includes(car.year.toString());
    const matchesBrand = 
    !filters.brand || filters.brand.includes(car.brand.toString());
    const matchesFuel =
    !filters.fuel || filters.fuel.includes(car.fuel.toString());
    const matchesTransmission = 
    !filters.transmission || filters.transmission.includes(car.transmission);
    return matchesYear && matchesBrand && matchesFuel && matchesTransmission;
});


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
            of <span className="font-semibold text-black">20</span>
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
              <label className="text-gray-600 text-sm">Sort By:</label>
              <select className="border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-yellow-400">
                <option>Newest</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
                <option>Popular</option>
              </select>
            </div>

            {/* View mode icons */}

            <div className="flex items-center gap-2">
              <button className="p-2 border rounded-md bg-teal-600 text-white">
                <GridIcon className="w-4 h-4" />
              </button>
              <button className="p-2 border rounded-md bg-teal-600 text-white">
                <ListIcon className="w-4 h-4" />
              </button>
              <button className="p-2 border rounded-md bg-teal-600 text-white">
                <MapPin className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    <section className="flex gap-6 px-4 py-6">
      {/* Left Sidebar */}
      <div className="w-64 p-4 border rounded-lg shadow bg-white">
        <h2 className="text-xl font-bold mb-4">Filter Cars</h2>

        {/* Brand */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Car Brand</h3>
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                checked={filters.brand?.includes(brand)}
                onChange={() => handleCheckBoxChange("brand", brand)}
              />
              {brand}
            </label>
          ))}
        </div>

        {/* Year */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Year</h3>
          {years.map((year) => (
            <label key={year} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                checked={filters.year?.includes(year)}
                onChange={() => handleCheckBoxChange("year", year)}
              />
              {year}
            </label>
          ))}
        </div>

        {/* Fuel */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Fuel Type</h3>
          {fuelTypes.map((fuel) => (
            <label key={fuel} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                checked={filters.fuel?.includes(fuel)}
                onChange={() => handleCheckBoxChange("fuel", fuel)}
              />
              {fuel}
            </label>
          ))}
        </div>

        {/* Transmission */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Transmission</h3>
          {transmissions.map((trans) => (
            <label key={trans} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                checked={filters.transmission?.includes(trans)}
                onChange={() => handleCheckBoxChange("transmission", trans)}
              />
              {trans}
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Apply Filters
          </button>
          <button
            className="w-full bg-red-500 text-white py-2 rounded"
            onClick={() => setFilters({})}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Car Listing */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6">Explore Cars for Rent</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentCars.length > 0 ? (
            currentCars.map((car) => (
              <div
                key={car.id}
                className="border rounded-lg shadow hover:shadow-xl transition"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-70 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{car.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{car.location}</p>
                  <div className="flex flex-wrap gap-2 text-xs mb-3 text-gray-500">
                    <span>{car.transmission}</span>
                    <span>{car.mileage}</span>
                    <span>{car.fuel}</span>
                    <span>{car.seats}</span>
                    <span>{car.year}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xl text-red-600">
                      ₹{car.price}{" "}
                      <span className="text-sm text-gray-500">/day</span>
                    </span>
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No cars found matching filters.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ListingGrid;

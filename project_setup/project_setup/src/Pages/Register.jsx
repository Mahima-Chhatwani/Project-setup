
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with real API call
    console.log("User registered:", formData);

    // Simulate success response
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Link to="/" className="text-sm text-muted-foreground mb-2 inline-block">
            ← Back To Home
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Register</h2>
          <p className="mt-1 text-sm text-gray-500">We'll send a confirmation code to your email.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium block" htmlFor="username">
              Username <span className="text-red-600">*</span>
            </label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium block" htmlFor="email">
              Email <span className="text-red-600">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium block" htmlFor="password">
              Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute inset-y-0 right-2 flex items-center text-gray-400"
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full bg-black text-white">
            Register
          </Button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-sm text-muted-foreground">
            Or, Create an account with your email
          </span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        <div className="space-y-3">
          <Button variant="outline" className="w-full flex gap-2 justify-center items-center">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-4 h-4"
            />
            Log in with Google
          </Button>
          <Button variant="outline" className="w-full flex gap-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            Log in with Facebook
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Already have an Account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;



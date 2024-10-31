import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Left section for large screens */}
      <div className="hidden lg:flex items-center justify-center bg-black w-2/5 px-10">
        <div className="max-w-md space-y-6 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight leading-relaxed">
            Welcome to ECommerce Shopping
          </h1>
          <p className="text-lg opacity-90">
            Discover an exceptional shopping experience, curated just for you.
          </p>
        </div>
      </div>

      {/* Right section for main content */}
      <div className="flex flex-1 items-center justify-center bg-white shadow-lg px-6 py-16 sm:px-8 lg:px-12">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;

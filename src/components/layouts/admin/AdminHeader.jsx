const AdminHeader = () => {
  return (
    <>
      <header className="bg-white w-full h-full">
        <nav className="flex items-center justify-between">
          <div className="">
            <a href="#" className="">
              <span className="sr-only">Your Company</span>
              <img
                className="w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>

          <div className="">
            <a href="#" className="text-sm font-semibold  text-gray-900">
              Log in &rarr;
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default AdminHeader;

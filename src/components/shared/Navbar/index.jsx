const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-28 md:px-12 px-5 w-full lg:pt-8 py-2 lg:pb-1 flex lg:flex-row md:flex-row flex-col lg:gap-3 gap-2 lg:justify-between md:justify-between items-center">
      {/* left */}
      <div className="md:w-2/12">
        <h1 className="text-[#030712] lg:text-start md:text-start text-center font-bold lg:text-2xl md:text-xl text-lg">
          Exclusive
        </h1>
      </div>
      {/* middle */}
      <div className="w-5/12 flex lg:flex-row md:flex-row flex-col lg:justify-end lg:items-start md:items-start items-center text-lg lg:gap-8 md:gap-2 gap-3">
        <a
          href="index.html"
          className="duration-300 transition px-1 lg:text-base md:text-sm text-sm hover:underline poppins"
        >
          Home
        </a>
        <a
          href="contact.html"
          className="duration-300 transition px-1 rounded lg:text-base md:text-sm text-sm underline poppins"
        >
          Contact
        </a>
        <a
          href="about.html"
          className="duration-300 transition px-1 rounded lg:text-base md:text-sm text-sm hover:underline poppins"
        >
          About
        </a>
        <a
          href="./signup.html"
          className="duration-300 transition px-1 rounded lg:text-base md:text-sm text-sm hover:underline poppins"
        >
          Sign Up
        </a>
      </div>
      {/* right */}
      <div className="md:w-6/12 relative flex lg:flex-row md:flex-row flex-col lg:justify-end md:justify-end lg:items-center lg:gap-4 gap-2 lg:pl-4 md:pl-3 lg:h-12 rounded-md">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="bg-[#f5f5f5] rounded text-xs pr-8 pl-2 py-2 outline-none poppins"
        />
        <button className="absolute lg:right-[155px] md:right-[105px] right-[5px] lg:top-[14px] top-[6px]">
          <img src="./images/nav/search.svg" alt className />
        </button>
        {/*  */}
        <div className="flex flex-row items-center justify-center gap-5">
          <a href="wishlist.html" className="relative rounded-full">
            <img src="./images/nav/wishlist.svg" alt className />
          </a>
          <a href="cart.html" className="rounded-full">
            <img src="./images/nav/troly.svg" alt className="cursor-pointer" />
          </a>
          <a href="#" className>
            <img
              src="./images/about page/user.svg"
              alt
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

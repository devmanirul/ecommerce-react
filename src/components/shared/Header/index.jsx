const Header = () => {
  return (
    <header className="bg-black">
      <div className="max-w-7xl mx-auto lg:px-28 md:px-12 px-5 flex lg:flex-row md:flex-row flex-col text-white py-3 justify-end items-center text-sm lg:gap-[106px]">
        {/* seals */}
        <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-2">
          <p className="poppins text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            href="./checkout.html"
            className="border-b border-white font-semibold border-none outline-none underline poppins pb-1"
          >
            ShopNow
          </a>
        </div>
        {/* shop and language */}
        <div className>
          <select
            name="language"
            id="language"
            className="bg-transparent poppins font-medium cursor-pointer outline-none"
          >
            <option value="English" className="poppins font-medium text-black">
              English
            </option>
            <option value="Bangla" className="poppins font-medium text-black">
              Bangla
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};
export default Header;

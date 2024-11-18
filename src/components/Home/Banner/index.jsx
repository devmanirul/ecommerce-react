const Banner = () => {
  return (
    <div>
      {/* banner */}
      <section className="flex lg:flex-row md:flex-row flex-col gap-4">
        {/* all heading or left side */}
        <div className="flex flex-col lg:w-3/12 lg:gap-3 md:border-r-2 pt-7">
          <a className="flex flex-row lg:justify-normal md:justify-normal justify-center lg:items-center lg:gap-16 md:gap-1 gap-3">
            <p className="cursor-pointer poppins">Woman's Fashion</p>
            <img src="./images/receivesion/r-errow.svg" alt className="w-2" />
          </a>
          <a className="flex flex-row lg:justify-normal md:justify-normal justify-center lg:items-center lg:gap-[92px] md:gap-8 gap-10 cursor-pointer">
            <p className="poppins">Men's Fashion</p>
            <img src="./images/receivesion/r-errow.svg" alt className="w-2" />
          </a>
          <p className="lg:text-start md:text-start text-center cursor-pointer poppins">
            Electronics
          </p>
          <p className="lg:text-start md:text-start text-center cursor-pointer poppins">
            Home &amp; Lifestyle
          </p>
          <p className="lg:text-start md:text-start text-center cursor-pointer poppins">
            Medicine
          </p>
          <p className="lg:text-start md:text-start text-center cursor-pointer poppins">
            Sports &amp; Outdodr
          </p>
          <p className="lg:text-start md:text-start text-center cursor-pointer poppins">
            Baby' &amp; Toys
          </p>
          <p className="lg:text-start md:text-start text-center cursor-pointer poppins">
            Groceries &amp; Pets
          </p>
          <p className="lg:text-start md:text-start text-center cursor-pointer poppins">
            Health &amp; Beauty
          </p>
        </div>
        {/* iPhone or right side */}
        <div className="relative lg:w-9/12 md:w-9/12 w-full lg:pl-6 flex justify-center items-end pt-8">
          <div className="flex lg:flex-row md:flex-row flex-col min-h-full">
            {/* left side */}
            <div className="lg:w-5/12 flex flex-col gap-4 bg-black lg:py-12 md:py-8 py-5 lg:pl-16 md:pl-10 pl-5">
              <div className="flex flex-row gap-5 items-center">
                <img src="./images/receivesion/iphone.svg" alt className />
                <h3 className="text-white">iPhone 14 Series</h3>
              </div>
              <h1 className="text-white font-semibold text-4xl leading-tight">
                Up to 10% <br />
                off Voucher
              </h1>
              <div className="flex flex-row gap-3 items-center">
                <button className="text-white border-b poppins">
                  Shop Now
                </button>
                <img
                  src="./images/receivesion/arrow-right.svg"
                  alt
                  className="cursor-pointer h-4 w-7"
                />
              </div>
            </div>
            {/* right side big iPhone image */}
            <div className="bg-black lg:w-7/12">
              <img
                src="./images/receivesion/iphone14.svg"
                alt
                className="h-full"
              />
            </div>
          </div>
          {/* slide */}
          <div className="absolute flex flex-row gap-3 bottom-4">
            <div className="bg-[#808080] w-3 h-3 rounded-full cursor-pointer" />
            <div className="bg-[#808080] w-3 h-3 rounded-full cursor-pointer" />
            <div className="bg-[#e95353] w-3 h-3 rounded-full cursor-pointer ring ring-white" />
            <div className="bg-[#808080] w-3 h-3 rounded-full cursor-pointer" />
            <div className="bg-[#808080] w-3 h-3 rounded-full cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Banner;

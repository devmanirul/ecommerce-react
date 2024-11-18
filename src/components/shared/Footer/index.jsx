const Footer = () => {
  return (
    <div className="bg-black ">
      {/* footer */}
      <footer className="lg:pt-20 md:pt-12 pt-8 mt-10">
        <div className="max-w-7xl mx-auto flex lg:flex-row md:flex-row flex-col lg:items-start justify-between lg:gap-0 md:gap-3 gap-10 lg:px-28 md:px-5 px-10 mb-16">
          {/* exclusice */}
          <div className="flex flex-col lg:items-start md:items-start items-center gap-4">
            <h3 className="lg:text-2xl md:text-xl text-2xl font-bold text-white">
              Exclusive
            </h3>
            <h4 className="text-white text-xl md:text-lg font-medium pt-3">
              Subscribe
            </h4>
            <p className="text-white lg:text-base text-sm md:text-xs poppins">
              Get 10% off your first order
            </p>
            <div className="relative">
              <input
                className="bg-transparent border-2 border-[#FFF] lg:py-2 py-1 lg:pl-3 md:pl-1 pl-2 rounded-md outline-none lg:w-full md:w-11/12 text-[#646464] lg:text-base md:text-xs poppins"
                type="text"
                name
                id
                placeholder="Enter your Email"
              />
              <img
                src="./images/footer/send.svg"
                alt
                className="absolute lg:top-2 top-[6px] lg:right-4 right-6 cursor-pointer lg:h-7 md:h-4"
              />
            </div>
          </div>
          {/* support */}
          <div className="w-fit flex flex-col gap-4 lg:pl-0 md:pl-0 pl-7">
            <h4 className="text-white lg:text-xl md:text-lg text-xl lg:text-start md:text-start text-center font-semibold">
              Support
            </h4>
            <p className="text-white pt-3 lg:text-start md:text-start text-center lg:text-base md:text-xs text-base poppins">
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </p>
            <p className="text-white cursor-pointer lg:text-start md:text-start text-center lg:text-base md:text-xs text-base poppins">
              exclusive@gmail.com
            </p>
            <p className="text-white cursor-pointer lg:text-start md:text-start text-center poppins">
              +88015-88888-9999
            </p>
          </div>
          {/* account */}
          <div className="w-fit flex flex-col gap-3 md:gap-2 lg:pl-0 md:pl-0 pl-16">
            <h4 className="text-white lg:text-xl md:text-lg text-lg lg:text-start md:text-start text-center font-semibold">
              Account
            </h4>
            <a
              href="account.html"
              className="text-white lg:text-base md:text-xs text-base pt-3 lg:text-start md:text-start text-center poppins"
            >
              My Account
            </a>
            <a
              href="signin.html"
              className="text-white lg:text-base md:text-xs text-base lg:text-start md:text-start text-center poppins"
            >
              Login/Register
            </a>
            <a
              href="cart.html"
              className="text-white lg:text-base md:text-xs text-base lg:text-start md:text-start text-center poppins"
            >
              Cart
            </a>
            <a
              href="wishlist.html"
              className="text-white lg:text-base md:text-xs text-base lg:text-start md:text-start text-center poppins"
            >
              Wishlist
            </a>
            <a
              href="checkout.html"
              className="text-white lg:text-base md:text-xs text-base lg:text-start md:text-start text-center poppins"
            >
              Shop
            </a>
          </div>
          {/* quick link */}
          <div className="w-fit flex flex-col gap-2 lg:pl-0 md:pl-0 pl-16">
            <h4 className="text-white lg:text-xl md:text-lg text-lg lg:text-start md:text-start text-center font-semibold">
              Quick Link
            </h4>
            <a
              href
              className="text-white lg:text-base md:text-xs text-base pt-3 lg:text-start md:text-start text-center poppins"
            >
              Privacy Policy
            </a>
            <a
              href
              className="text-white lg:text-base md:text-xs text-base lg:text-start md:text-start text-center poppins"
            >
              Terms Of Use
            </a>
            <a
              href
              className="text-white lg:text-base md:text-xs text-base lg:text-start md:text-start text-center poppins"
            >
              FAQ
            </a>
            <a
              href="contact.html"
              className="text-white lg:text-base md:text-xs text-base lg:text-start md:text-start text-center poppins"
            >
              Contact
            </a>
          </div>
          {/* download app */}
          <div className="w-fit flex flex-col gap-5">
            <h4 className="text-white lg:text-xl md:text-lg text-lg lg:text-start md:text-start text-center font-semibold">
              Download App
            </h4>
            <p className="text-[#afafaf] text-xs lg:text-start md:text-start text-center poppins">
              Save $3 with App New User Only
            </p>
            <div className="flex flex-row gap-3">
              <div className>
                <img
                  src="./images/footer/Qr Code.svg"
                  className="h-24 md:h-20"
                  alt
                />
              </div>
              <div className="flex flex-col gap-3">
                <a href>
                  <img
                    src="./images/footer/GooglePlay.svg"
                    className="w-32 md:w-24"
                    alt
                  />
                </a>
                <a href>
                  <img
                    src="./images/footer/appstore.svg"
                    className="w-32 md:w-24"
                    alt
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-row lg:justify-normal md:justify-normal justify-center lg:items-start md:items-start items-center gap-5">
              <a href className>
                <img src="./images/footer/Facebook.svg" alt className />
              </a>
              <a href className>
                <img src="./images/footer/Twitter.svg" alt className />
              </a>
              <a href className>
                <img src="./images/footer/instagram.svg" alt className />
              </a>
              <a href className>
                <img src="./images/footer/linkedin.svg" alt className />
              </a>
            </div>
          </div>
        </div>
        <p className="text-[#3D3D3D] lg:text-xl md:text-lg text-base text-center px-5 py-5 border-t border-[#141414] poppins">
          © Copyright @devmanirul 2024. All right reserved.
        </p>
      </footer>
    </div>
  );
};
export default Footer;

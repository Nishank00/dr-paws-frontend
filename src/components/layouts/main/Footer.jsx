const Footer = () => {
  return (
    <footer className=" bg-primary3 body-padding-x py-20 lg:h-[400px]  mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
      {/* Logo and Contact */}
      <div className=" flex flex-col  items-center md:items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d33c50d9807ec772184fb6f5d47b95056196041f13665f4a3c3bf67d9f7ee7c2?"
          className="aspect-[2.55] object-contain object-center w-[110px] h-[49px] justify-center items-center overflow-hidden shrink-0 max-w-full mb-4"
        />

        <a
          href="mailto:hello@bearhug.co"
          className="text-primary text-[20px]  hover:text-secondary mb-2"
        >
          hello@bearhug.co
        </a>
        <a
          href="tel:+123 456 789"
          className="text-primary text-[20px]  hover:text-secondary"
        >
          +123 456 789
        </a>
      </div>

      {/* Social Media Links */}
      {/* <div className="flex flex-col mt-6">
        <p className="text-3xl font-semibold mb-4 text-primary">
          Connect with us
        </p>
        <a href="#" className="text-primary text-2xl  hover:text-secondary">
          Facebook
        </a>
        <a href="#" className="text-primary  text-2xl mt-3  hover:text-secondary">
          Twitter
        </a>
        <a href="#" className="text-primary text-2xl mt-3  hover:text-secondary">
          Instagram
        </a>
      </div> */}

      {/* Customer Support */}
      {/* <div className="flex flex-col mt-6">
        <p className="text-3xl font-semibold mb-4 text-primary">
          Customer Support
        </p>
        <a href="#" className="text-primary text-2xl  hover:text-secondary">
          Contact Us
        </a>
        <a href="#" className="text-primary text-2xl mt-3 hover:text-secondary">
          FAQ
        </a>
        <a href="#" className="text-primary text-2xl mt-3 hover:text-secondary">
          Shipping & Returns
        </a>
      </div> */}

      {/* About Us */}
      {/* <div className="flex flex-col mt-6">
        <p className="text-3xl font-semibold mb-4 text-primary">About Us</p>
        <a href="#" className="text-primary text-2xl hover:text-secondary">
          Our Story
        </a>
        <a href="#" className="text-primary text-2xl mt-3 hover:text-secondary">
          Team
        </a>
        <a href="#" className="text-primary text-2xl mt-3 hover:text-secondary">
          Careers
        </a>
      </div> */}
      <div className=" flex flex-col mt-6  items-center md:items-start">
        <p className="text-2xl font-semibold mb-4 text-primary"> Company </p>

        <a href="#" className="text-primary text-[22px]  hover:text-secondary">
          Team     
             </a>
        <a href="#" className="text-primary text-[22px] mt-3 hover:text-secondary">
          Careers    
              </a>

      </div>
      <div className="flex flex-col mt-6  items-center md:items-start">
        <p className="text-2xl font-semibold mb-4 text-primary"> Get Care</p>

        <a href="#" className="text-primary text-[22px]  hover:text-secondary">
          Services        </a>
        <a href="#" className="text-primary text-[22px] mt-3 hover:text-secondary">
          Locations        </a>
        <a href="#" className="text-primary text-[22px] mt-3 hover:text-secondary">
          Membership       </a>
        <a href="#" className="text-primary text-[22px] mt-3 hover:text-secondary">
          Download app       </a>
      </div>
      <div className="flex flex-col mt-6  items-center md:items-start">
        <p className="text-2xl font-semibold mb-4 text-primary"> Social</p>

        <a href="#" className="text-primary text-[22px]  hover:text-secondary">
          Instagram        </a>
        <a href="#" className="text-primary text-[22px] mt-3 hover:text-secondary">
          Linkedin        </a>
        <a href="#" className="text-primary text-[22px] mt-3 hover:text-secondary">
          Twitter       </a>
      </div>
    </footer>
  );
};

export default Footer;

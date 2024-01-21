// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-primary3 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Contact */}
        <div className="flex flex-col items-center md:items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d33c50d9807ec772184fb6f5d47b95056196041f13665f4a3c3bf67d9f7ee7c2?"
            className="aspect-[2.55] object-contain object-center w-[125px] justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <p className="text-sm text-primary">+123 456 789</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col">
          <p className="text-lg font-semibold mb-4 text-primary">Connect with us</p>
            <a href="#" className="text-primary hover:text-gray-300">Facebook</a>
            <a href="#" className="text-primary hover:text-gray-300">Twitter</a>
            <a href="#" className="text-primary hover:text-gray-300">Instagram</a>
        </div>

        {/* Customer Support */}
        <div className="flex flex-col">
          <p className="text-lg font-semibold mb-4 text-primary">Customer Support</p>
          <a href="#" className="text-primary hover:text-gray-300">Contact Us</a>
          <a href="#" className="text-primary hover:text-gray-300">FAQ</a>
          <a href="#" className="text-primary hover:text-gray-300">Shipping & Returns</a>
        </div>

        {/* About Us */}
        <div className="flex flex-col">
          <p className="text-lg font-semibold mb-4 text-primary">About Us</p>
          <a href="#" className="text-primary hover:text-gray-300">Our Story</a>
          <a href="#" className="text-primary hover:text-gray-300">Team</a>
          <a href="#" className="text-primary hover:text-gray-300">Careers</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

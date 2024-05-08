import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="font-custom-open-sans text-primary bg-primary3 body-padding-x ">
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        <div className=" flex flex-col  items-center md:items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d33c50d9807ec772184fb6f5d47b95056196041f13665f4a3c3bf67d9f7ee7c2?"
            className="aspect-[2.55] object-contain object-center w-[110px] h-[49px] justify-center items-center overflow-hidden shrink-0 max-w-full mb-4"
          />

          <a
            href="mailto:hello@bearhug.co"
            className="text-xl hover:text-secondary mb-2"
          >
            hello@drpaws.care
          </a>
          <a href="tel:+123 456 789" className="text-xl hover:text-secondary">
            +91 96069 94629
          </a>
        </div>

        <div className=" flex flex-col mt-6  items-center md:items-start">
          <p
            style={{ fontFamily: "Roca Bold, sans-serif" }}
            className="text-2xl font-semibold mb-4"
          >
            Company
          </p>

          <Link href="/team" className="text-xl hover:text-secondary">
            Team
          </Link>
          <Link href="#" className="text-xl mt-3 hover:text-secondary">
            Careers
          </Link>
        </div>
        <div className="flex flex-col mt-6  items-center md:items-start">
          <p
            style={{ fontFamily: "Roca Bold, sans-serif" }}
            className="text-2xl font-semibold mb-4 "
          >
            Get Care
          </p>

          <Link href="/services" className="text-xl  hover:text-secondary">
            Services
          </Link>
          <Link href="/clinics" className="text-xl mt-3 hover:text-secondary">
            Locations
          </Link>
          <Link
            href="/membership"
            className="text-xl mt-3 hover:text-secondary"
          >
            Membership
          </Link>
          <Link href="#" className="text-xl mt-3 hover:text-secondary">
            Download app
          </Link>
        </div>
        <div className="flex flex-col mt-6  items-center md:items-start">
          <p
            style={{ fontFamily: "Roca Bold, sans-serif" }}
            className="text-2xl font-semibold mb-4 "
          >
            Social
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xl flex gap-4 items-center justify-center hover:text-secondary">
              <Image src="/instagram.svg" alt="social" height={30} width={30} />
            </Link>
            <Link
              href="#"
              className="text-xl flex gap-4 items-center justify-center hover:text-secondary"
            >
              <Image src="/linkedin.svg" alt="social" height={30} width={30} />
            </Link>
            <Link
              href="#"
              className="text-xl flex gap-4 items-center justify-center hover:text-secondary"
            >
              <Image src="/x.png" alt="social" height={25} width={25} />
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center pb-5">
        &copy; {new Date().getFullYear()}, Dr. Paws Healthcare Private Limited.
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

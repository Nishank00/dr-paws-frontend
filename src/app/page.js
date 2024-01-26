import VerticalTabs from "@/components/pages/home/VerticalTabs"
import ClinicCard from "@/components/pages/clinic/ClinicCard"
import ImageTextHeader from "@/components/pages/home/ImageTextHeader"
import Reviews from "@/components/pages/home/Reviews"
import FriendlyDoctor from "@/components/pages/home/FriendlyDoctor"
import Banner from "@/components/pages/home/Banner"

export default function Home() {
  return (
    <>
      <Banner />
      <div className="body-padding-x mt-5 sm:mt-10">
        <h2 className="text-primary font-medium text-4xl mb-5 md:mb-10 text-center">
          Veterinary care, redesigned to be better
        </h2>
        <ImageTextHeader
          imageUrl={"https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&"}
          header={"A Clinic That Feels Like Home"}
          text={"Our modern clinics make you feel like you never left home, making visits stress-free for you and your pet"}
          imagePosition="left"
          buttonText="See Our Clinics"
        />

        <ImageTextHeader
          imageUrl={"https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&"}
          header={"Memberships that work"}
          text={"Our memberships provide great value care and provide all the services you’re likely to need. Even if you’re facing an emergency, our memberships cover you."}
          imagePosition="right"
          buttonText="Become a Member"
        />

        <ImageTextHeader
          imageUrl={"https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&"}
          header={"Doctors that care"}
          text={"We’re in the business of looking after your best friend. We’ll listen and answer all your questions and treat your pet like our own"}
          imagePosition="left"
          buttonText="Book a Visit"
        />

        <ImageTextHeader
          imageUrl={"https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&"}
          header={"Everything in your control"}
          text={"Book appointments in a few taps, and always stay updated and informed on your pet’s health with our app"}
          imagePosition="right"
          buttonText="Become a Member"
        />

        <ImageTextHeader
          imageUrl={"https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&"}
          header={"Only the necessary care"}
          text={"We’re pet-lovers first and business-people second. No over-testing, prescribing unnecessary medicines, or pushing procedures that are not needed"}
          imagePosition="left"
          buttonText="Book a Visit"
        />

        <ImageTextHeader
          imageUrl={"https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&"}
          header={"All the services you need, under one roof"}
          text={"Aside from our world-class veterinary care, our clinics offer grooming, boarding, sitting, nutritionist, and training services"}
          imagePosition="right"
          buttonText="See Our Services"
        />
      </div>

      <h2 className="text-primary font-medium text-4xl mb-6 text-center">Check out the places<br /> we call home</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 body-padding-x">
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
      </div>

      <div className="body-padding-x">
        <VerticalTabs />
      </div>

      <div className="body-padding-x">
        <Reviews />
      </div>

      <div className="body-padding-x">
        <FriendlyDoctor />
      </div>

      <div className="w-full flex  md:mt-20 flex-col items-center justify-center body-padding-x">
        <div className="text-slate-700  text-center text-3xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
          Still have questions?
        </div>
        <div className="text-slate-700 text-center text-sm leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
          If your question is still not answered, please get in touch and we’d
          be happy to help
        </div>
      </div>

    </>
  )
}

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="sm:mx-6 mb-6">
      <div className="bg-[#FFF7E6] sm:mx-auto max-w-screen-2xl rounded-4xl flex flex-col justify-between pt-12  mx-4 px-4 sm:px-24">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 ">
          {/* Left side */}
          <div className="flex-1">
            <Link to="/" className="flex items-center">
              <img
                src="https://framerusercontent.com/images/V5tIwQyz2S0O66AuNJHLQeGtQ.png"
                className="mr-3 h-12"
                alt="Logo"
              />
            </Link>
            <h2 className="text-4xl font-medium my-6">Brewed to perfection</h2>

            <div className="mb-4">
              <p className="font-semibold py-3">Opening hours</p>
              <p className="py-1">Mon - Thu: 11:00 AM - 9:00 PM</p>
              <p className="py-1">Fri - Sat: 11:00 AM - 10:00 PM</p>
              <p className="py-1">Sun: 12:00 PM - 8:00 PM</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold py-3">Phone:</p>
              <p>(985) 327 - 6543</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold py-3">Location:</p>
              <p className="py-1">Burger Haven</p>
              <p className="py-1">123 Burger Lane</p>
              <p className="py-1">Food City, IC 12345</p>
            </div>

            <div className="flex gap-3 text-lg mt-4">
              <Link href="#">
                <RiInstagramFill />
              </Link>
              <Link href="#">
                <FaFacebook />
              </Link>
              <Link href="#">
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-black hidden md:block" />

          {/* Right side - Map */}
          <div className="flex-1 ">
            <iframe
              title="map"
              className="w-full h-full rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5439202586915!2d4.895167!3d52.370216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c020000001%3A0x000000000000000!2sAmsterdam!5e0!3m2!1sen!2snl!4v1615201800000!5m2!1sen!2snl"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* div */}
        <div className="text-xs flex items-center flex-col sm:flex-row gap-y-2 sm:gap-0  sm:justify-between pt-8 pb-6 ">
          <p className="">
            © 2024 —{" "}
            <Link href="#" className="">
              Test Junction @Riz
            </Link>
          </p>
          <div className="flex justify-center gap-3 ">
            <Link
              href="#"
              className={`${(isActive) => (isActive ? "underline" : "")}`}
            >
              Privacy Policy
            </Link>
            <Link href="#">Cookies</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

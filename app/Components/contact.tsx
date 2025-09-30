import React from 'react';
import Image from 'next/image';
import phone from "../public/Images/phone.svg";
import map from "../public/Images/location-dot-solid.svg";
import email from "../public/Images/envelope-solid.svg";

export default function Contact() {
  return (
    <div className="container mt-12 md:mt-16 lg:mt-24 mb-16 md:mb-24 lg:mb-32 mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center text-black mb-6 md:mb-8">
        Con<span>tact Info</span>
      </h2>
      
      {/* Grid for contact info and map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
        {/* Contact Information */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8 w-full max-w-[600px] mx-auto lg:mx-0 lg:ml-auto lg:mr-8">
          {/* Phone */}
          <div className="flex items-start p-4 md:p-6 rounded-lg duration-500 hover:shadow-lg w-full bg-gray-900">
            <div className="flex-shrink-0">
              <Image src={phone} alt="Phone" className="w-12 h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]" />
            </div>
            <div className="ml-4 md:ml-6 min-w-0 flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-white">Phone</h3>
              <a className="mt-1 md:mt-2 text-sm md:text-base text-white hover:underline block break-words" href="tel:+16474297279">
                (647) 429-7279
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start p-4 md:p-6 rounded-lg duration-500 hover:shadow-lg w-full bg-gray-900">
            <div className="flex-shrink-0">
              <Image src={email} alt="Email" className="w-12 h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]" />
            </div>
            <div className="ml-4 md:ml-6 min-w-0 flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-white">Email</h3>
              <a className="mt-1 md:mt-2 text-sm md:text-base text-white hover:underline block break-words" href="mailto:General@fhasolutions.ca">
                General@fhasolutions.ca
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start p-4 md:p-6 rounded-lg duration-500 hover:shadow-lg w-full bg-gray-900">
            <div className="flex-shrink-0">
              <Image src={map} alt="Location" className="w-12 h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]" />
            </div>
            <div className="ml-4 md:ml-6 min-w-0 flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-white">Location</h3>
              <a className="mt-1 md:mt-2 text-sm md:text-base text-white hover:underline block break-words" href="https://maps.app.goo.gl/rgmUGnNkPvLFVNW6A">
                Main Office: 25 Sheppard Ave W Suite #300, North York, ON M2N 6S6
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.5752150618864!2d-79.41467898761597!3d43.7609171453358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d63630f7429%3A0x8e8c1b22ab5ac319!2s25%20Sheppard%20Ave%20W%2C%20North%20York%2C%20ON%20M2N%206S6%2C%20Canada!5e0!3m2!1sen!2seg!4v1727606085923!5m2!1sen!2seg"
              title="Google Maps Location"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[435px] rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
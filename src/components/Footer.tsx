"use client";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className=" text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* About Us Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          Starting as a hardware store, we’ve expanded into cattle feed, building materials, and PVC products, all while maintaining a commitment to quality and customer satisfaction.
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <MapPin size={18} className="text-white" />
              Singh Building Material Store, Luharli, Bulandshahr, U.P.
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-white" />
              asch200@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-white" />
              (+91 ) 8755477002
            </p>
          </div>
        </div>

        {/* Google Map Section */}
        <div id='map'>
          <h2 className="text-white text-lg font-semibold mb-4">Our Location</h2>
          <div className="w-full h-56 overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://maps.google.com/maps?width=420&amp;height=300&amp;hl=en&amp;q=Singh%20Building%20Material%20Luharli+(Singh%20Building%20Material)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Media Links with Hover Effects */}
      <div className="flex justify-center space-x-6 mt-8">
        <a
          href="https://www.facebook.com/share/19pPLHXjWC/"
          className="transition-colors duration-300 text-gray-400 hover:text-blue-500"
          target='_blank'
        >
          <Facebook size={24} />
        </a>
        <a
          href="https://x.com/Nitish_Edits2?t=zMj6yZxsPgAojrVLf56RMw&s=08"
          className="transition-colors duration-300 text-gray-400 hover:text-blue-400"
          target='_blank'
        >
          <Twitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/ashish_chauhan29/?hl=en"
          className="transition-colors duration-300 text-gray-400 hover:text-pink-500"
          target='_blank'
        >
          <Instagram size={24} />
        </a>
      </div>

      {/* Footer Bottom Text */}
      <p className="text-center text-xs pt-8">© 2024 singhbuildingmaterial. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

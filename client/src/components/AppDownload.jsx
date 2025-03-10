import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-20">
      <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg ">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 max-w-md">
            Download Mobile App For Better Experience
          </h1>
          <div className="flex gap-4">
            <a href="#" className="inline-block">
              <img className="h-12" src={assets.play_store} alt="" />
            </a>
            <a href="#" className="inline-block">
              <img className="h-12" src={assets.app_store} alt="" />
            </a>
          </div>
        </div>
        <img
          className="absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden"
          src={assets.app_main_img}
          alt=""
        />
      </div>
    </div>
  
    //use sentiry for error handling
    //clerk for autenticatioon and autorization for the app
    //tailwind css for styling purposes
    // react-router for handiling the routes
    // axios for making HTTP requests
    // cloudinary for image uploading and storage
    // react-toastify for displaying success and error notifications
    // react-select for handling dropdowns
    // react-virtualized for efficient rendering of large lists
    // recharts for creating interactive and engaging graphs
    // sentry for error tracking and debugging
    // lodash for utility functions
    // react-i18next for internationalization
    // react-helmet for managing document head tags
    // react-helmet-async for managing document head tags asynchronously
    // react-player for playing videos and audio
    // react-markdown for rendering markdown content
    // react-icons for using SVG icons
    // react-dropzone for handling file uploads
    // react-csv for parsing CSV data
    // react-pdf for rendering PDFs
    // react-quill for creating rich text editors
  );
};

export default AppDownload;

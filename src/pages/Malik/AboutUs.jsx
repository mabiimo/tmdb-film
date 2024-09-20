import React from "react";

const AboutUs = () => {
  return (
    <div
      className="hero min-h-screen flex items-center justify-center bg-[#7fb3cc]"
      style={{
        backgroundImage:
          "url(https://www.mastersystem.co.id/content/dam/assets/aboutus/bg-contactus.png)",
        backgroundSize: "cover", // Ensure the background image covers the entire area
        backgroundPosition: "center", // Center the background image
      }}
    >
      <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8">
        <div className="text-white md:w-3/4 mx-auto ">
          <p className="text-xl font-semibold text-left">Contact Us</p>
          <p className="text-lg text-left font-bold">
            PT MASTERSYSTEM INFOTAMA Tbk
          </p>
          <p className="mb-5 text-left">
            Sudirman 7.8 Tower 1, 25th Floor Jl. Jend. Sudirman Kav 7-8 Jakarta
            Pusat - Indonesia
          </p>
          <div className="flex flex-col mb-4">
            <div className="flex justify-between mb-2">
              <p>Phone</p>
              <p>+62 21 3973 1111</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Message</p>
              <p>+62 852 9000 3973</p>
            </div>
            <div className="flex justify-between">
              <p>Fax</p>
              <p>+62 21 3973 1212</p>
            </div>
          </div>
        </div>
        <div className="text-white md:w-3/4 mx-auto">
          <h1 className="text-4xl font-bold mb-4">How we can help</h1>
          <p className="mb-5">
            Feel free to fill in the form below or visit our head office for
            further information or assistance from us.
          </p>
          <p className="mb-5">Looking forward to hearing from you.</p>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs bg-white"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs bg-white"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs bg-white"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs bg-white"
              />
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-white"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

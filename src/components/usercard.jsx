import React from "react";


const Usercard = () => {
  // Static user details
  const profilePhoto = "../photo/20241229_213058.jpg";
  const name = "Abhinivesh S";
  const email = "abhisa8888@gmail.com";
  const phone = "+1 234 567 890";
  const address = "123 Main St, Cityville, USA";

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-72 text-center border border-gray-200">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-2xl mx-auto border-2 border-gray-300"
      />
      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-gray-600 text-sm">{email}</p>
      <p className="text-gray-600 text-sm">{phone}</p>
      <p className="text-gray-600 text-sm mt-1">{address}</p>
    </div>
  );
};

export default Usercard;

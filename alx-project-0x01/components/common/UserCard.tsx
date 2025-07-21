import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
    id,
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-800 mb-1">{id}-{name}</h2>
      <p className="text-sm text-gray-500 mb-4">@{username}</p>

      <div className="text-sm text-gray-700 space-y-2">
        <p>
          <span className="font-medium">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-medium">Website:</span>{" "}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </p>

        <div>
          <p className="font-medium">Address:</p>
          <p className="ml-2">
            {address.street}, {address.suite},<br />
            {address.city}, {address.zipcode}
          </p>
        </div>

        <div>
          <p className="font-medium">Company:</p>
          <p className="ml-2">{company.name}</p>
          <p className="ml-2 italic text-gray-500">{company.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

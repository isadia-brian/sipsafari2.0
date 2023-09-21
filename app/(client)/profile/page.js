"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { LiaUserAltSolid } from "react-icons/lia";
import { Avatar } from "antd";
import { BsArrowRightShort } from "react-icons/bs";

const Profile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  const handleBackClick = () => {
    router.back();
  };
  return (
    <div className="px-5 py-6 w-full">
      <div className="w-full">
        <button className="flex items-center space-x-3 ">
          <HiOutlineArrowLeft onClick={handleBackClick} />
          <p className="text-lg">My account</p>
        </button>

        {session ? (
          <div className="mt-5">
            <div className="bg-yellow-400/70 flex items-center space-x-3 w-full px-2 py-[6px] rounded-lg">
              <Avatar size="large" />
              <div className="flex flex-col">
                <p className="font-bold">Brian Lusigi</p>
                <Link
                  href="/profile/personal-details"
                  className="text-xs text-slate-500 underline underline-offset-1 -mt-1 flex items-center space-x-1"
                >
                  <p>personal details</p>
                  <BsArrowRightShort />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[600px]  flex flex-col justify-center items-center">
            <LiaUserAltSolid className="text-[130px] mb-1 " />
            <p className="mb-5">Log In or Sign Up for an Account </p>
            <div className="flex flex-col space-y-3 w-[220px]">
              <Link
                href="/login"
                className="bg-black font-semibold text-white w-full py-3 rounded-2xl flex items-center justify-center"
              >
                Log in
              </Link>
              <div className="w-full text-center">
                <p>Or</p>
              </div>
              <Link
                href="/signup"
                className="bg-black font-semibold text-white w-full py-3 rounded-2xl flex items-center justify-center"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

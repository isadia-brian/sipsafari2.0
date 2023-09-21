"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { LiaUserAltSolid } from "react-icons/lia";
import axios from "axios";

const Personal = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleBackClick = () => {
    router.back();
  };

  useEffect(() => {
    if (!session) {
      return false;
    } else {
      async function getData() {
        const res = await axios.get("/api/auth/users");
        console.log(res.data);
      }

      getData();
    }
  }, []);
  return (
    <div className="px-5 py-6 w-full">
      <div className="w-full">
        <button className="flex items-center space-x-3 ">
          <HiOutlineArrowLeft onClick={handleBackClick} />
          <p className="text-lg">Personal Details</p>
        </button>

        {session ? (
          <div className="mt-5 flex flex-col space-y-1">
            <div className=" flex flex-col w-full px-2 py-[6px] rounded-lg">
              <label htmlFor="name" className="text-slate-400 font-bold">
                Name
              </label>
              <div>
                <input
                  type="text"
                  className="border-b-[0.4px] border-slate-500 outline-none w-full"
                />
                <Link href="/profile/personal-details"></Link>
              </div>
            </div>
            <div className=" flex flex-col w-full px-2 py-[6px] rounded-lg">
              <label htmlFor="email" className="text-slate-400 font-bold">
                Email
              </label>
              <div>
                <input
                  type="text"
                  className="border-b-[0.4px] border-slate-500 outline-none w-full"
                />
                <Link href="/profile/personal-details"></Link>
              </div>
            </div>
            <div className=" flex flex-col w-full px-2 py-[6px] rounded-lg">
              <label htmlFor="mobile" className="text-slate-400 font-bold">
                Mobile
              </label>
              <div>
                <input
                  type="text"
                  className="border-b-[0.4px] border-slate-400 outline-none w-full"
                />
                <Link href="/profile/personal-details"></Link>
              </div>
            </div>
            <div className=" flex flex-col w-full px-2 py-[6px] rounded-lg">
              <label htmlFor="gender" className="text-slate-400 font-bold">
                Gender
              </label>
              <div>
                <input
                  type="text"
                  className="border-b-[0.4px] border-slate-500 outline-none w-full"
                />
                <Link href="/profile/personal-details"></Link>
              </div>
            </div>
            <div className=" flex flex-col w-full px-2 py-[6px] rounded-lg">
              <label htmlFor="dob" className="text-slate-400 font-bold">
                Date of birth
              </label>
              <div>
                <input
                  type="text"
                  className="border-b-[0.4px] border-slate-500 outline-none w-full"
                />
                <Link href="/profile/personal-details"></Link>
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

export default Personal;

"use client";

import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { AiOutlineCloseCircle } from "react-icons/ai";

const gtSuper = localFont({
  src: "../../../public/fonts/gt-super/gt-super.otf",
});

const LogIn = () => {
  return (
    <div className="h-screen w-full bg-white ">
      <div className="w-full h-screen flex flex-col items-center justify-between">
        <div className="w-full flex justify-end pt-8 pr-5">
          <Link href="/" className="cursor-pointer">
            <AiOutlineCloseCircle className="text-[28px] text-slate-400" />
          </Link>
        </div>
        <div className="w-full flex flex-col items-center  ">
          <h4
            className={`${gtSuper.className} text-slate-700 pb-2 font-semibold tracking-wide text-[26px]`}
          >
            Welcome back.
          </h4>
          <p className="text-sm text-slate-600 pb-10">
            Choose one of the options below to log in.
          </p>
          <div className=" w-full flex justify-center items-center flex-col space-y-4 pb-8">
            <Link
              href="#"
              className="flex items-center  px-3  py-[14px] border-[0.2px] w-[280px] border-slate-400 rounded-full"
            >
              <Image
                src="/images/google.png"
                width={18}
                height={18}
                className="object-cover"
              />
              <p className="text-center w-full">Sign in with Google</p>
            </Link>
            <Link
              href="#"
              className="flex items-center  px-3 py-[14px] border-[0.2px] w-[280px] border-slate-400 rounded-full"
            >
              <Image
                src="/images/facebook.png"
                width={20}
                height={20}
                className="object-cover"
              />
              <p className="text-center w-full">Sign in with Facebook</p>
            </Link>
            <Link
              href="/login/emaillogin"
              className="flex items-center  px-3 py-[14px] border-[0.2px] w-[280px] border-slate-400 rounded-full"
            >
              <Image
                src="/images/mailer.png"
                width={22}
                height={22}
                className="object-cover"
              />
              <p className="text-center w-full"> Sign in with Email</p>
            </Link>
          </div>
          <div className="pb-12">
            <p className="text-[15px] text-slate-900">
              Don't have an account?{" "}
              <span>
                <Link href="/signup" className="font-bold">
                  Sign up
                </Link>
              </span>
            </p>
          </div>
          <div className="">
            <p className="text-[12px] text-slate-500">
              Need help recovering your account?{" "}
              <span>
                <Link href="#" className="font-medium underline">
                  Get help
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center pb-24">
          <p className="text-xs max-w-[250px] text-center leading-relaxed text-slate-500">
            Click "Sign In" to agree to Sipsafari's{" "}
            <span>
              <Link href="#" className="underline">
                Terms of Service
              </Link>
            </span>{" "}
            and acknowledge that Sipsafari's{" "}
            <span>
              <Link href="#" className="underline">
                Privacy Policy{" "}
              </Link>
            </span>
            applies to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

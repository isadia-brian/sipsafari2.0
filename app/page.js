"use client";
import { useEffect, useState } from "react";
import SplashScreen from "@/app/components/SplashScreen";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { categories, liqours } from "../data";
import HighlightCard from "@/app/components/HighlightCard";
import CategoryCard from "@/app/components/CategoryCard";
import PopularCard from "@/app/components/PopularCard";
import ForYouCard from "@/app/components/ForYouCard";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import {
  ArrowRightOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Navigation from "./components/Navigation";

export default function Home() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const user = session?.user.validateUser.email;
  console.log(user);

  const handleSignOut = () => {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };

  useEffect(() => {
    const splashScreenShown = localStorage.getItem("splashScreenShown");

    if (!splashScreenShown) {
      setOpen(true);
    }
  }, []);

  const handleClick = () => {
    setOpen(false);
    localStorage.setItem("splashScreenShown", true);
  };
  return (
    <main className="relative h-full w-full ">
      {open ? (
        <div className="absolute w-full top-0 z-50 left-0 h-full bg-white">
          <SplashScreen handleClick={handleClick} />
        </div>
      ) : (
        <div className="h-full relative ">
          <Navigation />
          <div className="relative h-full mt-[70px] px-5 py-8 md:px-12 ">
            <div className="w-full md:w-[600px] md:mx-auto border-[0.2px] my-4 mb-4 md:my-8 flex rounded-2xl h-full border-gray-400 shadow-md items-center px-3">
              <MagnifyingGlassIcon className="h-3 w-4 md:h-5 md:w-6  text-red-500 " />
              <input
                type="text"
                className="outline-none border-none bg-transparent text-sm placeholder:text-xs md:placeholder:text-sm px-2 py-3 "
                placeholder="Search for drinks..."
                aria-label="search input"
              />
            </div>
            <div className="mb-3 ">
              <div>
                <h1 className="font-light text-lg ">Hi, {user}</h1>
                <h1 className="font-medium text-lg ">
                  Find Your Favorite Drink
                </h1>
              </div>
              <div className="flex items-center space-x-3 overflow-x-scroll no-scrollbar">
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
              </div>
            </div>

            <div className="">
              <div className="flex items-center mb-3">
                <div className="h-[0.8px] w-full bg-slate-400 flex-grow"></div>
                <div className="">
                  <h1 className="font-light flex-grow text-[10px] uppercase text-black">
                    Categories
                  </h1>
                </div>

                <div className="h-[0.8px] w-full bg-slate-400"></div>
              </div>
              <div className="mb-3">
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4">
                  {categories?.map(({ title, image }, index) => (
                    <CategoryCard title={title} key={index} image={image} />
                  ))}
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="h-[0.8px] w-full bg-slate-400 flex-grow"></div>
                <div className="flex space-x-1">
                  <h1 className="font-light flex-grow text-[10px] uppercase text-black">
                    Popular
                  </h1>
                  <h1 className="font-light flex-grow text-[10px] uppercase text-black">
                    Drinks
                  </h1>
                </div>

                <div className="h-[0.8px] w-full bg-slate-400"></div>
              </div>
              <div className="mb-3">
                <div className="flex items-center space-x-3 overflow-x-scroll no-scrollbar mt-1">
                  {liqours?.map(({ image, title, amount, quantity }, index) => {
                    return (
                      <PopularCard
                        key={index}
                        image={image}
                        title={title}
                        amount={amount}
                        quantity={quantity}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="h-[0.8px] w-full bg-slate-400 flex-grow"></div>
                <div className="flex space-x-1">
                  <h1 className="font-light flex-grow text-[10px] uppercase text-black">
                    For
                  </h1>
                  <h1 className="font-light flex-grow text-[10px] uppercase text-black">
                    You
                  </h1>
                </div>

                <div className="h-[0.8px] w-full bg-slate-400"></div>
              </div>

              <div>
                <div className="mt-1 space-y-1">
                  {liqours?.map(
                    ({ image, title, amount, quantity, rating }, index) => {
                      return (
                        <ForYouCard
                          key={index}
                          image={image}
                          title={title}
                          amount={amount}
                          quantity={quantity}
                          rating={rating}
                        />
                      );
                    }
                  )}
                </div>
              </div>
              <div>
                <div className="relative h-32 md:h-[350px] mt-6 w-[90%] mx-auto rounded-lg ">
                  <Image
                    src="/images/raising-small.webp"
                    alt="Liqour at Home"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="bg-gray-500 w-fit rounded-lg text-white px-3 py-2 flex items-center justify-center space-x-4 text-sm"
            >
              <p>SIGN OUT</p>

              <p className="text-white">
                <ArrowRightOnRectangleIcon className="h-5 w-5 text-white " />
              </p>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

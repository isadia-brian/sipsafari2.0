"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Avatar } from "antd";
import { useRouter } from "next/navigation";

import Image from "next/image";

const Navigation = ({ handleOpen }) => {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 w-full  flex items-center bg-gray-200 justify-between px-4 py-5 mb-5 left-0">
      <div>
        <div className="relative h-[55px] w-[60px]">
          <Image src="/images/logo.png" fill className="object-cover" />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Avatar
          style={{ backgroundColor: "white" }}
          size="large"
          onClick={() => router.push("/profile")}
        />
        <ShoppingCartIcon className="h-8" />
      </div>
    </div>
  );
};

export default Navigation;

import React from "react";
import { Montserrat } from "@next/font/google";
import { BsPrinter } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function Detail() {
  return (
    <div className={` h-auto flex font-sans px-16 py-2 flex-col flex-1`}>
      <div className="flex flex-col justify-center items-center flex-1 ">
        <p className="mt-4 font-bold text-3xl ">Website Hitung Otomatis</p>
        <p className="font-medium text-sm mt-1">
          By : Muhammad Wildan Romiza Fauwaz
        </p>
        <p className="text-xs mt-1">Categories : Academic </p>
        <p className="text-xs mt-1">
          Project Time Elapsed : 20 Februari 2023 - 20 December 2023{" "}
        </p>
        <Image
          src={
            "https://lh5.googleusercontent.com/8gwdZIlrONenDA5NJsi6tLsSFXOijfkzeOOVTEG8P1u2lPntRLKdgL6ozNkldkvb8Fcf801B6s2pj2_dNtoaVTTKDlHSZ6ViSwgZZPi8JtlbUUKGiiyvInV2IbC_49BjB1xgcKgc"
          }
          width={900}
          height={600}
          className="w-1/2 object-cover  mt-8"
        />
      </div>

      <div className="flex flex-col items-start flex-1 p-32">
        <p className="text-xs mt-19">at : 20 Februari 2023 </p>
        <p className="text-justify ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
          ullamcorper velit. Duis consequat ipsum at iaculis euismod. Donec non
          finibus ligula. Quisque volutpat magna non mi auctor consequat. Aenean
          metus mi, fringilla vel varius eget, scelerisque nec sem. Praesent at
          ligula non neque pulvinar molestie non ut lacus. Vestibulum quis
          vulputate odio, at placerat risus. Nunc semper dolor sit amet neque
          volutpat sagittis. Maecenas eget est bibendum, lobortis arcu sed,
          cursus ipsum. Pellentesque vitae vehicula lacus. Morbi blandit libero
          eget turpis porta, sed dapibus velit iaculis. Integer imperdiet est
          vitae pellentesque dignissim. In hac habitasse platea dictumst. Nulla
          laoreet urna in est rhoncus, sit amet ornare neque egestas. Phasellus
          id viverra massa, eget posuere felis. Quisque eu nunc nec ipsum
          sodales sodales. Pellentesque non aliquet felis. Vestibulum lectus
          purus, pretium vel nulla ut, iaculis malesuada orci. Suspendisse
          potenti. Maecenas egestas faucibus dui, ut vestibulum nunc porta nec.
          Nunc interdum ante at turpis porta, convallis blandit ante dapibus.
        </p>
        <Image
          src={
            "https://lh5.googleusercontent.com/8gwdZIlrONenDA5NJsi6tLsSFXOijfkzeOOVTEG8P1u2lPntRLKdgL6ozNkldkvb8Fcf801B6s2pj2_dNtoaVTTKDlHSZ6ViSwgZZPi8JtlbUUKGiiyvInV2IbC_49BjB1xgcKgc"
          }
          width={900}
          height={600}
          className="w-1/2 object-cover  mt-8 self-center"
        />
        <p className="text-justify mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
          ullamcorper velit. Duis consequat ipsum at iaculis euismod. Donec non
          finibus ligula. Quisque volutpat magna non mi auctor consequat. Aenean
          metus mi, fringilla vel varius eget, scelerisque nec sem. Praesent at
          ligula non neque pulvinar molestie non ut lacus. Vestibulum quis
          vulputate odio, at placerat risus. Nunc semper dolor sit amet neque
          volutpat sagittis. Maecenas eget est bibendum, lobortis arcu sed,
          cursus ipsum. Pellentesque vitae vehicula lacus. Morbi blandit libero
          eget turpis porta, sed dapibus velit iaculis. Integer imperdiet est
          vitae pellentesque dignissim. In hac habitasse platea dictumst. Nulla
          laoreet urna in est rhoncus, sit amet ornare neque egestas. Phasellus
          id viverra massa, eget posuere felis. Quisque eu nunc nec ipsum
          sodales sodales. Pellentesque non aliquet felis. Vestibulum lectus
          purus, pretium vel nulla ut, iaculis malesuada orci. Suspendisse
          potenti. Maecenas egestas faucibus dui, ut vestibulum nunc porta nec.
          Nunc interdum ante at turpis porta, convallis blandit ante dapibus.
        </p>
        <p className="text-justify mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
          ullamcorper velit. Duis consequat ipsum at iaculis euismod. Donec non
          finibus ligula. Quisque volutpat magna non mi auctor consequat. Aenean
          metus mi, fringilla vel varius eget, scelerisque nec sem. Praesent at
          ligula non neque pulvinar molestie non ut lacus. Vestibulum quis
          vulputate odio, at placerat risus. Nunc semper dolor sit amet neque
          volutpat sagittis. Maecenas eget est bibendum, lobortis arcu sed,
          cursus ipsum. Pellentesque vitae vehicula lacus. Morbi blandit libero
          eget turpis porta, sed dapibus velit iaculis. Integer imperdiet est
          vitae pellentesque dignissim. In hac habitasse platea dictumst. Nulla
          laoreet urna in est rhoncus, sit amet ornare neque egestas. Phasellus
          id viverra massa, eget posuere felis. Quisque eu nunc nec ipsum
          sodales sodales. Pellentesque non aliquet felis. Vestibulum lectus
          purus, pretium vel nulla ut, iaculis malesuada orci. Suspendisse
          potenti. Maecenas egestas faucibus dui, ut vestibulum nunc porta nec.
          Nunc interdum ante at turpis porta, convallis blandit ante dapibus.
        </p>
      </div>
      <div className="fixed bottom-10 right-10 flex flex-col">
        <button className="  bg-primary  text-white p-6 text-xl font-semibold rounded-full mb-2">
          <BsPrinter />
        </button>
        <Link href={"/clientzone/project-list/1"}>
          <button className="  bg-primary  text-white p-6 text-xl font-semibold rounded-full ">
            <AiOutlineEdit />
          </button>
        </Link>
      </div>
    </div>
  );
}
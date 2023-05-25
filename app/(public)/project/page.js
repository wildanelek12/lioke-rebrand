"use client";
import Image from "next/image";
import { Montserrat } from "@next/font/google";
import { FaBeer } from "react-icons/fa";
import Link from "next/link";
import IconButtonDescription from "@/components/icon-project-desc";
import SelectCategoryProject from "@/components/select-category-project";
import ProjectCard from "@/components/project-card";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import ModalSkill from "@/components/modal-desc/modal-skill";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import ModalWork from "@/components/modal-desc/modal-work";
import {
  showModalEducation,
  showModalInterest,
  showModalSkill,
  showModalSocialMedia,
  showModalWork,
  showMonthContent,
  showProjectContent,
  showYearContent,
} from "@/recoil/atom";
import ModalEducation from "@/components/modal-desc/modal-education";
import ModalInterest from "@/components/modal-desc/modal-interest";
import ModalSosmed from "@/components/modal-desc/modal-sosmed";
import CardYear from "@/components/year-card";
import CardMonth from "@/components/month-card";
import SelectYear from "@/components/select-step-project/select-year";
import SelectMonth from "@/components/select-step-project/select-month";

export default function Home() {
  let setSkillOpen = useSetRecoilState(showModalSkill);
  let setWorkOpen = useSetRecoilState(showModalWork);
  let setModalEducationOpen = useSetRecoilState(showModalEducation);
  let setModalIntertestOpen = useSetRecoilState(showModalInterest);
  let setModalSocialMediaOpen = useSetRecoilState(showModalSocialMedia);
  const [isShowMonthContent, setShowMonthContent] =
    useRecoilState(showMonthContent);
  const [isShowYearContent, setShowYearContent] =
    useRecoilState(showYearContent);
  const [isShowProjectContent, setIsShowProject] =
    useRecoilState(showProjectContent);

  const renderSelectContent = () => {
    if (isShowYearContent) {
      return <SelectYear></SelectYear>;
    } else if (isShowMonthContent) {
      return <SelectMonth></SelectMonth>;
    } else if (isShowProjectContent) {
      return (
        <div className="grid lg:grid-cols-5 mx-8 md:grid-cols-3 sm:grid-cols-1">
          <ProjectCard></ProjectCard>
        </div>
      );
    }
  };

  return (
    <>
      <div className={` h-auto flex font-sans  flex-col flex-1 mb-8`}>
        <div
          className="flex flex-col justify-center items-center flex-1 py-16"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0,0.7), rgba(0, 0, 0,0.3)),url("/bg-profile.jpg")`,
            height: "fit-content",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain,cover",
          }}
        >
          <Image
            src={
              "https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
            }
            width={1200}
            height={1200}
            className="rounded-full w-36 h-36 object-cover "
          />
          <p className="mt-4 font-bold text-4xl text-white tracking-wide">
            M Wildan Romiza
          </p>
          <p className="font-semibold text-sm text-white ">Programmer</p>
          <p className="font-normal text-normal text-white w-1/4 text-center mt-4">
            I am a front-end programmer who is experienced and skilled in using
            Next.js technology. I enjoy creating attractive and easy-to-use user
            interfaces using a combination of HTML, CSS, and JavaScript.{" "}
          </p>
          <div className="flex flex-row space-x-4 mt-4 ">
            <div onClick={() => setSkillOpen(true)}>
              <IconButtonDescription src="/skill.svg" />
            </div>
            <div onClick={() => setWorkOpen(true)}>
              <IconButtonDescription src="/work.svg" />
            </div>
            <div onClick={() => setModalEducationOpen(true)}>
              <IconButtonDescription src="/education.svg" />
            </div>
            <div onClick={() => setModalIntertestOpen(true)}>
              <IconButtonDescription src="/interest.svg" />
            </div>
            <div onClick={() => setModalSocialMediaOpen(true)}>
              <IconButtonDescription src="/sosmed.svg" />
            </div>
          </div>
        </div>
        <div className="font-medium text-center mt-8">
          <p className="font-extrabold text-xl">Portofolio's</p>
        </div>
        <div className="flex h-0.5 mt-4 bg-gray-200 w-auto mx-16" />
        <div>{renderSelectContent()}</div>
      </div>
      <ModalSkill />
      <ModalWork />
      <ModalEducation />
      <ModalInterest />
      <ModalSosmed />
    </>
  );
}
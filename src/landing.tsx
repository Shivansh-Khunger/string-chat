// import { useState } from "react";
import { LandingText } from "./components/landing/landingText";
import { Username } from "./components/landing/username";
import { Outlet } from "react-router-dom";

export function Landing() {
  return (
    <>
      <div className="flex h-screen justify-center">
        <div className="flex items-center justify-center align-middle">
          <div className="animate-fade-up rounded-[84px] border border-x-2 border-b-[6px] border-black bg-slate-300 animate-delay-200 animate-duration-[750ms] animate-once ">
            <LandingText />
            <Username />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

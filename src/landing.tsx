import { useState } from "react";
import { LandingText } from "./components/landing/landingText";
import { Username } from "./components/landing/username";
import { Outlet } from "react-router-dom";

export function Landing() {

  return (
    <>
      <div className="h-screen flex justify-center">
        <div className="flex justify-center items-center align-middle">
          <div className="bg-slate-300 rounded-full">
            <LandingText />
            <Username />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

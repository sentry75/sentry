"use client";

import { navItems } from "@/data";

import  Waitlist  from "@/components/Waitlist";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Waitlist />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

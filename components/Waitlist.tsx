import EmailForm from "@/components/ui/EmailForm";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { Toaster } from "react-hot-toast";

export default function Waitlist() {
  return (
    <>
      <Toaster />

      <main className="g">

        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            <span className="text-purple">Join the waitlist</span>
            </h1>
            <p></p>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-base text-center relative z-10"><i>
            If you&apos;re excited about our upcoming blog but can&apos;t wait to dive into the latest content,
            we&apos;ve got you covered! By <b>joining our waitlist</b>, you&apos;ll be the first to know wen the blog 
            goes live, giving you exclusive access to fresh articles, insights, and updates. Sign up
            today to stay ahead of the curve and make sure you&apos;re part of our community frm day one.
            <b>We can&apos;t wait to share everything we&apos;ve been working on with you!</b>
            </i></p>

            <EmailForm />
          </div>
          <BackgroundBeams />
        </div>
      </main>
    </>
  );
}

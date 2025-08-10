import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Compass, Info } from "lucide-react";

export default function Landing() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
      >
        <source src="glamp-peaks.mp4" type="video/mp4" />

      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Glamp Peaks Mestia
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10">
          Wake up in the heart of the Caucasus, where snowy peaks kiss the clouds and ancient traditions meet untouched wilderness.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/home">
              <Button
                size="lg"
                className="group relative p-0 min-w-48 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-[length:200%_200%] bg-[position:0%_50%] hover:bg-[position:100%_50%] transition-all duration-500 shadow-[0_0_35px_rgba(34,197,94,0.25)] hover:shadow-[0_0_45px_rgba(34,197,94,0.45)]"
              >
                <span className="relative inline-flex items-center justify-center gap-3 px-8 py-4 w-full rounded-[14px] bg-black/50 backdrop-blur-md text-white font-semibold">
                  <Compass className="w-5 h-5 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                  <span>360° Tour</span>
                </span>
              </Button> 
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="secondary"
                className="group relative p-0 min-w-48 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-blue-700 bg-[length:200%_200%] bg-[position:0%_50%] hover:bg-[position:100%_50%] transition-all duration-500 shadow-[0_0_30px_rgba(13,148,136,0.24)] hover:shadow-[0_0_40px_rgba(13,148,136,0.38)]"
              >
                <span className="relative inline-flex items-center justify-center gap-3 px-8 py-4 w-full rounded-[14px] bg-black/40 backdrop-blur-md text-white font-semibold">
                  <Info className="w-5 h-5 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                  <span>About</span>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BackgroundGrid from "@/components/BackgroundGrid";
import DumbbellMonitor from "@/components/DumbbellMonitor";

export default function LoginPage() {
  const cardRef = useRef<HTMLDivElement>(null);

  // GSAP entrance animation (combined + improved)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".left-panel", {
      x: -50,
      opacity: 0,
      duration: 1,
    }).from(
      ".login-card",
      {
        x: 50,
        opacity: 0,
        duration: 1,
      },
      "-=0.7"
    );
  }, []);

  // 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <main className="relative min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden">
      <BackgroundGrid />

      {/* subtle vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 z-[1]" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 gap-12">
        
        {/* LEFT PANEL */}
        <div className="left-panel flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left">
          <DumbbellMonitor />

          <h1 className="text-6xl font-black text-white tracking-tighter mt-8">
            FORGE<span className="text-amber-500">.</span>
          </h1>

          <p className="text-zinc-400 mt-4 text-lg max-w-sm">
            Elite facility management. Engineered for performance and precision.
          </p>

          <p className="text-zinc-500 mt-2 text-sm font-mono">
            System Status:{" "}
            <span className="text-emerald-400 font-semibold">ONLINE</span>
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          className="login-card w-full max-w-md p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 shadow-2xl transition-transform duration-300"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome Back
          </h2>
          <p className="text-zinc-400 mb-8">
            Access your facility control center.
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-zinc-300 mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl bg-black/40 border border-zinc-800 px-4 py-3 text-white focus:border-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl bg-black/40 border border-zinc-800 px-4 py-3 text-white focus:border-amber-500 outline-none"
              />
            </div>

            <button className="w-full py-4 rounded-xl bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-all">
              Access Dashboard
            </button>
          </form>

          <p className="text-center text-zinc-500 mt-6 text-sm">
            Need an account?{" "}
            <a href="/register" className="text-amber-500 hover:underline">
              Register now
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
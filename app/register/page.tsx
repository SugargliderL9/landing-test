"use client";
import { useState } from "react";
import BackgroundGrid from "@/components/BackgroundGrid";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden">
      <BackgroundGrid />
      
      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
        <p className="text-zinc-400 mb-8">Join the elite training facility.</p>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-zinc-300 mb-2">Full Name</label>
            <input type="text" className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800 px-4 py-3 text-white outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-zinc-300 mb-2">Email</label>
            <input type="email" className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800 px-4 py-3 text-white outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-zinc-300 mb-2">Password</label>
            <input type="password" className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800 px-4 py-3 text-white outline-none focus:border-amber-500" />
          </div>

          <button className="w-full py-4 rounded-xl bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-all">
            Sign Up
          </button>
        </form>

        <p className="text-center text-zinc-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-amber-500 hover:underline">Log in</a>
        </p>
      </div>
    </main>
  );
}
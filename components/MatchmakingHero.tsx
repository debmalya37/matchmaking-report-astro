"use client"; // Required for useState

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { Star, ArrowRight, Play, Sparkles } from "lucide-react";

// Helper component for the bottom stats bar (Updated for single-row mobile layout)
function HeroStat({ n, label, icon }: { n: string; label: string; icon?: ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
      <div className="grid h-6 w-6 sm:h-10 sm:w-10 place-items-center rounded-full bg-gradient-gold shrink-0">
        {icon ?? <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-ink" />}
      </div>
      <div className="text-left min-w-0">
        <p className="flex items-center gap-0.5 Georgia text-xs sm:text-2xl text-ink font-bold sm:font-normal leading-none whitespace-nowrap">
          {n}
        </p>
        <p className="text-[8px] sm:text-xs uppercase tracking-normal sm:tracking-widest text-ink-soft/60 mt-0.5 truncate">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function MatchmakingHero() {
  // State to toggle between thumbnail and video player
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen lg:min-h-[90vh] overflow-hidden bg-ink flex flex-col">
      
      {/* Background zodiac wheel - Mobile & Desktop Separate Images */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background Image */}
        <Image
          src="/bg-mobile.png"
          alt="Astrology Zodiac Mobile Background"
          fill
          className="block sm:hidden object-cover object-center opacity-90"
          priority
        />

        {/* Desktop Background Image */}
        <Image
          src="/zodiac-wheel.jpg"
          alt="Astrology Zodiac Background"
          fill
          className="hidden sm:block object-cover object-right opacity-90"
          priority
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 lg:via-transparent to-ink/40" />
      </div>

      {/* Soft gold glow behind book */}
      <div
        className="pointer-events-none absolute right-1/2 lg:right-[10%] top-1/2 h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] -translate-y-1/2 translate-x-1/2 lg:translate-x-0 rounded-full opacity-30 blur-[80px] lg:blur-[100px] z-0"
        style={{ background: "color-mix(in oklab, var(--gold) 35%, transparent)" }}
      />

      {/* Main Grid Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:gap-8 px-4 pb-16 lg:pb-32 pt-24 sm:pt-28 lg:pt-36 lg:grid-cols-2 lg:items-center flex-1">
        
        {/* Left: copy */}
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-ink/30 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            <Star className="h-3 w-3 fill-gold text-gold" /> Premium Vedic Report
          </span>
          <h1 className="mt-4 sm:mt-5 Georgia text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white">
            <span className="text-gold">Surbhi Matchmaking Report</span>
            <span className="italic block sm:inline mt-1 sm:mt-0"> for Marriage</span>
          </h1>
          <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base lg:text-lg text-white/90">
            Find Your Perfect Partner with Kundli Matching Report. Hand-analyzed by
            expert Vedic astrologers — Guna Milan, Mangal Dosha, remedies and life-path compatibility.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-white">
            <a
              href="#pricing"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded bg-gradient-to-r from-[#B9861D] to-[#EED39D] px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-[#0A1931] shadow-elegant transition hover:brightness-105"
            >
              Get your Kundli Matchmaking Report
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            
            <button 
              onClick={() => setShowVideo(true)}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded border border-cream/30 bg-ink/40 lg:bg-ink/20 px-5 py-3.5 sm:py-4 text-sm font-medium text-cream backdrop-blur-md transition hover:bg-ink/60"
            >
              <Play className="h-3.5 w-3.5 fill-cream text-cream" /> Watch sample report
            </button>
          </div>
        </div>

        {/* Right: book mockup / video player */}
        <div 
          className="relative flex items-center justify-center cursor-pointer group w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[480px] mx-auto mt-6 sm:mt-8 lg:mt-0 animate-float"
          onClick={() => setShowVideo(true)}
        >
          {showVideo ? (
            /* The Actual Video Player */
            <video 
              src="/hero-video.mp4" 
              controls
              autoPlay
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-2xl lg:rounded-[2rem] shadow-2xl border border-white/10"
            />
          ) : (
            /* The Thumbnail Facade (Original Image + Play Button) */
            <>
              <div className="relative z-10 w-full aspect-[4/5] rounded-2xl lg:rounded-[2rem] shadow-2xl overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/thumbnail3.png" 
                  alt="Couple Match Making Kundali Report sample video"
                  fill
                  className="object-cover object-bottom"
                  priority
                />
              </div>
              
              {/* Large Play Button Overlay - MOVED TO BOTTOM */}
              {/* Changed `items-center` to `items-end` and added `pb-12 sm:pb-24` padding */}
              <div className="absolute z-20 inset-0 flex items-end justify-center pb-20 sm:pb-28 pointer-events-none">
                <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-full p-4 sm:p-5 shadow-2xl transition-all group-hover:bg-white/30 group-hover:scale-110">
                  <Play className="h-8 w-8 sm:h-10 sm:w-10 text-white fill-white translate-x-0.5" />
                </div>
              </div>
            </>
          )}

          {/* Floating badge */}
          <div className="absolute -bottom-4 lg:-bottom-5 left-1/2 z-30 -translate-x-1/2 rounded-full bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs lg:text-sm font-medium text-ink shadow-elegant whitespace-nowrap transition-transform duration-300 group-hover:scale-[1.02]">
            <Sparkles className="mr-1 sm:mr-1.5 inline h-3 w-3 sm:h-4 sm:w-4 text-gold-deep" /> Delivered in 24 hours
          </div>
        </div>
      </div>

      {/* Stats bar - Fully Responsive Single Row for Mobile */}
      <div className="relative lg:absolute bottom-0 left-0 right-0 z-20 mt-auto border-t border-gold/20 bg-white px-2 py-3 sm:px-4 sm:py-5 shadow-elegant backdrop-blur-sm w-full">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-1 sm:gap-6 lg:gap-10">
          <HeroStat n="1.5 lakh +" label="Reports Delivered" />
          
          <div className="h-6 sm:h-10 w-px bg-ink/10 shrink-0" />
          
          <HeroStat 
            n="4.8/5" 
            label="Average Rating" 
            icon={<Star className="h-2.5 w-2.5 sm:h-4 sm:w-4 fill-gold text-gold" />} 
          />
          
          <div className="h-6 sm:h-10 w-px bg-ink/10 shrink-0" />
          
          <HeroStat n="Personalized" label="Report" />
        </div>
      </div>
      
    </section>
  );
}
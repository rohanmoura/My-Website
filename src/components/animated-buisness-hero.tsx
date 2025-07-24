"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useNavigation } from "@/contexts/NavigationContext"

type AnimationType = "light-sweep";

export default function AnimatedBusinessHero() {
    const [isVisible, setIsVisible] = useState(false)
    const [isInView, setIsInView] = useState(false)
    const [currentRole, setCurrentRole] = useState(0)
    // Set default animation type to light-sweep since buttons are removed
    const animationType: AnimationType = "light-sweep"
    const heroRef = useRef<HTMLElement>(null)
    const { navigateWithLoader, isLoaderActive } = useNavigation()

    const conversionPhrases = useMemo(() => [
        { before: "Visitors", after: "Customers" },
        { before: "Clicks", after: "Leads" },
        { before: "Ideas", after: "Products" },
        { before: "Scrolls", after: "Sales" },
        { before: "Traffic", after: "Trust" }
    ], [])

    const cycleRole = useCallback(() => {
        setCurrentRole((prev) => (prev + 1) % conversionPhrases.length)
    }, [conversionPhrases.length])

    const handleStartWebsiteClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault()
        navigateWithLoader('/contact')
    }, [navigateWithLoader])

    useEffect(() => {
        setIsVisible(true)

        // Typewriter effect for roles
        const interval = setInterval(cycleRole, 3000)

        // Intersection Observer for performance
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
            },
            { threshold: 0.1 },
        )

        if (heroRef.current) {
            observer.observe(heroRef.current)
        }

        return () => {
            clearInterval(interval)
            observer.disconnect()
        }
    }, [cycleRole])



    return (
        <section
            ref={heroRef}
            className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden"
            style={{ backgroundColor: "#121212" }}
        >


            {/* Option 1: Light Sweep Animation */}
            {animationType === "light-sweep" && isInView && (
                <>
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `
                linear-gradient(
                  135deg,
                  transparent 0%,
                  rgba(255, 255, 255, 0.15) 45%,
                  rgba(255, 255, 255, 0.2) 50%,
                  rgba(255, 255, 255, 0.15) 55%,
                  transparent 100%
                )
              `,
                            filter: "blur(2px)",
                            animation: "lightSweep 8s ease-in-out infinite",
                            transform: "translateX(-100%) translateY(-100%)",
                        }}
                    />
                    <style jsx>{`
            @keyframes lightSweep {
              0% {
                transform: translateX(-100%) translateY(-100%);
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              50% {
                transform: translateX(100%) translateY(100%);
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translateX(200%) translateY(200%);
                opacity: 0;
              }
            }
            @keyframes sparkleGlow {
              0% {
                transform: scale(1.8) rotate(0deg);
              }
              100% {
                transform: scale(1.8) rotate(360deg);
              }
            }
          `}</style>
                </>
            )}


            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(224, 224, 224, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(224, 224, 224, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                }}
            />

            <div
                className={`
          max-w-3xl w-full p-10 rounded-3xl border backdrop-blur-sm transition-all duration-1000 ease-out relative z-10
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}
          hover:scale-[1.01] hover:shadow-2xl group
        `}
                style={{
                    backgroundColor: "rgba(30, 30, 30, 0.8)",
                    borderColor: "#444444",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
            >
                {/* Subtle Inner Glow on Hover */}
                <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
                    }}
                />

                {/* Main Content */}
                <div className="text-center space-y-8 relative z-10">
                    {/* Primary Headline */}
                    <div className="space-y-4">
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
                            style={{ color: "#E0E0E0" }}
                        >
                            Web Experiences
                            <br />
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                that Convert
                            </span>
                        </h1>

                        {/* Animated Conversion Phrase */}
                        <div
                            className="text-lg md:text-xl font-medium h-8 flex items-center justify-center gap-2"
                        >
                            <span className="transition-all duration-500 ease-in-out" style={{ color: "#E0E0E0" }}>
                                {conversionPhrases[currentRole].before}
                            </span>
                            <span style={{ color: "#B0B0B0" }}>to</span>
                            <span className="transition-all duration-500 ease-in-out" style={{ color: "#E0E0E0" }}>
                                {conversionPhrases[currentRole].after}
                            </span>
                        </div>
                    </div>

                    {/* Strategic Subheadline */}
                    <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium" style={{ color: "#B0B0B0" }}>
                        We design & develop custom websites that are{" "}
                        <span style={{ color: "#E0E0E0" }}>fast, modern, and tailored</span> for growing startups, creators, and
                        digital-first brands.
                    </p>

                    {/* Business-Focused CTAs */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
                        {/* Primary CTA - Lead Generation */}
                        <Button
                            size="lg"
                            className="group px-10 py-4 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden hover:bg-gray-300 hover:shadow-xl"
                            style={{
                                backgroundColor: "#E0E0E0",
                                color: "#121212",
                                boxShadow: "0 8px 25px rgba(224, 224, 224, 0.15)",
                            }}
                            onClick={handleStartWebsiteClick}
                        >
                            <div className="relative mr-2">
                                <Sparkles className="h-5 w-5 relative z-10" />
                                {/* Rotating Glow Effect */}
                                <div
                                    className="absolute inset-0 rounded-full opacity-60"
                                    style={{
                                        background: "conic-gradient(from 0deg, #d946ef, #9333ea, #06b6d4, #22c55e, #eab308, #f43f5e, #d946ef)",
                                        animation: "sparkleGlow 3s linear infinite",
                                        filter: "blur(1px)",
                                        transform: "scale(1.8)"
                                    }}
                                />
                            </div>
                            Let's Build
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>

                        {/* Secondary CTA - Portfolio */}
                        <Button
                            variant="outline"
                            size="lg"
                            className="group px-10 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm bg-transparent hover:bg-gray-800/80 hover:border-gray-500 hover:shadow-lg"
                            style={{
                                borderColor: "#444444",
                                color: "#E0E0E0",
                                backgroundColor: "rgba(30, 30, 30, 0.5)",
                                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                navigateWithLoader('/work');
                            }}
                        >
                            View Projects
                        </Button>
                    </div>

                    {/* Professional Status Badge */}
                    <div className="flex items-center justify-center gap-3 pt-8">
                        <div
                            className="flex items-center gap-2 px-4 py-2"
                            style={{
                                backgroundColor: "rgba(30, 30, 30, 0.6)",
                                borderColor: "#444444",
                            }}
                        >
                            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#4ADE80" }} />
                            <span className="text-sm font-medium" style={{ color: "#B0B0B0" }}>
                                Open for collaborations
                            </span>
                        </div>
                    </div>
                </div>

                {/* Subtle Spark Animation on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-1 h-1 bg-white rounded-full animate-ping" />
                </div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    <div className="w-1 h-1 bg-white rounded-full animate-ping" />
                </div>
            </div>


        </section>
    )
}

"use client";
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { toast } from 'sonner'
import { useNavigation } from '@/contexts/NavigationContext'

const Callback = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-12 lg:py-16" style={{ backgroundColor: "#121212" }}>
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

            <div className="max-w-6xl w-full text-center space-y-12 relative z-10 px-6">
                {/* Main Heading with Gradient */}
                <motion.div
                    className="space-y-3 pt-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Small Responsive Text */}
                    <div className="text-center">
                        <span className="text-lg md:text-xl font-medium bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent">Responsive</span>
                    </div>

                    {/* Large Website Development Text */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight leading-tight text-center px-2">
                        <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent website-development-text">
                            Website Development
                        </span>
                    </h1>
                </motion.div>

                {/* Subheading */}
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="text-lg md:text-xl leading-relaxed font-medium" style={{ color: "#BDBDBD" }}>
                        Backed by years of hands-on experience in website design & development. We bring expertise, innovation, and user-focused design to every project. Let us transform your online presence with intuitive website design that drive growth and engagement.
                    </p>
                </motion.div>

                {/* Input + Button Form with Matchbox Animation */}
                <InputButtonCombo />

                {/* Mobile Responsive Stack */}
                <style jsx>{`
                    @media (max-width: 640px) {
                        .matchbox-container {
                            flex-direction: column !important;
                            border-radius: 12px !important;
                            overflow: hidden !important;
                            height: auto !important;
                        }
                        .matchbox-container input {
                            border-radius: 12px 12px 0 0 !important;
                            border-right: 2px solid #444444 !important;
                            border-bottom: 1px solid #444444 !important;
                            width: 100% !important;
                            outline: none !important;
                            height: 48px !important;
                        }
                        .matchbox-container button {
                            border-radius: 0 0 12px 12px !important;
                            border-left: 2px solid #10B981 !important;
                            border-top: 1px solid #10B981 !important;
                            outline: none !important;
                            height: 48px !important;
                            width: 100% !important;
                            min-width: unset !important;
                        }
                    }
                    .website-development-text {
                        white-space: normal;
                        word-break: break-word;
                        hyphens: auto;
                    }
                    @media (min-width: 1600px) {
                        .website-development-text {
                            white-space: nowrap;
                        }
                    }
                `}</style>
            </div>
        </section>
    )
}

// Matchbox Style Input-Button Component
const InputButtonCombo = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [mobileNumber, setMobileNumber] = React.useState('');
    const [showThankYou, setShowThankYou] = React.useState(false);
    const [screenSize, setScreenSize] = React.useState('md');
    const [isLoading, setIsLoading] = React.useState(false);
    const { showLoader, hideLoader } = useNavigation();

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setScreenSize('sm');
            } else if (window.innerWidth < 768) {
                setScreenSize('md');
            } else {
                setScreenSize('lg');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit = async () => {
        const inputValue = mobileNumber.trim();

        if (inputValue === '') {
            toast.error("Please enter your mobile number", {
                style: {
                    background: '#1E1E1E',
                    border: '1px solid #444444',
                    color: '#E0E0E0'
                }
            });
            return;
        }

        if (!/^[6-9]\d{9}$/.test(inputValue)) {
            toast.error("Enter a valid 10-digit mobile number", {
                style: {
                    background: '#1E1E1E',
                    border: '1px solid #444444',
                    color: '#E0E0E0'
                }
            });
            return;
        }

        // Start loading and show ArrowLoader
        setIsLoading(true);
        showLoader();

        try {
            const response = await fetch('/api/callback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber: inputValue }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message, {
                    style: {
                        background: '#1E1E1E',
                        border: '1px solid #10B981',
                        color: '#E0E0E0'
                    }
                });
                setShowThankYou(true);
                setTimeout(() => {
                    setShowThankYou(false);
                }, 3000);
            } else if (response.status === 409 && data.error === 'duplicate') {
                toast.error(data.message, {
                    style: {
                        background: '#1E1E1E',
                        border: '1px solid #EF4444',
                        color: '#E0E0E0'
                    }
                });
            } else {
                toast.error(data.error || 'Something went wrong. Please try again.', {
                    style: {
                        background: '#1E1E1E',
                        border: '1px solid #EF4444',
                        color: '#E0E0E0'
                    }
                });
            }
        } catch (error) {
            console.error('Error submitting callback request:', error);
            toast.error('Network error. Please check your connection and try again.', {
                style: {
                    background: '#1E1E1E',
                    border: '1px solid #EF4444',
                    color: '#E0E0E0'
                }
            });
        } finally {
            // Always reset loading state and clear input after any response
            setIsLoading(false);
            setMobileNumber('');
            // Hide the ArrowLoader
            hideLoader();
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    if (showThankYou) {
        return (
            <div ref={ref} className="flex justify-center pt-8 px-4 sm:px-0">
                <div className="max-w-md mx-auto w-full">
                    <motion.div
                        className="bg-[#1F4037] text-[#D1FAE5] px-6 py-4 rounded-2xl text-center text-base sm:text-lg font-semibold shadow-md border border-[#10B981]/30 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        ✅ Thank you! We'll call you shortly.
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div ref={ref} className="flex justify-center pt-8">
            <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto w-full px-4 sm:px-0">
                <motion.div
                    className="relative flex items-stretch overflow-hidden rounded-full h-12 sm:h-14 md:h-16"
                    initial={{ x: 0 }}
                    animate={isInView ? { x: 0 } : { x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.input
                        type="tel"
                        placeholder="Enter Your Mobile No.*"
                        value={mobileNumber}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setMobileNumber(value);
                        }}
                        onKeyPress={handleKeyPress}
                        className="h-full w-full text-sm sm:text-lg outline-none border-none bg-[#2D2D2D] text-[#E0E0E0] rounded-l-full pl-3 sm:pl-5 pr-3 sm:pr-5"
                        initial={{ width: 0, opacity: 0 }}
                        animate={
                            isInView
                                ? {
                                    width: screenSize === 'sm' ? '200px' : screenSize === 'md' ? '240px' : '280px',
                                    opacity: 1,
                                }
                                : { width: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    />

                    <button
                        onClick={handleSubmit}
                        className="h-full px-4 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base font-bold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0 outline-none flex items-center justify-center whitespace-nowrap"
                        style={{
                            backgroundColor: "#2D2D2D",
                            border: "none",
                            color: "#E0E0E0",
                            borderRadius: "0 9999px 9999px 0",
                            minWidth: screenSize === 'sm' ? "120px" : screenSize === 'md' ? "140px" : "160px"
                        }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = "#3F3F3F";
                            (e.target as HTMLButtonElement).style.boxShadow = "0 0 25px rgba(224, 224, 224, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = "#2D2D2D";
                            (e.target as HTMLButtonElement).style.boxShadow = "none";
                        }}
                    >
                        {screenSize === 'sm' ? 'Callback' : 'Request a Callback'}
                    </button>
                </motion.div>
            </div>
        </div>
    );
};



export default Callback;
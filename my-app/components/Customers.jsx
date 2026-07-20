'use client'

import React, { useState, useRef } from 'react'
import HeadNtext from './HeadNtext'
import Image from 'next/image'
import { Heart, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// Import your images
import freshPizza from '@/images/companies/fresh-pizza.png'
import ovenFresh from '@/images/companies/oven-fresh.png'
import hasen from '@/images/companies/hasen.png'
import joyBella from '@/images/companies/joy-bella.png'
import cellRepair from '@/images/companies/cell-repair.png'
import bretgajda from '@/images/companies/bretgajda.jpeg'
import timClue from '@/images/companies/tim-clue.jpeg'

// Register GSAP hook
gsap.registerPlugin(useGSAP)

const testimonials = [
    { id: 1, name: "Fresh Pizza", image: freshPizza, review: "Astha Creatives has been an invaluable partner in our digital marketing efforts. Their team of experts has helped us develop and execute a comprehensive strategy that has significantly increased our online visibility and engagement. From social media management to content creation, they have consistently delivered high-quality work that has exceeded our expectations. We highly recommend Astha Creatives to any business looking to take their digital marketing to the next level." },
    { id: 2, name: "Oven Fresh", image: ovenFresh, review: "Working with Astha Creatives has been a game-changer for our business. Their team of creative professionals has helped us develop a strong brand identity and marketing strategy that has resonated with our target audience. From website design to social media management, they have consistently delivered exceptional work that has helped us grow our business. We are grateful for their expertise and highly recommend their services to any business looking to elevate their brand." },
    { id: 3, name: "Hasen", image: hasen, review: "Astha Creatives has been an incredible partner in helping us grow our business. Their team of experts has helped us develop a comprehensive digital marketing strategy that has significantly increased our online presence and engagement. From social media management to content creation, they have consistently delivered high-quality work that has exceeded our expectations. We highly recommend Astha Creatives to any business looking to take their digital marketing efforts to the next level." },
    { id: 4, name: "Joy Bella", image: joyBella, review: "Astha Creatives has been a fantastic partner in our marketing efforts. Their team of experts has helped us create compelling content and execute effective campaigns that have driven significant results for our business. We are impressed with their professionalism and the quality of their work." },
    { id: 5, name: "Cell Repair", image: cellRepair, review: "Astha Creatives has been a reliable partner in our digital marketing efforts. Their team of experts has helped us develop and execute a comprehensive strategy that has significantly increased our online visibility and engagement. From social media management to content creation, they have consistently delivered high-quality work that has exceeded our expectations. We highly recommend Astha Creatives to any business looking to take their digital marketing to the next level." },
    { id: 6, name: "Bret Gajda", image: bretgajda, review: "Working with Astha Creatives has been a game-changer for our business. Their team of creative professionals has helped us develop a strong brand identity and marketing strategy that has resonated with our target audience. From website design to social media management, they have consistently delivered exceptional work that has helped us grow our business. We are grateful for their expertise and highly recommend their services to any business looking to elevate their brand." },
    { id: 7, name: "Tim Clue", image: timClue, review: "Astha Creatives has been a fantastic partner in our marketing efforts. Their team of experts has helped us create compelling content and execute effective campaigns that have driven significant results for our business. We are impressed with their professionalism and the quality of their work." }
]

const partners = [
    { id: 1, name: "Fresh Pizza", image: freshPizza },
    { id: 4, name: "Cell Repair", image: cellRepair },
    { id: 2, name: "Oven Fresh", image: ovenFresh },
    { id: 3, name: "Hasen", image: hasen },
]

const Customers = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const sliderContainer = useRef(null)

    // Handle slide navigation
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    // GSAP Animation Logic
    useGSAP(() => {
        // Slide the entire track
        gsap.to('.slide-track', {
            xPercent: -(currentIndex * 100),
            duration: 0.8,
            ease: 'power3.inOut',
        })

        // Add a scale and opacity effect to focus on the active card
        gsap.to('.slide-card', {
            scale: (index) => (index === currentIndex ? 1 : 0.85),
            opacity: (index) => (index === currentIndex ? 1 : 0.3),
            duration: 0.8,
            ease: 'power3.inOut',
        })
    }, { dependencies: [currentIndex], scope: sliderContainer })

    return (

        <div className="bg-mpure relative pt-20 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="mb-16 text-center text-gray-900">
                    <HeadNtext
                        heading="Our Clients Feedbacks"
                        text="We served these companies with love and care. For that, some of them turned to us again and again. We have the mindset to help you thrive!"
                    />
                </div>

                {/* Slider Section */}
                <div ref={sliderContainer} className="relative w-full max-w-5xl mx-auto">

                    {/* The Track Container */}
                    <div className="overflow-hidden w-full rounded-2xl py-4">
                        <div className="flex slide-track">
                            {testimonials.map((test, index) => (
                                <div key={test.id} className="w-full shrink-0 flex justify-center px-4 slide-card">

                                    {/* The Card UI - Converted to Light Theme */}
                                    <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-8 md:p-12 w-full max-w-3xl relative flex flex-col items-center text-center">

                                        <Quote className="absolute top-6 left-6 w-12 h-12 text-gray-100" />

                                        <div className="flex gap-1 text-red-500 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Heart key={i} size={20} fill="currentColor" />
                                            ))}
                                        </div>

                                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 font-light relative z-10">
                                            "{test.review}"
                                        </p>

                                        <div className="flex flex-col items-center gap-4 mt-auto">
                                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 relative">
                                                <Image
                                                    src={test.image}
                                                    alt={test.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="64px"
                                                />
                                            </div>
                                            <h4 className="text-gray-900 font-bold tracking-wide">
                                                {test.name}
                                            </h4>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls - Converted to Light Theme */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 border border-gray-200 transition-colors text-gray-700"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Dot Indicators */}
                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-500 ${currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 border border-gray-200 transition-colors text-gray-700"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                </div>
            </div>

            <div className="bg-brand text-white mt-12 pt-8 pb-10">
                <div className="container mx-auto pertnersSec">
                    <HeadNtext heading="partners around the world" text="We are trusted by these companies around the world. From day one, we stay connected, communicate openly,
and focus on helping your business grow." styleText="text-white" />

                    <div className="flex items-center justify-center gap-4">
                        {partners.map((partner) => (
                            <div key={partner.id} className="flex-shrink-0 mx-4">
                                <Image
                                    src={partner.image}
                                    alt={partner.name}
                                    className="w-32 h-32 object-contain rounded-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>




        </div>
    )

}

export default Customers
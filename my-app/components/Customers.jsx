import React from 'react'
import HeadNtext from './HeadNtext'
import freshPizza from '@/images/customers/fresh-pizza.png'
import ovenFresh from '@/images/customers/oven-fresh.png'
import hasen from '@/images/customers/hasen.png'
import joyBella from '@/images/customers/joy-bella.png'
import cellRepair from '@/images/customers/cell-repair.png'
import bretgajda from '@/images/customers/bretgajda.png'
import timClue from '@/images/customers/tim-clue.png'
import Image from 'next/image'
import { Heart } from 'lucide-react'

const testimonials = [
    { id: 1, name: "Fresh Pizza", image: freshPizza, review: "Astha Creatives has been an invaluable partner in our digital marketing efforts. Their team of experts has helped us develop and execute a comprehensive strategy that has significantly increased our online visibility and engagement. From social media management to content creation, they have consistently delivered high-quality work that has exceeded our expectations. We highly recommend Astha Creatives to any business looking to take their digital marketing to the next level." },
    { id: 2, name: "Oven Fresh", image: ovenFresh, review: "Working with Astha Creatives has been a game-changer for our business. Their team of creative professionals has helped us develop a strong brand identity and marketing strategy that has resonated with our target audience. From website design to social media management, they have consistently delivered exceptional work that has helped us grow our business. We are grateful for their expertise and highly recommend their services to any business looking to elevate their brand." },
    { id: 3, name: "Hasen", image: hasen, review: "Astha Creatives has been an incredible partner in helping us grow our business. Their team of experts has helped us develop a comprehensive digital marketing strategy that has significantly increased our online presence and engagement. From social media management to content creation, they have consistently delivered high-quality work that has exceeded our expectations. We highly recommend Astha Creatives to any business looking to take their digital marketing efforts to the next level." },
    { id: 4, name: "Joy Bella", image: joyBella, review: "Astha Creatives has been a fantastic partner in our marketing efforts. Their team of experts has helped us create compelling content and execute effective campaigns that have driven significant results for our business. We are impressed with their professionalism and the quality of their work." },
    { id: 5, name: "Cell Repair", image: cellRepair, review: "Astha Creatives has been a reliable partner in our digital marketing efforts. Their team of experts has helped us develop and execute a comprehensive strategy that has significantly increased our online visibility and engagement. From social media management to content creation, they have consistently delivered high-quality work that has exceeded our expectations. We highly recommend Astha Creatives to any business looking to take their digital marketing to the next level." },
    { id: 6, name: "Bret Gajda", image: bretgajda, review: "Working with Astha Creatives has been a game-changer for our business. Their team of creative professionals has helped us develop a strong brand identity and marketing strategy that has resonated with our target audience. From website design to social media management, they have consistently delivered exceptional work that has helped us grow our business. We are grateful for their expertise and highly recommend their services to any business looking to elevate their brand." },
    { id: 7, name: "Tim Clue", image: timClue, review: "Astha Creatives has been a fantastic partner in our marketing efforts. Their team of experts has helped us create compelling content and execute effective campaigns that have driven significant results for our business. We are impressed with their professionalism and the quality of their work." }
]

const Customers = () => {
    return (
        <div className="bg-mpure relative">
            <div className="Our Customers">
                <HeadNtext heading="Our Customers" text="We served these companies with love and care. For that, some of them turned to us again and again. We have the mindset to help you thrive!" />
            </div>



            {/* testimonials slider section */}
            {/* <Heart /> */}
            
            <div className="testimonials">

            </div>
        </div>



    )
}

export default Customers
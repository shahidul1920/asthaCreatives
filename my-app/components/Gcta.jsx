import Link from 'next/link'
import React from 'react'

const Gcta = (props) => {
    return (
        <div>
            <section className="container mx-auto flex items-center justify-between gap-4 flex-wrap px-4 py-8 sm:px-6 lg:px-8">
                <div className="textSec">
                    <h3 className="text-2xl font-bold text-brand sm:text-3xl md:text-4xl">
                        {props.heading}
                    </h3>
                    <p className="text-[14px] text-brand">
                        {props.text}
                    </p>
                </div>

                <Link href={props.link ? props.link : '/contact'} className="btn">
                    {props.btnText ? props.btnText : 'Get A Quote'}
                </Link>
            </section>
        </div>
    )
}

export default Gcta
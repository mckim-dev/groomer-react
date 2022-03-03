import React from 'react'

const Headerblock = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 pt-5 text-center font-thin">
            <h1 className="text-4xl md:text-6xl my-8 text-[#78b8bc]">The Pampered Pup</h1>
            <p className="text-2xl">A Simple React Application using Tailwind CSS</p>
            <p>
                An initial set of JSON data is provided via a fetch request function for
                evaluating the properly functioning sort and search features.
            </p>
        </div>
    )
}

export default Headerblock;
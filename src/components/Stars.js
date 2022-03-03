import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';


function Starlist() {
    const stars = Array(5).fill(0);
    const [curVal, setCurVal] = useState(0);
    const [hovVal, setHovVal] = useState(0);

    const handleClick = value => {
        setCurVal(value)
    }

    const handleMouseOver = newHval => {
        setHovVal(newHval)
    }

    const handleMouseLeave = () => {
        setHovVal(undefined)
    }

    return (
        <div className="flex flex-row">
            {stars.map((_, index) => {
                return (
                    <StarIcon
                        key={index}
                        className={(hovVal || curVal) > index ? "text-[#78b8bc] h-6 w-6 flex-shrink-0 mr-2" : "text-gray-200 h-6 w-6 flex-shrink-0 mr-2"}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                    />
                )
            })}
        </div>
    )

}

export default Starlist;


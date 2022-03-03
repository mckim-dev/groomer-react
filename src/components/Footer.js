import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <div className="text-center text-white font-semibold mt-9 p-6 bg-[#78b8bc] hover:bg-[#8e7ea3]">
                <a href="https://github/student-mckim/"> <BsGithub className="inline-block text-white text-2xl align-center hover:text-3xl transition duration-300" /></a>
                &nbsp; <a href="https://www.linkedin.com/in/robin-mckim-dev/">
                    <BsLinkedin className="inline-block text-white text-2xl hover:text-3xl align-center transition duration-300" /></a>
                &nbsp; Design and Development: © 2022 Robin Mckim  <br />
            </div>
        </footer>
    )
}

export default Footer




import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript,SiHtml5,SiCss3, SiMongodb } from "react-icons/si";
const Media = () => {
  return (
    <div className="xl:flex-row gap-8 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-2">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mt-3 mb-4 px-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-2">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiMongodb/>
            </span>
            <span className="bannerIcon">
              <FaNodeJs/>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media
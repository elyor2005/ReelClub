import React from "react";

interface SocialLinkProps {
  href: string;
  name: string;
}

const NavLink = ({ href, name }: SocialLinkProps) => {
  return (
    <>
      <a
        href={href}
        className="flex relative  group min-w-max w-max text-white 
                 text-sm sm:text-base lg:text-2xl hover:scale-110"
      >
        <div className="relative overflow-hidden">
          <span className="opacity-0">{name}</span>
          <div className="absolute top-0 left-0 transition-all duration-200 ease-linear group-hover:-top-full flex flex-col">
            <span>{name}</span>
            <span>{name}</span>
          </div>
        </div>
      </a>
    </>
  );
};

export default NavLink;

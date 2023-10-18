import { icon } from "../assets/images";
import { navLinks } from "../constants";
import Button from "./Button";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'> 
            <img
                src={icon}
                alt='logo'
                width={50}
                height={50}
                className='m-0 w-[50px] h-[50px] rounded-xl'
                ></img>
            </a>
            <ul className='flex justify-center items-center gap-10 max-md:flex max-md:text-left'>
                {navLinks.map((item) => (
                    // className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
                    // ${
                    //   backgroundColor
                    //     ? `${backgroundColor} ${textColor} ${borderColor}`
                    //     : "bg-light-blue text-black border-light-blue"
                    // } rounded-full ${fullWidth && "w-full"}`}
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className='transition ease-in-out hover:border backdrop:gap-2 px-5 py-2
                            hover:bg-light-blue hover:border-light-blue rounded-full 
                                      font-montserrat leading-none text-lg text-slate-gray'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
};

export default Nav;
import { icon } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {

  return (
    <header className='md:padding-x py-8 m  md:absolute md:z-10 w-full border-solid border-b border-grey fading-down ' >
        <nav className='md:flex md:justify-between items-center max-container '>
            <a href='/'> 
            <img
                src={icon}
                alt='logo'
                width={50}
                height={50}
                className='m-0 w-[55px] h-[55px] rounded-xl hidden md:block'
                ></img> 
            </a>
            <ul className='md:flex sm:flex-wrap sm:justify-end gap-10 place-content-center'>
                {navLinks.map((item) => (
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
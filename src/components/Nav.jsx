import { CoffeeCup } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {

  return (
    <nav className='sm:flex justify-between items-center sm:padding-x my-8 border-solid border-b border-grey fading-down'>
        <div className="items-center">
            <a href='/'> 
                <img
                    src={CoffeeCup}
                    alt='logo'
                    width={50}
                    height={50}
                    className='w-[55px] h-[55px] rounded-xl hidden md:block mb-4'
                    ></img> 
                </a>
        </div>

        <div className="sm:relative">
            <ul className='flex flex-wrap justify-center sm:gap-10'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className='transition ease-in-out hover:border backdrop:gap-2 px-5 py-2
                            hover:bg-light-blue hover:border-light-blue rounded-full 
                                    font-montserrat leading-none text-xl text-slate-gray sm:relative'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  );
};

export default Nav;
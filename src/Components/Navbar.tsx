
import logo from '../assets/logo.png'
import DarkMode from './DarkMode';
const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Services",
        link: "/#services"
    },
    {
        id: 3,
        name: "About",
        link: "/#portofolio"
    },
    {
        id: 4,
        name: "Portofolio",
        link: "/#portofolio"
    },
];


function Navbar() {
    return (
        <>
            <div className="shadow-md min-w-full  bg-white dark:bg-gray-900 duration-200">
                <div className="container mx-auto py-3 sm:py-0">
                    <div className="flex justify-between items-center">
                        <a href="#" className="font-bold text-2xl sm:text-3xl text flex gap-2">
                            <img src={logo} alt="Logo" className="w-10  dark:bg-white dark:rounded-full " />
                            Portofolio
                        </a>


                        <div className="flex justify-between items-center gap-8">
                            <div>
                                <DarkMode />
                            </div>
                            <ul className="hidden sm:flex items-center gap-4">
                                {Menu.map((menu) => (
                                    <li key={menu.id}>
                                        <a
                                            href={menu.link}
                                            className="inline-block py-4 px-4 hover:text-primary duration-300"
                                        >
                                            {menu.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-lg flex items-center gap-3">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar 
import React from "react";
import {IoMdSearch} from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";


const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Comprar",
        link: "/#Comprar",
    },
    {
        id: 3,
        name: "Sobre",
        link: "/#Sobre",
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#blogs",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Produtos em alta",
        link: "/#",
    },
    {
        id: 2,
        name: "Mais vendido",
        link: "/#",
    },
    {
        id: 3,
        name: "Mais bem avaliados",
        link: "/#",
    },
]

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="py-4">
            <div className="container flex justify-between items-center">
                {/* Logo e links Seção*/}
                <div className="flex items-center gap-4">
                    <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">Eshop</a>

                    {/* Menu Itens*/}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-4">
                            {MenuLinks.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link}
                                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"> 
                                    {" "}
                                    {data.name} </a>
                                </li>
                            ))}
                            {/* Dropdown*/} 
                            <li className="relative cursor-pointer group">
                                <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                                    Links rápidos
                                    <span>
                                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                    </span>
                                </a>
                                {/* Dropdown links*/} 
                                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white"> 
                                    <ul className="space-y-2">
                                        {
                                            DropdownLinks.map((data, index) => (
                                                <li>
                                                    <a className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold" href={data.link}>{data.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Navbar Seção*/}
                <div className="flex justify-between items-center gap-4">
                    {/* Seção do buscar*/}
                    <div className="relative group hidden sm:block">
                        <input type="text" placeholder="Search" className="search-bar" />
                        <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"/>
                    </div>

                    {/* Order-button section*/}
                    <button className="relative p-3">
                        <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400"/>
                        <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">4 </div>
                    </button>
                    {/* Seção do dark mode*/}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
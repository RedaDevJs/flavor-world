import React, {useState} from "react";
import {Fragment} from 'react'
import {Disclosure} from '@headlessui/react'
import {Link} from "react-router-dom";
import logo from "../../assets/all-images/logo.ico";

export default function Header() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const [current, setCurrent] = useState('/home');

    const handleNavigationClick = (href) => {
        setCurrent(href);
    };
    const navigation = [
        {name: 'Dashboard', href: '/home'},
        {name: 'Recipes', href: '/recipes'},
        {name: 'Team', href: '/team'},
        {name: 'About', href: '/about'},
    ]
    return (
        <Disclosure as="nav" className="bg-pink-950">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex justify-content-between h-16 items-center justify-between">

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <Link to="/home" className="flex items-center font-sans lg:flex-1 text-sky-500">
                                    <img src={logo} alt=""/>
                                    <span className="ml-2 text-xl capitalize"
                                          style={{color: '#FBBF24', fontFamily: 'Dancing Script, cursive'}}>
                        FlavorWorld
                            </span>
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => handleNavigationClick(item.href)}
                                            className={classNames(
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                                item.href === current ? 'bg-yellow-400 text-pink-950' : 'bg-pink-950 text-yellow-400',
                                                'hover:text-white'
                                            )}
                                            aria-current={item.href === current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden text-yellow-400 lg:flex lg:flex-1 lg:justify-end ">
                                <Link
                                    to="/Sign In"
                                    className="font-semibold leading-6 text-l hover:text-white "
                                >
                                    Log in <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}


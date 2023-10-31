import { useState } from 'react'
import StarbucksIcon from '/icons/starcbucks.png'
import { Button } from './Button'
import { FaLocationDot } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BiX } from 'react-icons/bi'
import { disableScroll, enableScroll } from '../utils/Scroll'

export const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState('')

    let icon = ''

    isNavOpen === 'nav__burger__value'
        ? (icon = <BiX className='text-3xl translate-x-1' />)
        : (icon = <RxHamburgerMenu />)

    function openNav(value) {
        value === 'nav__burger__value' ? disableScroll() : enableScroll()
        setIsNavOpen(value)
    }

    return (
        <>
            <header className='header Font2'>
                <div className='flex w-full gap-x-10'>
                    <a href='https://www.starbucks.com/' className='logo'>
                        <img src={StarbucksIcon} alt='Starbucks Logo' />
                    </a>
                    <nav className='navbar'>
                        <ul>
                            <li>
                                <a href='#'>MENU</a>
                            </li>
                            <li>
                                <a href='#'>REWARDS</a>
                            </li>
                            <li>
                                <a href='#'>GIFT CARDS</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='hidden xl:flex justify-end items-center gap-14 px-4'>
                    <div className='store'>
                        <FaLocationDot className='text-xl' />
                        <span className='store__text inline-block'>
                            Find a store
                        </span>
                    </div>
                    <div className='flex gap-4'>
                        <Button
                            customClass={'hover:bg-DarkCyan border-[black]'}
                        >
                            Sign in
                        </Button>
                        <Button
                            customClass={'hover:opacity-80 text-white bg-black'}
                        >
                            Join now
                        </Button>
                    </div>
                </div>
                <div
                    onClick={() =>
                        isNavOpen === 'nav__burger__value'
                            ? openNav('translate-x-full')
                            : openNav('nav__burger__value')
                    }
                    className='flex justify-end text-2xl xl:hidden'
                >
                    {icon}
                </div>
            </header>
            <div
                onClick={() => openNav('translate-x-full')}
                className={`nav__burger__overlay opacity-0 ${isNavOpen}`}
            ></div>
            <div
                className={`translate-x-full Font2 nav__burger__menu ${isNavOpen} opacity-100`}
            >
                <ul className='flex flex-col gap-9 pb-9'>
                    <li>Menu</li>
                    <li>Rewards</li>
                    <li>Gift Cards</li>
                </ul>
                <div className='flex flex-col pt-9 gap-6'>
                    <div className='flex gap-4'>
                        <Button
                            customClass={
                                'hover:bg-DarkCyan text-sm border-[black]'
                            }
                        >
                            Sign in
                        </Button>
                        <Button
                            customClass={
                                'hover:opacity-80 text-sm text-white bg-black'
                            }
                        >
                            Join now
                        </Button>
                    </div>
                    <div className='store'>
                        <FaLocationDot className='text-xl' />
                        <span className='store__text inline-block'>
                            Find a store
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

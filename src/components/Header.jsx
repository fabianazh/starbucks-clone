import StarbucksIcon from '/icons/starcbucks.png'
import { Button } from './Button'
import { FaLocationDot } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'

export const Header = () => {
    return (
        <>
            <header className='header'>
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
                <div className='flex justify-end text-2xl xl:hidden'>
                    <RxHamburgerMenu />
                </div>
            </header>
        </>
    )
}

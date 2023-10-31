import { FaChevronDown } from 'react-icons/fa6'

export const NavigationMenu = () => {
    return (
        <section className='w-[94%] mx-auto flex flex-col xl:flex-row text-base pt-6 xl:pb-4 Font2 text-stone-500 gap-x-14 gap-y-10'>
            <div className='nav__menu__container'>
                <div className='flex justify-between'>
                    <span className='nav__menu__heading Font2'>About Us</span>
                    <FaChevronDown className={'block xl:hidden'} />
                </div>
                <ul className='nav__menu__ul'>
                    <li>Our Company</li>
                    <li>Our Coffee</li>
                    <li>Stories and News</li>
                    <li>Starbucks Archive</li>
                    <li>Investor Relations</li>
                    <li>Customer Service</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='nav__menu__container'>
                <div className='flex justify-between'>
                    <span className='nav__menu__heading Font2'>Careers</span>
                    <FaChevronDown className={'block xl:hidden'} />
                </div>
                <ul className='nav__menu__ul'>
                    <li>Culture and Values</li>
                    <li>
                        Inclusion, Diversity, and <br /> Equity
                    </li>
                    <li>
                        College Achievement <br /> Plan
                    </li>
                    <li>Alumni Community</li>
                    <li>U.S. Careers</li>
                    <li>International Careers</li>
                </ul>
            </div>
            <div className='nav__menu__container'>
                <div className='flex justify-between'>
                    <span className='nav__menu__heading Font2'>
                        Social Impact
                    </span>
                    <FaChevronDown className={'block xl:hidden'} />
                </div>
                <ul className='nav__menu__ul'>
                    <li>People</li>
                    <li>Planet</li>
                    <li>
                        Environmental and Social <br /> Impact Reporting
                    </li>
                </ul>
            </div>
            <div className='nav__menu__container'>
                <div className='flex justify-between'>
                    <span className='nav__menu__heading Font2'>
                        For Business Partners
                    </span>
                    <FaChevronDown className={'block xl:hidden'} />
                </div>
                <ul className='nav__menu__ul'>
                    <li>Landlord Support Center</li>
                    <li>Suppliers</li>
                    <li>Corporate Gift Card Sales</li>
                    <li>
                        Office and Foodservice <br /> Coffee
                    </li>
                </ul>
            </div>
            <div className='nav__menu__container'>
                <div className='flex justify-between'>
                    <span className='nav__menu__heading Font2'>
                        Order and Pickup
                    </span>
                    <FaChevronDown className={'block xl:hidden'} />
                </div>
                <ul className='nav__menu__ul'>
                    <li>Order on the App</li>
                    <li>Order on the Web</li>
                    <li>Delivery</li>
                    <li>
                        Order and Pickup <br /> Options
                    </li>
                    <li>
                        Explore and Find Coffee <br /> for Home
                    </li>
                </ul>
            </div>
        </section>
    )
}

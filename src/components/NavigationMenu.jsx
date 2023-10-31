import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { Box, Text, Collapse, VStack, Icon } from '@chakra-ui/react'

export const NavigationMenu = () => {
    const [menuStates, setMenuStates] = useState({
        aboutUs: false,
        careers: false,
        socialImpact: false,
        businessPartners: false,
        orderAndPickup: false,
    })

    const toggleMenu = (menu) => {
        setMenuStates((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }))
    }

    return (
        <>
            <section className='w-[94%] mx-auto hidden xl:flex flex-col xl:flex-row text-base pt-6 xl:pb-4 Font2 text-stone-500 gap-x-14 gap-y-10'>
                <div className='nav__menu__container'>
                    <div className='flex justify-between'>
                        <span className='nav__menu__heading Font2'>
                            About Us
                        </span>
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
                        <span className='nav__menu__heading Font2'>
                            Careers
                        </span>
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
            <Box
                as='section'
                className='w-[94%] mx-auto flex xl:hidden flex-col xl:flex-row pt-6 xl:pb-4 Font2 text-stone-500 gap-x-14 gap-y-10 text-sm px-3 xl:px-0 xl:text-xl'
            >
                {Object.entries(menuStates).map(([menu, isOpen]) => (
                    <VStack key={menu} spacing={'24'} alignItems='flex-start'>
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            cursor='pointer'
                            onClick={() => toggleMenu(menu)}
                            className='w-full'
                        >
                            <Text className='nav__menu__heading Font2'>
                                {menu === 'aboutUs' ? 'About Us' : ''}
                                {menu === 'careers' ? 'Careers' : ''}
                                {menu === 'socialImpact' ? 'Social Impact' : ''}
                                {menu === 'businessPartners'
                                    ? 'Business Partners'
                                    : ''}
                                {menu === 'orderAndPickup'
                                    ? 'Order and Pickup'
                                    : ''}
                            </Text>
                            <Icon
                                as={FaChevronDown}
                                className={`block xl:hidden transition-transform ${
                                    isOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </Box>
                        <Collapse in={isOpen}>
                            <VStack
                                display={'flex'}
                                flex={'flex-row'}
                                spacing={4}
                            >
                                {menu === 'aboutUs' && (
                                    <Text
                                        display={'flex'}
                                        flexDir={'column'}
                                        gap={'20'}
                                    >
                                        <li>Our Company</li>
                                        <li>Our Coffee</li>
                                        <li>Stories and News</li>
                                        <li>Starbucks Archive</li>
                                        <li>Investor Relations</li>
                                        <li>Customer Service</li>
                                        <li>Contact Us</li>
                                    </Text>
                                )}
                                {menu === 'careers' && (
                                    <Text
                                        display={'flex'}
                                        flexDir={'column'}
                                        gap={'20'}
                                    >
                                        <li>Culture and Values</li>
                                        <li>
                                            Inclusion, Diversity, and <br />{' '}
                                            Equity
                                        </li>
                                        <li>
                                            College Achievement <br /> Plan
                                        </li>
                                        <li>Alumni Community</li>
                                        <li>U.S. Careers</li>
                                        <li>International Careers</li>
                                    </Text>
                                )}
                                {menu === 'socialImpact' && (
                                    <Text
                                        display={'flex'}
                                        flexDir={'column'}
                                        gap={'20'}
                                    >
                                        <li>People</li>
                                        <li>Planet</li>
                                        <li>
                                            Environmental and Social <br />{' '}
                                            Impact Reporting
                                        </li>
                                    </Text>
                                )}
                                {menu === 'businessPartners' && (
                                    <Text
                                        display={'flex'}
                                        flexDir={'column'}
                                        gap={'20'}
                                    >
                                        <li>Landlord Support Center</li>
                                        <li>Suppliers</li>
                                        <li>Corporate Gift Card Sales</li>
                                        <li>
                                            Office and Foodservice <br /> Coffee
                                        </li>
                                    </Text>
                                )}
                                {menu === 'orderAndPickup' && (
                                    <Text
                                        display={'flex'}
                                        flexDir={'column'}
                                        gap={'20'}
                                    >
                                        <li>Order on the App</li>
                                        <li>Order on the Web</li>
                                        <li>Delivery</li>
                                        <li>
                                            Order and Pickup <br /> Options
                                        </li>
                                        <li>
                                            Explore and Find Coffee <br /> for
                                            Home
                                        </li>
                                    </Text>
                                )}
                            </VStack>
                        </Collapse>
                    </VStack>
                ))}
            </Box>
        </>
    )
}

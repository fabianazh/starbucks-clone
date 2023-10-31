export const Footer = () => {
    const icons = [
        'spotify',
        'facebook',
        'pinterest',
        'instagram',
        'youtube',
        'twitter',
    ]

    return (
        <footer className='w-11/12 xl:w-[94%] mx-auto border-t-2 h-auto py-10 mt-10'>
            <div className='flex gap-4 mb-8'>
                {icons.map((icon) => (
                    <img
                        key={icon}
                        src={`./icons/${icon}.png`}
                        alt=''
                        className='w-8 opacity-90 cursor-pointer'
                    />
                ))}
            </div>
            <ul className='flex flex-col xl:flex-row xl:divide-x text-base divide-black Font2 gap-5 xl:gap-3 mb-6'>
                <li className='footer__list'>Privacy Police</li>
                <li className='footer__list xl:pl-7'>Terms of Use</li>
                <li className='footer__list xl:pl-7'>
                    Do Not Share My Personal Information
                </li>
                <li className='footer__list xl:pl-7'>CA Supply Chain Act</li>
                <li className='footer__list xl:pl-7'>Cookie Preferences</li>
            </ul>
            <span className='block text-stone-600 text-sm Font2'>
                © 2023 Starbucks Coffee Company. All rights reserved.
            </span>
        </footer>
    )
}

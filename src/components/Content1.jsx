import { Container } from './Container'
import { Button } from './Button'
import Image from '/contents/content1.webp'

export const Content1 = () => {
    return (
        <>
            <Container customClass={'bg-Cyan xl:py-6'}>
                <Container.Image>
                    <img src={Image} alt='Image 1' />
                </Container.Image>
                <Container.Content
                    customClass={
                        'px-5 xl:px-12 pb-6 xl:pb-0 justify-center flex flex-col text-base xl:text-xl font-semibold'
                    }
                >
                    <span className='block text-xl xl:text-2xl mb-3 xl:mb-6 font-bold Font2'>
                        A new way to earn sips and trips
                    </span>
                    <span className='block mb-3 xl:mb-6 text-stone-800 leading-8 xl:leading-10'>
                        Now you can link your Starbucks&reg; Rewards + Delta{' '}
                        <br /> SkyMiles® accounts to get:
                    </span>
                    <ul className='pl-6 pr-3 xl:px-6 h-auto max-h-48 xl:max-h-max'>
                        <li className='list-disc mb-4 text-stone-900'>
                            150 Stars + 500 miles when you link before 12/31
                        </li>
                        <li className='list-disc mb-4 text-stone-900'>
                            Double Stars on Delta travel days
                        </li>
                        <li className='list-disc text-stone-900 mb-7 leading-9'>
                            1 mile per $1 spent at Starbucks (excludes taxes{' '}
                            <br /> and gratuities)*
                        </li>
                    </ul>
                    <Button
                        customClass={
                            'hover:bg-DarkCyan text-sm xl:text-base border-[black] w-auto'
                        }
                    >
                        Link account
                    </Button>
                </Container.Content>
            </Container>
        </>
    )
}

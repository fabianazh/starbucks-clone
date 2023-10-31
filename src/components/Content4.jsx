import { Container } from './Container'
import { Button } from './Button'
import Image from '/contents/content4.jpg'

export const Content4 = () => {
    return (
        <>
            <Container customClass={'bg-Green text-white pb-8 xl:pb-0'}>
                <Container.Content
                    customClass={
                        'px-10 text-xl font-semibold grid__center border-red'
                    }
                >
                    {' '}
                    <div className='grid__center text-center'>
                        <span className='block mt-6 mb-4 xl:mb-7 xl:mt-0 text-3xl xl:text-5xl xl:tracking-wider Font1'>
                            Nitro all fall long
                        </span>
                        <span className='font-normal text-lg mb-6 xl:mb-7 xl:text-xl xl:tracking-wider xl:font-bold xl:leading-[3rem]'>
                            Ready on tap, super-smooth Nitro Cold <br /> Brew.
                            For a silky twist, try Vanilla Sweet <br /> Cream
                            Nitro Cold Brew.
                        </span>
                        <Button
                            customClass={
                                'hover:bg-DarkGreen text-sm xl:text-lg w-auto'
                            }
                        >
                            Order now
                        </Button>
                    </div>
                </Container.Content>
                <Container.Image customClass={'xl:order-last'}>
                    <img src={Image} alt='Image 3' />
                </Container.Image>
            </Container>
        </>
    )
}

import { Container } from './Container'
import { Button } from './Button'
import Image from '/contents/content3.webp'

export const Content3 = () => {
    return (
        <>
            <Container customClass={'bg-Green text-white pb-8 xl:pb-0'}>
                <Container.Image>
                    <img src={Image} alt='Image 3' />
                </Container.Image>
                <Container.Content
                    customClass={
                        'px-10 text-xl font-semibold grid__center border-red'
                    }
                >
                    {' '}
                    <div className='grid__center text-center'>
                        <span className='block text-3xl xl:text-5xl leading-tight Font1 xl:tracking-wider mb-4 xl:mb-8'>
                            The art of the <br /> Roast
                        </span>
                        <span className='tracking-normal font-normal xl:font-bold text-lg xl:text-2xl xl:leading-10 mb-6 xl:mb-9'>
                            With a new roast spectrum front and <br /> center on
                            our coffee bags, it’s easier than <br /> ever to
                            find a taste you love.
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
            </Container>
        </>
    )
}

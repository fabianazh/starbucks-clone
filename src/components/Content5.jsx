import { Container } from './Container'
import { Button } from './Button'
import Image from '/contents/content5.jpg'

export const Content5 = () => {
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
                        <span className='block mt-6 mb-4 xl:mb-7 xl:mt-0 text-2xl leading-tight Font1 tracking-wide'>
                            Deliciously protein-packed
                        </span>
                        <span className='tracking-normal xl:tracking-wider mb-5 xl:mb-7 font-normal xl:font-bold text-base xl:text-lg xl:leading-10'>
                            Keep on the move with a Bacon, Gouda & Egg <br />{' '}
                            Sandwich or Egg White & Roasted Red Pepper Egg{' '}
                            <br /> Bites.
                        </span>
                        <Button
                            customClass={
                                'hover:bg-DarkGreen text-sm xl:text-base w-auto'
                            }
                        >
                            Learn more
                        </Button>
                    </div>
                </Container.Content>
            </Container>
        </>
    )
}

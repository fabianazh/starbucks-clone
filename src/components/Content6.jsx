import { Container } from './Container'
import { Button } from './Button'
import Image from '/contents/content6.jpg'

export const Content6 = () => {
    return (
        <>
            <Container customClass={'bg-Cyan pb-6 xl:pb-0'}>
                <Container.Content
                    customClass={
                        'px-10 text-xl font-semibold grid__center border-red'
                    }
                >
                    {' '}
                    <div className='grid__center text-center'>
                        <span className='block text-2xl my-5 xl:mb-7 leading-tight Font1 tracking-normal'>
                            Celebrate Latinx Heritage Month
                        </span>
                        <span className='tracking-wide mb-5 xl:mb-7 text-base xl:text-lg xl:leading-10'>
                            See how the Starbucks Hora del Café Partner <br />
                            (employee) Network is taking action to build
                            stronger <br /> and kinder communities for all.
                        </span>
                        <Button
                            customClass={
                                'hover:bg-DarkCyan border-black text-sm xl:text-base w-auto'
                            }
                        >
                            Learn more
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

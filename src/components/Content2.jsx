import { Container } from './Container'
import { Button } from './Button'
import Image from '/contents/content2.webp'

export const Content2 = () => {
    return (
        <>
            <Container customClass={'bg-Cyan pb-8 pt-3 xl:py-0'}>
                <Container.Content
                    customClass={
                        'px-10 text-xl font-semibold grid__center border-red'
                    }
                >
                    <div className='grid__center text-center'>
                        <span className='block text-3xl xl:text-5xl Font1 xl:tracking-wider mb-3 xl:mb-8 leading-tight'>
                            Buy coffee, help <br /> grow a <br /> community
                        </span>
                        <span className='tracking-normal text-lg xl:text-2xl text-stone-900 mb-5 xl:mb-9 leading-8 xl:leading-10'>
                            We care deeply about coffee farmers and <br /> their
                            communities. Your support helps us <br /> invest in
                            the well-being of farmers across <br /> the world’s
                            coffee-growing regions.
                        </span>
                        <Button
                            customClass={
                                'hover:bg-DarkCyan text-sm xl:text-lg border-[black] w-auto'
                            }
                        >
                            Learn more
                        </Button>
                    </div>
                </Container.Content>
                <Container.Image customClass={'xl:order-last'}>
                    <img src={Image} alt='Image 2' />
                </Container.Image>
            </Container>
        </>
    )
}

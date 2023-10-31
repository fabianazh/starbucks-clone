import { Header } from './components/Header'
import { Content1 } from './components/Content1'
import { Content2 } from './components/Content2'
import { Content3 } from './components/Content3'
import { Content4 } from './components/Content4'
import { Content5 } from './components/Content5'
import { Content6 } from './components/Content6'
import { NavigationMenu } from './components/NavigationMenu'
import { Footer } from './components/Footer'

function App() {
    return (
        <>
            <Header></Header>
            <Content1></Content1>
            <Content2></Content2>
            <Content3></Content3>
            <Content4></Content4>
            <Content5></Content5>
            <Content6></Content6>
            <div className='w-screen grid__center border-b-[3px] h-24 px-10 text-center'>
                <span className='block text-sm'>
                    *See the DoorDash app for availability and restrictions.
                    Menu limited.
                </span>
            </div>
            <NavigationMenu></NavigationMenu>
            <Footer></Footer>
        </>
    )
}

export default App

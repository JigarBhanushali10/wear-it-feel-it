import RouterOutlet from '../../App.Routing'
import Header from './Header'
import Footer from './Footer'


export default function Master() {
    return (
        <div className='h-100 d-flex flex-column border p-0'>
            {/* header */}
            <header className='header bg-secondary pb-4 '>
                <Header></Header>
            </header>
            <main className='flex-grow-1 d-flex overflow-hidden'>
                {/* main routes */}
                <div className='d-flex flex-column flex-grow-1 overflow-vertical'>
                    <RouterOutlet></RouterOutlet>
                    {/* footer */}
                    <footer className='bg-dark '>
                        <Footer></Footer>
                    </footer>
                </div>
            </main>
        </div>
    )
}

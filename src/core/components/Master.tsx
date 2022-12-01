import RouterOutlet from '../../App.Routing'
import Header from './Header'
import Footer from './Footer'
import { CartStore } from '../../shared/contexts/CartContext'


export default function Master() {
    return (
        <div className='h-100 d-flex flex-column  p-0'>
            <CartStore>
               {/* header */}
                <header className='header bg-secondary py-4 shadow'>
                    <Header />
                </header>
                <main className='flex-grow-1 d-flex overflow-hidden'>
                    {/* main routes */}
                    <div className='d-flex flex-column flex-grow-1 overflow-vertical'>
                        <RouterOutlet />
                        {/* footer */}
                        <footer className='bg-dark '>
                            <Footer />
                        </footer>
                    </div>
                </main>
            </CartStore>
        </div >
    )
}

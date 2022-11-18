import React from 'react'
import RouterOutlet from '../../App.Routing'
import Footer from './Footer'
import Header from './Header'

export default function Master() {
    return (
        <div className='h-100 d-flex flex-column '>
            <header className='border border-bottom-1 pb-4'>
                <Header></Header>
            </header>
            <main className='flex-grow-1'>
                <RouterOutlet></RouterOutlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}

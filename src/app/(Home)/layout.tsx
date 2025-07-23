import React from 'react'
import { Footer, Navbar } from '../../../components'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default layout

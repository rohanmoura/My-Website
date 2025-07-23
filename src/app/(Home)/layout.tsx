import { Footer, Navbar } from '@/components'
import React from 'react'

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

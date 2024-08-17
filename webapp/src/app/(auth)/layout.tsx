import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: {
        absolute: 'auth'
    }
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h2>inner layout</h2>
            {children}
        </div>
    )
}

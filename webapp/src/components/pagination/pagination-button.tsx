import React from 'react'
import { Button } from '../ui/button'

type PaginationButtonProps = {
    children: React.ReactNode
    onClick: () => void
    disabled?: boolean
}

export default function PaginationButton({ children, disabled, onClick }: PaginationButtonProps) {
    return (
        <Button
            variant='outline'
            className="p-2"
            disabled={disabled}
            onClick={onClick}>
            {children}
        </Button>
    )
}

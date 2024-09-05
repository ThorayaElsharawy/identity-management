import React from 'react'
import PaginationButton from './pagination-button'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

type PaginationControlsProps = {
    currentPage: number
    handleChangePage: (num: number) => void
    totalPages: number
}

export default function PaginationControls({ currentPage, handleChangePage, totalPages }: PaginationControlsProps) {
    return (
        <div className="flex items-center space-x-2 ">

            <PaginationButton
                disabled={currentPage <= 1}
                onClick={() => handleChangePage(1)}>
                <ChevronsLeft className="h-5 w-5 text-muted-foreground" />
            </PaginationButton>

            <PaginationButton
                disabled={currentPage <= 1}
                onClick={() => handleChangePage(currentPage - 1)}>
                <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </PaginationButton>

            <PaginationButton
                disabled={currentPage >= totalPages}
                onClick={() => handleChangePage(totalPages)}>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </PaginationButton>

            <PaginationButton
                disabled={currentPage >= totalPages}
                onClick={() => handleChangePage(totalPages)}>
                <ChevronsRight className="h-5 w-5 text-muted-foreground" />
            </PaginationButton>
        </div>
    )
}

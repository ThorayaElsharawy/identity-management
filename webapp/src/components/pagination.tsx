import React from 'react'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Settings } from 'lucide-react'
import { Separator } from './ui/separator'

export default function Pagination() {
    return (
        <>
            <Button variant='outline' className="p-2" disabled>
                <ChevronsLeft className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button variant='outline' className="p-2" disabled>
                <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button variant='outline' className="p-2">
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button variant='outline' className="p-2">
                <ChevronsRight className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Separator orientation="vertical" className="py-5 bg-muted-foreground/30" />
            <Button variant='outline' className="p-2">
                <Settings className="h-5 w-5 text-muted-foreground" />
            </Button>
        </>
    )
}

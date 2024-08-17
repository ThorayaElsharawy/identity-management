"use client"

import React, { Suspense, useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, RefreshCcw, Search, Settings } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { UserResponse } from '@/lib/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import UsersTable from '@/components/users-table';
import BreadcrumbUsers from './_breadcrumb/page';
import { Skeleton } from '@/components/ui/skeleton';

const BASE_URL = 'http://127.0.0.1:8090/api/collections/users/records'

export default function Users() {
    const [data, setData] = useState<UserResponse>();
    const [searchUser, setSearchUser] = useState('')
    const [debouncedValue, setDebouncedValue] = useState<NodeJS.Timeout>();
    const [loading, setLoading] = useState(true);

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter();

    const currentPage = +(searchParams.get('page') || '1')
    const totalPages = data?.totalPages || 1


    const fetchData = async (value: string, page: number) => {
        setLoading(true)
        try {
            const response = await fetch(`${BASE_URL}?filter=(name~"${value}")&page=${page}&perPage=8`)
            const data = await response.json();
            setData(data)
        } catch (error) {
            console.error("Failed to fetch data:", error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData('', currentPage)
    }, [currentPage])

    useEffect(() => {
        if (searchUser.length > 0) {
            const timerID = setTimeout(() => {

                fetchData(searchUser, 1)
                router.push(`${pathname}?page=1`)

            }, 1000);
            setDebouncedValue(timerID)

            return () => clearTimeout(debouncedValue)
        }
    }, [searchUser])

    const handleChangePage = (newPage: number) => {
        router.push(`${pathname}?page=${newPage}`)
    }

    // console.log('render')

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
                <div className="mt-2">
                    <BreadcrumbUsers />
                </div>
            </div>
            <div className="w-full">
                <Card className="p-0">
                    <CardHeader className="bg-muted w-full">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-xl">
                                    Users <span className="text-muted-foreground text-base">({data?.totalItems})</span><small className="text-blue-500 font-normal mx-1">Info</small>
                                </CardTitle>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <Button variant='outline'>
                                    <RefreshCcw className="h-5 w-5 text-muted-foreground" />
                                </Button>
                                <Button variant='outline' disabled>Delete</Button>
                                <Button variant="default">
                                    <Link href='/iam/users/create'>
                                        Create user
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <CardDescription className="md:w-2/3 ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, asperiores.
                        </CardDescription>

                        <div className="pt-5 space-y-4 md:space-y-0 md:flex items-center justify-between">
                            <div className="w-full">
                                <form>
                                    <div className="relative">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            value={searchUser}
                                            onChange={(e) => setSearchUser(e.currentTarget.value)}
                                            type="search"
                                            placeholder="Search User..."
                                            className={"w-full appearance-none pl-8  md:w-3/4 lg:w-2/4 border-muted focus-visible:ring-offset-0"}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="flex items-center space-x-2 ">
                                <span className="sr-only">Go to first page</span>
                                <Button variant='outline' className="p-2"
                                    disabled={currentPage <= 1}
                                    onClick={() => handleChangePage(1)}>
                                    <ChevronsLeft className="h-5 w-5 text-muted-foreground" />
                                </Button>
                                <Button
                                    variant='outline'
                                    disabled={currentPage <= 1}
                                    className="p-2"
                                    onClick={() => handleChangePage(currentPage - 1)}>
                                    <ChevronLeft className="h-5 w-5 text-muted-foreground" />
                                </Button>

                                <Button
                                    onClick={() => handleChangePage(currentPage + 1)}
                                    disabled={currentPage >= totalPages}
                                    variant='outline'
                                    className="p-2">
                                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                </Button>

                                <span className="sr-only">Go to last page</span>
                                <Button variant='outline' className="p-2"
                                    disabled={currentPage >= totalPages}
                                    onClick={() => handleChangePage(totalPages)}>
                                    <ChevronsRight className="h-5 w-5 text-muted-foreground" />
                                </Button>

                                <Separator orientation="vertical" className="py-5 bg-muted-foreground/30" />
                                <Button variant='outline' className="p-2">
                                    <Settings className="h-5 w-5 text-muted-foreground" />
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="w-full p-0">
                        {data && <UsersTable data={data} currentPage={currentPage} />}
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

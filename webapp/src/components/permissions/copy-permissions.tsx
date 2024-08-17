"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { RefreshCcw, Search, SquareArrowOutUpRight } from "lucide-react";
import { UserResponse } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useState } from "react";
import Pagination from "../pagination";

export default function CopyPermissions({ users }: { users: UserResponse }) {
    const [selectedGroupId, setSelectedGroupId] = useState('');

    return (
        <>
            <Card className="p-0">
                <CardHeader className="bg-muted w-full">
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-xl">
                                Users {' '}
                                <span className="text-muted-foreground text-base">(5)</span>
                                <small className="text-blue-500 font-normal mx-1">Info</small>
                            </CardTitle>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Button variant='outline'>
                                <RefreshCcw className="h-5 w-5 text-muted-foreground" />
                            </Button>
                        </div>
                    </div>
                    <div className="pt-5 space-y-4 md:space-y-0 md:flex items-center justify-between">
                        <div className="w-full">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search"
                                        className={"w-full appearance-none pl-8  md:w-3/4 lg:w-2/4 border-muted focus-visible:ring-offset-0"}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center space-x-2 ">
                            <Pagination />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table className="min-w-[950px] border-collapse border " >
                        <TableHeader className="bg-muted">
                            <TableRow>
                                <TableHead className="w-[50px] text-center"></TableHead>
                                <TableHead className="cursor-pointer">
                                    User name <SquareArrowOutUpRight className="inline-block w-4 h-4 -mt-1" />
                                </TableHead>
                                <TableHead className="cursor-pointer">
                                    Groups <SquareArrowOutUpRight className="inline-block w-4 h-4 -mt-1" />
                                </TableHead>
                                <TableHead className="cursor-pointer">
                                    Attatched policies <SquareArrowOutUpRight className="inline-block w-4 h-4 -mt-1" />
                                </TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users?.items?.map((user) => (
                                <TableRow key={user.id} className='h-[55px]'>
                                    <TableCell className="w-[50px] text-center">
                                        <RadioGroup
                                            value={selectedGroupId}
                                            onValueChange={() => setSelectedGroupId(user.id)}
                                        >
                                            <RadioGroupItem
                                                id={user.id}
                                                value={user.id}
                                            />
                                        </RadioGroup>
                                    </TableCell>
                                    <TableCell className="underline text-blue-500">{user.name}</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <div className="flex w-full justify-end space-x-4">
                <Button variant='ghost'>Cancel</Button>
                <Button variant='outline'>Previous</Button>
                <Button variant='default'>Next</Button>
            </div>
        </>
    )
}

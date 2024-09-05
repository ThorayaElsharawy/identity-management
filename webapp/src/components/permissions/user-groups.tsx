"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { RefreshCcw, Search } from 'lucide-react'
import { Input } from '../ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { GroupsResponse } from '@/lib/types'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import PaginationControls from '../pagination/pagination-controls'

export default function UserGroups({ groups }: { groups: GroupsResponse }) {
    const [selectedGroupId, setSelectedGroupId] = useState('');

    return (
        <>
            <Card className="p-0">
                <CardHeader className="bg-muted w-full">
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-xl">
                                User groups {' '}
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
                            {/* <PaginationControls  /> */}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table className="min-w-[950px] border-collapse border " >
                        <TableHeader className="bg-muted">
                            <TableRow>
                                <TableHead className="w-[50px] text-center">
                                </TableHead>
                                <TableHead>Group name</TableHead>
                                <TableHead>Users</TableHead>
                                <TableHead >Attached policies</TableHead>
                                <TableHead >Created</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {groups?.items?.map(group => (
                                <TableRow key={group.id}>
                                    <TableCell className="w-[50px] text-center">
                                        <RadioGroup
                                            value={selectedGroupId}
                                            onValueChange={() => setSelectedGroupId(group.id)}>

                                            <RadioGroupItem
                                                id={group.id}
                                                value={group.id}
                                                // checked={selectedGroupId === group.id}
                                            />
                                        </RadioGroup>
                                    </TableCell>
                                    <TableCell className="underline text-blue-500">{group.name}</TableCell>
                                    <TableCell>{group?.users?.length}</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>20/10/2024 10:00</TableCell>
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

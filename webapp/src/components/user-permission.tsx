"use client"

import React, { useEffect, useState } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Info, RefreshCcw, Search, Settings, SquareArrowOutUpRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Checkbox } from './ui/checkbox';
import { TResponse } from '@/lib/types';
import UsersTable from './users-table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const OPTIONSTYLE = 'border-primary bg-primary/5 dark:bg-primary/20 transition-all'
const BASE_URL = 'http://127.0.0.1:8090/api/collections/groups/records'

type TGroup = {
    collectionId: string
    collectionName: string
    created: string
    id: string
    name: string
    updated: string
    users: string[]
}

type GroupsResponse = {
    items: TGroup[];
    page: number;
    perPage: number
    totalItems: number
    totalPages: number
}

type TPolicy = {
    id: string
    name: string
}

type PoliciesResponse = {
    items: TPolicy[];
    page: number;
    perPage: number
    totalItems: number
    totalPages: number
}


export default function UserPermission() {
    const [permissionOption, setPermissionOption] = useState('userToGroup');
    const [groups, setGroups] = useState<GroupsResponse>();
    const [users, setUsers] = useState<TResponse>();
    const [policies, setPolicies] = useState<PoliciesResponse>()

    useEffect(() => {
        fetchData('userToGroup')
    }, []);

    const fetchData = async (option: string) => {
        if (option === 'userToGroup') {
            const response = await fetch('http://127.0.0.1:8090/api/collections/groups/records?perPage=8');
            const data = await response.json();
            setGroups(data)
        }

        if (option === 'copyPermission') {
            const response = await fetch('http://127.0.0.1:8090/api/collections/users/records?perPage=8');
            const data = await response.json();
            setUsers(data)
        }

        if (option === 'policies') {
            const response = await fetch('http://127.0.0.1:8090/api/collections/policies/records?perPage=8');
            const data = await response.json();
            setPolicies(data)
            console.log(data)
        }
    }

    const handleChangePermission = (permission: 'userToGroup' | 'copyPermission' | 'policies') => {
        if (permission === 'userToGroup') {
            setPermissionOption('userToGroup')
            fetchData('userToGroup')
        }

        if (permission === 'copyPermission') {
            setPermissionOption('copyPermission')
            fetchData('copyPermission')
        }

        if (permission === 'policies') {
            setPermissionOption('policies')
            fetchData('policies')
        }
    }

    console.log('render')

    return (
        <>
            <Card className="">
                <CardHeader className="bg-muted">
                    <CardTitle className="text-xl">Permissions options</CardTitle>
                </CardHeader>
                <CardContent className="py-4 space-y-6">
                    <div>
                        <RadioGroup defaultValue="userToGroup"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                            <div className={`border p-4 grid grid-cols-[10px_1fr] space-x-3  ${permissionOption === 'userToGroup' ? OPTIONSTYLE : ''}`}>
                                <RadioGroupItem
                                    value="userToGroup"
                                    id="userToGroup"
                                    onClick={() => handleChangePermission('userToGroup')} />
                                <Label htmlFor="userToGroup" className="flex flex-col">
                                    <span>Add user to group</span>
                                    <p className="text-muted-foreground my-2 leading-5 font-normal">
                                        Add user to an exisiting group, or create a new group. we recommended using groups to manage user permissionOption by job function</p>
                                </Label>
                            </div>
                            <div className={`border p-4 grid grid-cols-[10px_1fr] space-x-3 ${permissionOption === 'copyPermission' ? OPTIONSTYLE : ''}`}>
                                <RadioGroupItem
                                    value="copyPermission"
                                    id="copyPermission"
                                    onClick={() => handleChangePermission('copyPermission')} />
                                <Label htmlFor="copyPermission">
                                    Copy permissions
                                    <p className="text-muted-foreground my-2 leading-5 font-normal">
                                        Copy all group memberships, attached managed policies. and inline policies trom an existing user.
                                    </p>
                                </Label>
                            </div>
                            <div
                                className={`border p-4 grid grid-cols-[10px_1fr] space-x-3 ${permissionOption === 'policies' ? OPTIONSTYLE : ''}`}>
                                <RadioGroupItem value="policies" id="policies" onClick={() => handleChangePermission('policies')} />
                                <Label htmlFor="policies">
                                    Attach policies directly
                                    <p className="text-muted-foreground my-2 leading-5 font-normal">
                                        Attach a managed policy directly to a user. As a best practice,
                                        we recommend attachina policies to a group. instead.
                                        Then, add the user to the appropriate group.
                                    </p>
                                </Label>
                            </div>
                        </RadioGroup>

                    </div>
                </CardContent>
            </Card>

            {permissionOption === 'userToGroup' && <Card className="p-0">
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
                            <Button >Create group</Button>
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
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table className="min-w-[950px] border-collapse border " >
                        <TableHeader className="bg-muted">
                            <TableRow>
                                <TableHead className="w-[50px] text-center">
                                    <Checkbox />
                                </TableHead>
                                <TableHead>Group name</TableHead>
                                <TableHead>Users</TableHead>
                                <TableHead >Attached policies</TableHead>
                                <TableHead >Created</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {groups?.items.map(group => (
                                <TableRow key={group.id}>
                                    <TableCell className="w-[50px] text-center">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className="underline text-blue-500">{group.name}</TableCell>
                                    <TableCell>{group?.users.length}</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>20/10/2024 10:00</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>}

            {permissionOption === 'copyPermission' && <Card className="p-0">
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
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    {users && <UsersTable data={users} />}
                </CardContent>
            </Card>}

            {permissionOption === 'policies' && <Card className="p-0">
                <CardHeader className="bg-muted w-full">
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-xl">
                                Permissions policies {' '}
                                <span className="text-muted-foreground text-base">(1221)</span>
                                <small className="text-blue-500 font-normal mx-1">Info</small>
                            </CardTitle>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Button variant='outline'>
                                <RefreshCcw className="h-5 w-5 text-muted-foreground" />
                            </Button>
                            <Button >Create policy</Button>
                        </div>
                    </div>
                    <div className="pt-5 space-y-4 md:space-x-3 md:space-y-0 md:flex items-end justify-between">
                        <div className="relative w-full">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search"
                                className="min-w-[200px] w-full appearance-none pl-8   border-muted focus-visible:ring-offset-0"
                            />
                        </div>
                        <div className="w-full">
                            <Label className='text-muted-foreground'>Filter by Type</Label>
                            <Select>
                                <SelectTrigger className="md:w-[200px]">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center space-x-2 ">
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
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table className="min-w-[950px] border-collapse border " >
                        <TableHeader className="bg-muted">
                            <TableRow>
                                <TableHead className="w-[50px] text-center">
                                    <Checkbox />
                                </TableHead>
                                <TableHead>Policy name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead >Attached entities</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {policies?.items.map(policy => (
                                <TableRow key={policy.id}>
                                    <TableCell className="w-[50px] text-center">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className="underline text-blue-500">{policy.name}</TableCell>
                                    <TableCell>AWS managed</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>}

        </>
    )
}

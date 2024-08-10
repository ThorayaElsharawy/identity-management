import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from './ui/checkbox';
import { TResponse } from '@/lib/types';

export default function UsersTable({ data }: { data: TResponse }) {
    return (
        <Table className="min-w-[950px] border-collapse border " >
            <TableHeader className="bg-muted">
                <TableRow>
                    <TableHead className="w-[50px] text-center">
                        <Checkbox />
                    </TableHead>
                    <TableHead>
                        <span className="">User name</span>
                    </TableHead>
                    <TableHead>
                        <span>Email</span>
                    </TableHead>
                    <TableHead >Active
                    </TableHead>
                    <TableHead >Created At
                    </TableHead>
                    <TableHead >Updated At
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.items.map(user => (
                    <TableRow key={user.id}>
                        <TableCell className="w-[50px] text-center">
                            <Checkbox />
                        </TableCell>
                        <TableCell className="underline text-blue-500">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.verified ? (<span className='text-green-500'>Active</span>) : <span className='red-'>Not active</span>}</TableCell>
                        <TableCell>20/10/2024 10:00</TableCell>
                        <TableCell>20/10/2024 10:00</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

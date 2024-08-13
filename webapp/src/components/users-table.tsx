"use client"

import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from './ui/checkbox';
import { UserResponse } from '@/lib/types';

export default function UsersTable({ data, currentPage }: { data: UserResponse, currentPage?: number }) {
    const [checked, setChecked] = useState(new Array(data?.items?.length).fill(false));

    // useEffect(() => {
    //     setChecked(new Array(data?.items.length).fill(false));
    // }, [currentPage]);

    const handleAllChecked = (isChecked: boolean) => {
        setChecked(new Array(data?.items?.length).fill(isChecked));
    };
    
    const handleCheckboxChange = (index: number) => {
        const updatedChecked = [...checked];
        updatedChecked[index] = !updatedChecked[index];
        setChecked(updatedChecked);
    };

    return (
        <Table className="min-w-[950px] border-collapse border " >
            <TableHeader className="bg-muted">
                <TableRow>
                    <TableHead className="w-[50px] text-center">
                        <Checkbox
                            checked={checked.every(Boolean)}
                            onCheckedChange={handleAllChecked}
                        />
                    </TableHead>
                    <TableHead>User name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead >Active</TableHead>
                    <TableHead >Created At</TableHead>
                    <TableHead >Updated At</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.items?.map((user, index) => (
                    <TableRow key={user.id} className='h-[55px]'>
                        <TableCell className="w-[50px] text-center">
                        <Checkbox 
                                checked={checked[index]}
                                onCheckedChange={() => handleCheckboxChange(index)}
                            />
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

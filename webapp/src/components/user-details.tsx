import React from 'react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Info, SquareArrowOutUpRight } from 'lucide-react';

export default function UserDetails() {
    return (
        <Card className="">
            <CardHeader className="bg-muted">
                <CardTitle>User details</CardTitle>
            </CardHeader>
            <CardContent className="py-4 space-y-6">
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">User name</Label>
                        <Input type="text" id="name" name="name" />
                        <small className="text-muted-foreground">
                            The user name can have up to 64 characters. Valid characters: A-Z, a-z, 0-9, and +=, @ _ - (hyphen)
                        </small>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center  space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Provide user access to the NCAI Management Console - optional</Label>
                        </div>
                        <small className="text-muted-foreground">
                            If you're providing console access to a person, it's a
                            <span className="px-1 text-[#0073bc] font-medium">
                                best practice
                                <SquareArrowOutUpRight className="inline-block w-4 h-4 -mt-1 mx-0.5" />
                            </span>
                            to manage their access in IAM Identity Center.
                        </small>
                    </div>
                </form>

                <div className="border border-[#5397cd] p-4 grid grid-cols-[20px_1fr] space-x-2 ">
                    <Info className="text-blue-500 w-5 h-5" />
                    <p className="text-sm">
                        If you are creating programmatic access through access keys or service-specific credentials for AWS CodeCommit or NCAI Keyspaces, you can generate them after you create this IAM user.
                        <span className="px-2 underline text-[#0073bc] font-medium">Learn more
                            <SquareArrowOutUpRight className="inline-block w-4 h-4 -mt-1 mx-1" />
                        </span>
                    </p>
                </div>
            </CardContent>
        </Card>

    )
}

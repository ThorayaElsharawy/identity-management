import React from 'react'

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  SquareArrowOutUpRight } from "lucide-react";

import UserDetails from "@/components/user-details";
import SetPermission from '@/components/set-permission';

export default function CreataTabs() {
    return (

        <Tabs defaultValue="details" className="w-full h-full flex-col">
            <TabsList className="grid grid-cols-1  md:grid-cols-3 w-full h-full md:h-[60px] mb-5">
                <TabsTrigger className="text-lg h-full py-3 md:py-0" value="details">Specify user details</TabsTrigger>
                <TabsTrigger className="text-lg h-full py-3 md:py-0" value="permission">Set permissions</TabsTrigger>
                <TabsTrigger className="text-lg h-full py-3 md:py-0" value="review&create">Review and create</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
                <div className="space-y-4">
                    <h1 className="text-3xl font-medium">Specify user details</h1>

                    <UserDetails />

                    <div className="flex w-full justify-end space-x-4">
                        <Button variant='ghost'>Cancel</Button>
                        <Button variant='default'>Next</Button>
                    </div>
                </div>
            </TabsContent>

            <TabsContent value="permission">
                <div className="space-y-4">
                    <h1 className="text-3xl font-medium text-black">Set persmission</h1>
                    <small className="text-muted-foreground">
                        Add user to an existing group or create a new one. Using groups is a best-practice way to manage user's permissions by job functions. Learn more
                        <span className="px-1 text-[#0073bc] font-medium">
                            best practice
                            <SquareArrowOutUpRight className="inline-block w-4 h-4 -mt-1 mx-0.5" />
                        </span>
                    </small>

                    <SetPermission />
                </div>
            </TabsContent>
        </Tabs>
    )
}

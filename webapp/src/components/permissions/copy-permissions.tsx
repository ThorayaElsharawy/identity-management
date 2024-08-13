import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Info, RefreshCcw, Search, Settings, SquareArrowOutUpRight } from "lucide-react";
import { UserResponse } from '@/lib/types';
import { Checkbox } from "../ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export default function CopyPermissions({ users }: { users: UserResponse }) {
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
                                    <Checkbox
                                        // checked={checked.every(Boolean)}
                                        // onCheckedChange={handleAllChecked}
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
                            {users?.items?.map((user) => (
                                <TableRow key={user.id} className='h-[55px]'>
                                    <TableCell className="w-[50px] text-center">
                                        <Checkbox
                                            // checked={checked[index]}
                                            // onCheckedChange={() => handleCheckboxChange(index)}
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

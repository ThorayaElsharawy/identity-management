import { PoliciesResponse } from '@/lib/types'

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { RefreshCcw, Search, SquareArrowOutUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Checkbox } from '../ui/checkbox';

export default function AttachPolicies({ policies }: { policies: PoliciesResponse }) {
    return (
        <>
            <Card className="p-0">
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
                        </div>
                    </div>
                    <div className="pt-5 space-y-4 md:space-x-3 md:space-y-0 md:flex items-end justify-between">
                        <div className="relative w-full">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search"
                                className="min-w-[200px] w-full appearance-none pl-8 border-muted focus-visible:ring-offset-0"
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
                            {/* <Pagination /> */}
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    <Table className="min-w-[950px] border-collapse border" >
                        <TableHeader className="bg-muted">
                            <TableRow>
                                <TableHead className="w-[50px] text-center">
                                    <Checkbox />
                                </TableHead>
                                <TableHead>
                                    Policy name <SquareArrowOutUpRight className="inline-block w-4 h-4 -mt-1" />
                                </TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead >Attached entities</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {policies?.items?.map(policy => (
                                <TableRow key={policy.id}>
                                    <TableCell className="w-[50px] text-center">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className="underline text-blue-500">{policy.name}</TableCell>
                                    <TableCell>AWS managed</TableCell>
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

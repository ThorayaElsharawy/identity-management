"use client"

import React, { useEffect, useState } from 'react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { GroupsResponse, PoliciesResponse, UserResponse } from '@/lib/types';

import CopyPermissions from './permissions/copy-permissions';
import UserGroups from './permissions/user-groups';
import AttachPolicies from './permissions/attach-policies';

const OPTIONSTYLE = 'border-primary bg-primary/5 dark:bg-primary/20 transition-all'
const BASE_URL = 'http://127.0.0.1:8090/api/collections'

type OPTIONTYPE = 'userToGroup' | 'copyPermission' | 'policies'

export default function SetPermission() {
    const [permissionOption, setPermissionOption] = useState('userToGroup');
    const [groups, setGroups] = useState<GroupsResponse>();
    const [users, setUsers] = useState<UserResponse>();
    const [policies, setPolicies] = useState<PoliciesResponse>()

    const urls = {
        userToGroup: `${BASE_URL}/groups/records?perPage=8`,
        copyPermission: `${BASE_URL}/users/records?perPage=8`,
        policies: `${BASE_URL}/policies/records?perPage=8`,
    };

    useEffect(() => {
        fetchData('userToGroup')
    }, []);

    const fetchData = async (option: OPTIONTYPE) => {
        const response = await fetch(urls[option])
        const data = await response.json();

        if (option === 'userToGroup') setGroups(data);
        if (option === 'copyPermission') setUsers(data);
        if (option === 'policies') setPolicies(data);
    }

    const handleChangePermission = (permission: OPTIONTYPE) => {
        setPermissionOption(permission)
        fetchData(permission)
    }

    const renderRadioOption = (value: OPTIONTYPE, label: string, description: string) => (
        <div className={`border p-4 grid grid-cols-[10px_1fr] space-x-3  ${permissionOption === value ? OPTIONSTYLE : ''}`}>
            <RadioGroupItem
                value={value}
                id={value}
                onClick={() => handleChangePermission(value)} />
            <Label htmlFor={value} className="flex flex-col">
                <span>{label}</span>
                <p className="text-muted-foreground my-2 leading-5 font-normal">{description}</p>
            </Label>
        </div>
    )

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
                            {renderRadioOption('userToGroup', 'Add user to group', 'Add user to an exisiting group, or create a new group. we recommended using groups to manage user permissionOption by job function')}
                            {renderRadioOption('copyPermission', 'Copy permissions', 'Copy all group memberships, attached managed policies. and inline policies trom an existing user.')}
                            {renderRadioOption('policies', 'Attach policies directly', 'Attach a managed policy directly to a user. As a best practice, we recommend attachina policies to a group. instead. Then, add the user to the appropriate group.')}
                        </RadioGroup>
                    </div>
                </CardContent>
            </Card>

            {permissionOption === 'userToGroup' && groups &&
                <UserGroups groups={groups} />
            }

            {permissionOption === 'copyPermission' && users &&
                <CopyPermissions users={users} />
            }

            {permissionOption === 'policies' && policies &&
                <AttachPolicies policies={policies} />
            }

        </>
    )
}

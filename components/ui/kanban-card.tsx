import React from 'react'
import { cn } from '@/helper/utility'
/* 
@params 
*/

type kanbanCardProps = {
    title: string;
    description: string
}

export default function kanbanCard({ title, description }: kanbanCardProps) {
    return (
        <div
            draggable
            className={cn('rounded-lg border border-gray-300 p-2 m-2 cursor-pointer')}
        >
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>
    )
}
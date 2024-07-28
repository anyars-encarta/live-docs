'use client';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const Notifications = () => {
    return (
        <Popover>
            <PopoverTrigger className='relative flex size-10 items-center justify-center rounded-lg'>Open</PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
    )
}

export default Notifications
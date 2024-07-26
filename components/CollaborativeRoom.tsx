"use client";

import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs';
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense';
import ActiveCollaborators from './ActiveCollaborators';
import { useRef, useState } from 'react';

const CollaborativeRoom = ({ roomId, roomMetadata }: CollaborativeRoomProps) => {
    const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);

    return (
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                <div className='collaborative-room'>
                    <Header>
                        <div ref={containerRef} className='flex w-fit items-center justify-center gap-2'>
                            {editing && !loading ? (
                                <Input />
                            ):(

                            )}
                        </div>

                        <div className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>
                            <ActiveCollaborators />

                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                        </div>
                    </Header>

                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default CollaborativeRoom
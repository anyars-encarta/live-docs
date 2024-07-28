'use client';

import { useState } from "react"
import { Button } from "./ui/button"
import { useSelf } from "@liveblocks/react/suspense";


const ShareModal = ({ roomId, collaborators, creatorId, currentUserType}: ShareDocumentDialogProps) => {
    const user = useSelf();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState<UserType>('viewer');

    const shareDocumentHandler = async () => {}
    
  return (
    <Button>Share</Button>
  )
}

export default ShareModal
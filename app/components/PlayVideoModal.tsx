import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import React, { Dispatch, SetStateAction } from 'react'

type PlayVideoModalProps = {
    youtubeUrl: string;
    title: string;
    overview: string;
    state: boolean;
    changeState: Dispatch<SetStateAction<boolean>>;
    age: number;
    duration: number;
    release: number;
}

export default function PlayVideoModal({
    youtubeUrl,
    title,
    overview,
    state,
    changeState,
    age,
    duration,
    release
}: Readonly<PlayVideoModalProps>) {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="line-clamp-3">
                {overview}
            </DialogDescription>
            <div className="flex gap-x-2 items-center">
                <p>{release}</p>
                <p className="border py-o.5 px-1 border-gray-200 rounded">{age}+</p>
                <p>{duration}h</p>
            </div>
            </DialogHeader>
            <iframe title={title} src={youtubeUrl} height={250} className="w-full"></iframe>
        </DialogContent>
    </Dialog>
  )
}

'use client';

import {HoverCard, HoverCardTrigger} from "@radix-ui/react-hover-card";
import React from "react";
import {HoverCardContent} from "@/components/ui/hover-card";
import Image from "next/image";
import {AiOutlineWechat} from "react-icons/ai";

const QrWechat = ({href}) => {
    return (
        <HoverCard>
            <HoverCardTrigger className={'cursor-pointer'}>
                <AiOutlineWechat size={20}/>
            </HoverCardTrigger>
            <HoverCardContent>
                <Image
                    src={href}
                    loading="lazy"
                    width={300}
                    height={150}
                    alt="wechat"
                    style={{objectFit: "cover"}}
                />
            </HoverCardContent>
        </HoverCard>
    );
}


export default QrWechat
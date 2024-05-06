'use client';

import Link from "next/link";
import {CardDescription, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import siteData from "@/blog.config";


const ProjectContent = () => {
    const {project: {projects, getStatus}} = siteData;

    return (
        <div className={'pt-8 space-y-8'}>
            {projects.map((project: any, index: number): any => {
                const {variant, text}: any = getStatus(project.status)
                return (
                    <div className={'not-prose'} key={index}>
                        <div className={'flex items-center mb-2'}>
                            <Link href={project.href} className={'underline underline-offset-4'}>
                                <CardTitle>
                                    {project.name}
                                </CardTitle>
                            </Link>
                            {project.status && <Badge className={'ml-4'} variant={variant}>
                                {text}
                            </Badge>}
                            {project.github && <Button className={'ml-2'} variant={'ghost'} size={'icon'}>
                              <Link href={project.github}>
                                <Github size={20}/>
                              </Link>
                            </Button>}
                        </div>
                        <CardDescription className={'text-base'}>
                            {project.description}
                        </CardDescription>
                    </div>
                )
            })}
        </div>
    );
}


export default ProjectContent
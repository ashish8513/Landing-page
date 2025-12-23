import { ReactNode } from "react";
import { ComponentType, SVGProps } from "react";
export interface NavItem {
    name: string;
    value: string;
    link: string;
}
export interface DesignProject {
    src: string;
    title: string;
    description: string;
}
export interface Feature {
    id: number;
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

export interface ServiceList {
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
    name: string
}

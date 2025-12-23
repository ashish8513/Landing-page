'use client';

import React from "react";
import { Arrowright } from "./Icons";
import Link from "next/link";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  title,
  onClick,
  href,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href || "#"}
      onClick={onClick}
      className={`px-3 py-2 text-base font-normal text-white rounded-[36px] buttonbg transition flex gap-3 items-center cursor-pointer group ${className}`}
    >
      <span>{title}</span>

      <span className="h-6 w-6 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
        <Arrowright />
      </span>
    </Link>
  );
}

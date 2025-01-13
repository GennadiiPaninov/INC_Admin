import { forwardRef, memo } from "react";

import { IconProps } from "@/shared/assets/types/types";

export const DeleteUserIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => {
    return (
        <svg
            fill={"none"}
            height={24}
            ref={ref}
            width={24}
        >
            <g clipPath={"url(#a)"} fill={"#fff"}>
                <path d={"M21 6h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2Zm-11 5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 8a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 1 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7Z"} />
            </g>
            <defs>
                <clipPath id={"a"}>
                    <path d={"M0 0h24v24H0z"} fill={"#fff"} />
                </clipPath>
            </defs>
        </svg>
    )
    
  }),
);

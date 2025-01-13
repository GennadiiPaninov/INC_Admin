import { forwardRef, memo } from "react";

import { IconProps } from "@/shared/assets/types/types";

export const BanInSystemIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => {
    return (
        <svg
            fill={"none"}
            height={24}
            ref={ref}
            width={24}
        >
            <path
                d={"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"}
                fill={"#fff"}
            />
            <path d={"m7.043 19.362 10-15"} stroke={"#fff"} strokeWidth={2.3} />
        </svg>
    )
    
  }),
);

import { forwardRef, memo } from "react";

import { IconProps } from "@/shared/assets/types/types";

export const TableMenuIcons = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => {
    return (
        <svg
            fill={"none"}
            height={24}
            ref={ref}
            width={24}
        >
            <path
                d={"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}
                fill={"#fff"}
            />
        </svg>
    );
  }),
);

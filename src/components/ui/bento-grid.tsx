import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[27rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header: string | StaticImageData;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col  justify-between space-y-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-lg p-5 shadow-xl transition duration-300 hover:scale-[1.02] hover:border-teal-300/40 hover:shadow-2xl ",
        className
      )}
    >
      <Image
        src={header}
        alt=""
        width={400}
        height={400}
        className="w-full h-64 object-contain md:object-cover rounded-md"
      />
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        <div className="mb-2 text-teal-500">{icon}</div>
        <div className="mb-1 text-xl font-bold text-gray-900 ">
          {title}
        </div>
        <div className="text-sm text-gray-600 ">
          {description}
        </div>
      </div>
    </div>
  );
};

import React from "react";

const Title = ({
  children,
  subTitle,
  isBorder,
  className,
  titleClassName,
  subTitleClassName,
  borderClassName,
}: {
  children: any;
  subTitle?: string;
  color?: string;
  className?: string;
  isBorder?: boolean;
  titleClassName?: string;
  subTitleClassName?: string;
  borderClassName?: string;
}) => {
  return (
    <div className={`${className}`}>
      <h1 className={`text-4xl text-black ${titleClassName}`}>{children}</h1>
      {subTitleClassName && (
        <p className={`text-base text-light mb-2 ${subTitleClassName}`}>
          {subTitle}
        </p>
      )}
      {isBorder && (
        <div
          className={`w-full h-1 bg-black rounded-lg ${borderClassName}`}
        ></div>
      )}
    </div>
  );
};

export default Title;

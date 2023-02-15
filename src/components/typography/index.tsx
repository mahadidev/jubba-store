"use client";
import Image from "next/image";
import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const H1 = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <h1 className={`text-2xl sm:text-5xl ${className && className}`}>
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <h2
      className={`text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${
        className && className
      }`}
    >
      {children}
    </h2>
  );
};

export const H3 = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <h3 className={`text-base sm:text-2xl ${className && className}`}>
      {children}
    </h3>
  );
};

export const H4 = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <h4 className={`text-sm sm:text-xl ${className && className}`}>
      {children}
    </h4>
  );
};

export const H5 = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <h5 className={`text-sm sm:text-xl ${className && className}`}>
      {children}
    </h5>
  );
};

export const H6 = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <h6 className={`text-sm sm:text-lg ${className && className}`}>
      {children}
    </h6>
  );
};

export const P = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <p className={`text-sm sm:text-base ${className && className}`}>
      {children}
    </p>
  );
};

export const A = ({
  children,
  className,
  href,
  target,
  rel,
}: {
  children: any;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}) => {
  return (
    <a
      className={`text-sm sm:text-base ${className && className}`}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </a>
  );
};

export const Button = ({
  children,
  className,
  onClick,
}: {
  children: any;
  className?: string;
  onClick?: CallableFunction;
}) => {
  return (
    <button
      className={`flex gap-3 items-center px-4 sm:px-7 py-2 rounded-sm ${className}`}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
};

export const Section = ({
  children,
  className,
  contain = true,
}: {
  children: any;
  className?: string;
  contain?: boolean;
}) => {
  return (
    <section className={`py-12 sm:py-36 ${className && className}`}>
      <div className={`${contain && "container"}`}>{children}</div>
    </section>
  );
};

export const Title = ({
  title,
  subTitle,
  icon,
  className,
  titleClassName,
  align,
  lineDisabled,
}: {
  title: string;
  subTitle?: string;
  icon?: any;
  className?: string;
  titleClassName?: string;
  align?: "start" | "center" | "end";
  lineDisabled?: boolean;
}) => {
  return (
    <div className={`mb-8 ${className}`}>
      {icon && (
        <div
          className={`w-max h-max p-3 mb-3 rounded__ring ${
            align === "center" && "text-center mx-auto"
          } ${align === "end" && "text-end ml-auto"}`}
        >
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-2xl bg-green text-white">
            {icon}
          </div>
        </div>
      )}
      <H1
        className={`${align === "center" && "text-center"} ${
          align === "end" && "text-end"
        } text-black ${titleClassName}`}
      >
        {title}
      </H1>
      <div
        className={`w-full max-w-[500px] ${
          align === "center" && "text-center mx-auto"
        } ${align === "end" && "text-end ml-auto"}`}
      >
        {subTitle && <H4 className={`text-light mt-1 sm:mt-2`}>{subTitle}</H4>}

        {!lineDisabled && (
          <div
            className={`w-full max-w-[200px] h-1 bg-green rounded-md mt-1 ${
              align === "center" && "mx-auto"
            } ${align === "end" && "ml-auto"}`}
          />
        )}
      </div>
    </div>
  );
};

export const Input = ({
  className,
  inputClassName,
  labelClassName,
  type,
  label,
  placeholder,
  name,
}: {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  name?: string;
}) => {
  return (
    <>
      <div className={`mb-3 ${className}`}>
        {label && (
          <label className={`w-full block mb-2 ${labelClassName}`}>
            {label}{" "}
          </label>
        )}
        {type !== "textarea" && (
          <>
            <input
              type={type ? type : "text"}
              className={`w-full px-3 py-2 bg-gray- text-black font-thin border-b-[3px] rounded-sm outline-none focus:border-red transition-all ${inputClassName}`}
              placeholder={placeholder}
            />
          </>
        )}
        {type === "textarea" && (
          <textarea
            className={`w-full px-3 py-2 bg-gray- text-black font-thin border-b-[3px] rounded-sm outline-none focus:border-red transition-all ${inputClassName}`}
            placeholder={placeholder}
            rows={4}
          ></textarea>
        )}
      </div>
    </>
  );
};

export const Radio = ({
  label,
  name,
  onChange,
  children,
}: {
  label: string;
  name: string;
  onChange: CallableFunction;
  children: any;
}) => {
  return (
    <>
      <div className="">
        <input
          type="radio"
          name={name}
          id={label}
          value={label}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          className="hidden peer"
        />
        <label
          htmlFor={`${label}`}
          className="flex gap-2 items-center px-3 py-2 ring-[1px] ring-gray-200 peer-checked:ring-red/40 text-light peer-checked:bg-red/10 rounded-sm text-xs"
        >
          {children}
        </label>
      </div>
    </>
  );
};

export const Quantity = ({
  value,
  onChange,
}: {
  value?: number;
  onChange: CallableFunction;
}) => {
  const [min, setMin] = React.useState<number>(1);
  const [max, setMax] = React.useState<number>(7);
  const [val, setVal] = React.useState<number>(value ? value : 1);

  // increase
  const increase = () => {
    if (val + 1 <= max) {
      setVal((prevVal) => prevVal + 1);
      onChange(val + 1);
    }
  };
  // decrease
  const decrease = () => {
    if (val - 1 >= min) {
      setVal((prevVal) => prevVal - 1);
      onChange(val - 1);
    }
  };

  // change
  const change = (val: number) => {
    if (val <= max && val >= min) {
      setVal(val);
      onChange(val);
    }
  };

  return (
    <>
      <div className="flex items-stretch">
        <button
          className="flex items-center cursor-pointer px-2 py-1 bg-white"
          onClick={decrease}
        >
          <AiOutlineMinus />
        </button>
        <input
          className="w-9 py-1 bg-white outline-0 text-center"
          value={val}
          onChange={(e: any) => {
            change(e.target.value);
          }}
        />
        <button
          className="flex items-center cursor-pointer px-2 py-1 bg-white"
          onClick={increase}
        >
          <AiOutlinePlus />
        </button>
      </div>
    </>
  );
};

import React from "react";

const Breadcrumb = ({
  title,
  subTitle,
  bg,
}: {
  title: string;
  subTitle: string;
  bg?: string;
}) => {
  return (
    <section
      className={`py-24 bg-[url(${
        bg ? bg : `../../public/images/breadcrumb_bg.png`
      })]`}
    >
      <h1 className="text-4xl text-white font-bold">{title}</h1>
      <p className="text-xl text-white font-bold">{subTitle}</p>
    </section>
  );
};

export default Breadcrumb;

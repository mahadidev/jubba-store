import Image from "next/image";
import React from "react";
import { H1, H4, Blog, Title } from "@/components";

const Blogs = () => {
  return (
    <section className="py-12 sm:py-36 bg-[#f8f9ff]">
      <div className="container">
        <Title
          title="কিছু ইসলামিক ব্লগ"
          subTitle="জোব্বা নবী (সা.) পরেছেন, সাব্যস্ত হয়েছে। সুতরাং কেউ যদি নবী (সা.)
            পরেছেন, এই জন্য পরেন, তাহলে তিনি সওয়াব পাবেন।"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-3 sm:gap-5">
          {[
            {
              title: "Black Magic",
              description:
                "This Is How You Can Protect Yourself from Black Magic | Sh. Dr. Ali Mohammed Salah",
              thumbnail: "/images/blogs/black_magic.jpg",
              href: "https://youtu.be/BvXoVVzg2bg",
            },
            {
              title: "কবরের জীবন",
              description:
                "কবরের জীবন কতইনা ভয়ানক | মিজানুর রহমান আজহারী | Surah At Takathur Tafsir | Mizanur Rahman Azhari",
              thumbnail: "/images/blogs/koborer_jibon.jpg",
              href: "https://youtu.be/RG5BV8DCGCg",
            },
            {
              title: "আমাদের জীবনের উদ্দেশ্য",
              description:
                "আল্লাহ আমাদের কেনো সৃষ্টি করলেন ? আবু ত্ব-হা মুহাম্মদ আদনান || Abu Toha Muhammad Adnan New Waz",
              thumbnail: "/images/blogs/amader_jiboner_uddeso.jpg",
              href: "https://youtu.be/-8nuP1fymY4",
            },
            {
              title: "যে হারাম ধ্বংস করে",
              description:
                "একদম নতুন ৩০টি প্রশ্নের উত্তর দিলেন শায়খ আহমাদুল্লাহ | Bangla Islamic Waz Mahfil | Shaikh Ahmadullah",
              thumbnail: "/images/blogs/bad_reason.jpg",
              href: "https://youtu.be/tLdnGDXRPZ8",
            },
          ].map(
            (
              item: {
                title: string;
                thumbnail: string;
                description: string;
                href: string;
              },
              index: number
            ) => (
              <Blog key={index} {...item} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

import React from "react";
import { Button, H3, P, Input } from "@/components";

const Contact = () => {
  return (
    <section className="py-24 bg-[url(../../public/images/home_contact_bg.png)] bg-cover bg-no-repeat bg-bottom flex items-center relative contact__section">
      <div className="container">
        <div className="w-full max-w-[600px] ml-auto backdrop-blur-lg bg-white/30 text-white font-bold rounded-lg px-4 py-6">
          <H3>আমাদের ইমেল করুন</H3>
          <P className="font-light">
            আমাদের সাথে সংযোগ করুন এবং আপনার অনুসন্ধান, প্রতিক্রিয়া, বা পরামর্শ
            পাঠান। আমাদের দল আপনাকে সাহায্য করার জন্য সর্বদা প্রস্তুত।
          </P>
          <div className="w-full h-[2px] bg-white my-2"></div>
          <form>
            <Input
              label="ইমেল ঠিকানাঃ"
              type="email"
              placeholder="আপনার ইমেল ঠিকানা লিখুন"
            />
            <Input
              label="বিষয়ঃ"
              type="email"
              placeholder="কোন বিষয়ে আপনি ইমেল করতে চান?"
            />
            <Input
              label="মেসেজঃ"
              type="textarea"
              placeholder="আপনার মেসেজটি লিখুন"
            />
            <div className="mb-3">
              <Button className="bg-red text-white">ইমেল পাঠান</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

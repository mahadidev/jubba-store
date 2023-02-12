import React from "react";
import Button from "../button";
import Title from "../title";

const Contact = () => {
  return (
    <section className="py-24 bg-[url(../../public/images/home_contact_bg.png)] bg-cover bg-no-repeat bg-bottom flex items-center relative contact__section">
      <div className="container">
        <div className="w-full max-w-[600px] ml-auto backdrop-blur-lg bg-white/30 text-white font-bold rounded-lg px-4 py-6">
          <Title titleClassName="!text-white">আমাদের ইমেল করুন</Title>
          <div className="w-full h-[2px] bg-white my-2"></div>
          <form>
            <div className="mb-3">
              <label className="w-full block">ইমেল ঠিকানাঃ</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-50 text-black font-thin border-b-[3px] rounded-sm outline-none focus:border-red transition-all"
                placeholder="আপনার ইমেল ঠিকানা লিখুন"
                required
              />
            </div>
            <div className="mb-3">
              <label className="w-full block">বিষয়ঃ </label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray- text-black font-thin border-b-[3px] rounded-sm outline-none focus:border-red transition-all"
                placeholder="কোন বিষয়ে আপনি ইমেল করতে চান?"
                required
              />
            </div>
            <div className="mb-3">
              <label className="w-full block">মেসেজঃ </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 bg-gray-50 text-black font-thin border-b-[3px] rounded-sm outline-none focus:border-red transition-all"
                placeholder="আপনার মেসেজটি লিখুন"
                required
              />
            </div>
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

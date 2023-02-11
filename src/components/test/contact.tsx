import React from "react";
import Button from "../button";

const Contact = () => {
  return (
    <section className="py-12 bg-pink-50">
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          <div></div>
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

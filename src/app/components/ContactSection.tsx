import React from "react";
import { contactLinks, emailAddress } from "../lib/data";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="section__styles py-[32px] flex text-center bg-slate-800 flex-col gap-6">
      {/* Title and Subheader */}
      <h1 className="text-white">
        Feel free to contact me at {emailAddress} or through social media
      </h1>
      {contactLinks.length && (
        <div className="flex w-full justify-center gap-8">
          {contactLinks.map((contact) => {
            if (contact.url)
              return (
                <a className="fill-white" href={contact.url}>
                  <Image
                    height={32}
                    width={32}
                    src={contact.iconPath}
                    alt="Link"
                  />
                </a>
              );
          })}
        </div>
      )}
      <a
        href="https://wa.me/201023717157"
        target="_blank"
        className="text-green-400 underline opacity-50 hover:opacity-100 w-fit mx-auto"
      >
        Want a website like this? Click here
      </a>
    </section>
  );
};

export default ContactSection;

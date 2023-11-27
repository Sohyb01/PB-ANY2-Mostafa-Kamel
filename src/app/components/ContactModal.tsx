"use client";
import React, { useState } from "react";
import { contactLinks, emailAddress } from "../lib/data";
import Image from "next/image";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalButton = () => {
    isOpen ? closeModal() : openModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="px-6 py-3 border-slate-800 border-[2px] text-slate-800 text-base rounded-md hover:bg-slate-800 hover:text-white transition ease-linear duration-100"
        onClick={handleModalButton}
      >
        Contact Me
      </button>
      {isOpen && (
        <div
          onClick={handleModalButton}
          className={`fixed left-0 top-0 w-full h-full z-[100] grid place-items-center after:w-full after:h-full after:z-[10] after:absolute duration-100 ${
            isOpen
              ? `after:bg-slate-800 after:opacity-70`
              : `after:bg-none after:opacity-0`
          }`}
        >
          <div className="bg-slate-800 max-w-[600px] p-8 rounded-[32px] z-[1000] text-slate-200 flex flex-col gap-4">
            <h3 className="">Contact me at {emailAddress}</h3>
            {contactLinks.some(
              (obj) => obj.hasOwnProperty("url") && obj.url !== null
            ) && (
              <>
                or through social media
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
              </>
            )}
            <div>
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleModalButton}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

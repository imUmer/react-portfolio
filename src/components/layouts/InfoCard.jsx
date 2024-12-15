import React from 'react'

import IconBadge from "../badges/IconBadge";
import img from "../../img/avatars/avatar.png";

import mail from "../../img/svg/letter-svgrepo-com.svg";
import phone from "../../img/svg/phone-svgrepo-com.svg";
import card from "../../img/svg/card-2-svgrepo-com.svg";

function InfoCard() {
  return (
     <div className="h-full flex flex-col items-center">
            <img
              src={img}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4 border border-yellow-200 bg-slate-500"
            />
            <h1 className="text-3xl font-semibold">Umer Niaz</h1>
            <p className="text-lg text-black-300">Web Developer</p>
            <div className="mt-6 space-y-3">
              <div className="flex gap-2 items-center">
                <IconBadge icon={mail} />
                <div>
                  <p className="text-sm text-black-400">EMAIL</p>
                  <p className="text-sm">imumerniaz@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <IconBadge icon={phone} />
                <div>
                  <p className="text-sm text-black-400">PHONE</p>
                  <p className="text-sm">+966574457338</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <IconBadge icon={card} />
                <div>
                  <p className="text-sm text-black-400">BIRTHDAY</p>
                  <p className="text-sm">February 05, 2001</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <IconBadge icon={card} />
                <div>
                  <p className="text-sm text-black-400">BIRTHDAY</p>
                  <p className="text-sm">February 05, 2001</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default InfoCard;

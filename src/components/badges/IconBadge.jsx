import React from "react";

export default function IconBadge({ icon }) {
  return (
    <div className="flex gap-2 backdrop-blur-sm p-2 border-t-2 border-l-2 border-slate-800/20 rounded-xl w-fit  bg-slate-500">
      <div className="icon-inner">
        <img
          src={icon}
          alt=""
          width="20px"
          className="group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:hue-rotate-120 group-hover:sepia group-hover:saturate-200"
        />
      </div>
    </div>
  );
}

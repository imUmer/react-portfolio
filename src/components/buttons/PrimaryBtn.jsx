import React from "react";

export default function PrimaryBtn({ text, icon }) {
  const handleDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/UmerResume.pdf`; // Path to the file in the public folder
    const fileName = "UmerResume.pdf"; // Desired file name during download

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = fileUrl;
    a.download = fileName; // Specify file name
    document.body.appendChild(a);
    a.click();
    a.remove(); // Clean up the temporary link
  };

  return (
    <div
      onClick={handleDownload}
      className="flex gap-2 my-6 backdrop-blur-sm p-1 border rounded-3xl w-fit px-3 hover:bg-slate-500 hover:text-white group cursor-pointer"
    >
      <p className="group-hover:text-green-00">{text}</p>
      <img
        src={icon}
        width="20px"
        alt="icon"
        className="group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:hue-rotate-120 group-hover:sepia group-hover:saturate-200"
      />
    </div>
  );
}

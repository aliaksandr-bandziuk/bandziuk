import Image from "next/image";

export default function Loading() {
  return (
    <div className="loader-wrapper">
      <span className="loader">
        <Image
          src="https://cdn.sanity.io/images/x6jc462y/production/f070d11f862c00400711d6efca18504713a95c27-772x242.png"
          alt="Loading..."
          width={772}
          height={242}
        />
      </span>
    </div>
  );
}

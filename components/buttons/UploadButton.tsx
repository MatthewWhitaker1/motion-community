"use client";

import { Button } from "../ui/button";
import { useState } from "react";
import { PreClickedButton } from "./PreClickedButton";
import { PostClickedButton } from "./PostClickedButton";

export function UploadButton() {
  const [isVisible, setIsVisible] = useState(false);
  const btnClasses = "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700";

  const handleButton = () => {
    console.log('Upload button clicked, changing state to visible');
    setIsVisible(true);
  };

  return (
    <div className="w-full flex justify-center">
      {!isVisible ? (
        <PreClickedButton
          className={btnClasses}
          onClick={handleButton}
        />
      ) : (
        <PostClickedButton className={btnClasses} />
      )}
    </div>
  );
}



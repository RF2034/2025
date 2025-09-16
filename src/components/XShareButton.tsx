"use client";

import { EVENT_INFO } from "@/constants/eventInfo";

interface XShareButtonProps {
  text?: string;
  url?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function XShareButton({ 
  text = `${EVENT_INFO.title} | 廃校で踊ろう！ 11/22-24開催`, 
  url = "https://gakkou-rave.com",
  className = "",
  size = "md" 
}: XShareButtonProps) {
  const handleShare = () => {
    const shareText = encodeURIComponent(text);
    const shareUrl = encodeURIComponent(url);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
    
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const sizeClasses = {
    sm: "btn-sm",
    md: "btn-md", 
    lg: "btn-lg"
  };

  return (
    <button
      onClick={handleShare}
      className={`btn btn-outline ${sizeClasses[size]} ${className}`}
      aria-label="Xでシェア"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        className="fill-current"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
      シェア
    </button>
  );
}
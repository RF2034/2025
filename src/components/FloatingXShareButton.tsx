"use client";

import { SHARE_TEXT } from "@/constants/shareText";

export default function FloatingXShareButton() {
  const handleShare = () => {
    const shareText = encodeURIComponent(SHARE_TEXT.text);
    const shareUrl = encodeURIComponent(SHARE_TEXT.url);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
    
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleShare}
        className="btn btn-circle btn-primary shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Xでシェア"
        title="Xでシェア"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          className="fill-current"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>
    </div>
  );
}

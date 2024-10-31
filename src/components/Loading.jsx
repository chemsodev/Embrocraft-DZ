import { useEffect, useState } from "react";

export default function Loading() {
  const [showBrowserHint, setShowBrowserHint] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for Instagram or Messenger in-app browsers
    if (/Instagram/.test(userAgent) || /FBAN|FBAV/.test(userAgent)) {
      setShowBrowserHint(true);
    }
  }, []);

  const openInDefaultBrowser = () => {
    const url = window.location.href;

    // This will attempt to open in the device's default browser
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null; // Ensures it doesn’t redirect back to the app
    } else {
      alert("Please open this link in your default browser.");
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 z-50 space-y-6">
      <div className="animate-spin rounded-full h-12 w-12 border-y-4 border-t-[#F1C232] border-b-[#8C2F39]"></div>

      {showBrowserHint && (
        <>
          <p className="text-gray-700 text-center px-4 text-lg">
            For the best experience, open this page in a browser.
          </p>

          <button
            onClick={openInDefaultBrowser}
            className="bg-[#F1C232] text-[#8C2F39] font-semibold py-2 px-6 rounded-md hover:bg-[#8C2F39] hover:text-white transition-transform duration-200"
          >
            Open in Browser
          </button>
        </>
      )}
    </div>
  );
}
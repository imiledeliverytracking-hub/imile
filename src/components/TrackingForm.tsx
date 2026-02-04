"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      router.push(`/track/${trackingNumber.trim()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto relative">
      <div className="relative flex items-center">
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Enter tracking number (e.g. 123456789)"
          className="w-full h-14 pl-5 pr-12 rounded-full border-2 border-gray-200 shadow-sm text-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          aria-label="Track"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  );
}

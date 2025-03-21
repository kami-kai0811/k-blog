import React from "react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-orange-500"></div>
    </div>
  );
}

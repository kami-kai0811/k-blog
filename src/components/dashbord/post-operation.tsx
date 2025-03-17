"use client";

export function PostOperation() {
  return (
    <div className="pt-2 pl-3">
      <span
        onClick={() => {
          console.log("削除");
        }}
        className="text-destructive hover:text-destructive/60"
      >
        削除
      </span>
    </div>
  );
}

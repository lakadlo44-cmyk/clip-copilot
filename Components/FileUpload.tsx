"use client";

export default function FileUpload() {
  return (
    <div className="mt-5">

      <label className="block mb-2">
        Upload Campaign Assets
      </label>

      <input
        type="file"
        multiple
      />

    </div>
  );
}

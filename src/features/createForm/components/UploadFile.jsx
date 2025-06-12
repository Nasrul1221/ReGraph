export default function UploadFile({ fun, fileName, label }) {
  return (
    <div>
      <label
        htmlFor="fileUpload"
        className="cursor-pointer px-4 py-2 bg-primary text-white rounded hover:bg-white hover:text-primary transition border border-primary mr-2"
      >
        {label}
      </label>

      <input id="fileUpload" type="file" className="hidden" onChange={fun} />

      <span className="text-sm text-gray-700">{fileName}</span>
    </div>
  );
}

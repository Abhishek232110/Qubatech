export default function InputTetx({ handleInputChange, search }) {
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Enter your item detail..."
        className="py-1 outline-none w-1/2  ring-1 rounded-sm px-1 mx-10"
      />
    </>
  );
}

export default function AllButtons({ title, buttonClick }) {
  return (
    <>
      <button
        className="bg-indigo-500 px-2 py-1 rounded-sm text-white hover:bg-indigo-700"
        onClick={buttonClick}
      >
        {title}
      </button>
    </>
  );
}

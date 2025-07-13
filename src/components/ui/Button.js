export default function Button({ type, title }) {
  return (
    <button
      type={type}
      className="bg-red-700 text-white px-4 py-2 rounded font-semibold text-gray-200 hover:bg-red-800"
    >
      {title}
    </button>
  );
}

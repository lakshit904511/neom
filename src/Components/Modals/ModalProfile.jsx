export default function ModalProfile() {
  return (
    <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2 profile-dropdown">
      {["Edit Profile", "Feedback", "Settings"].map((item, index) => (
        <li
          key={index}
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

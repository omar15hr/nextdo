interface Props {
  text: string;
  color: string;
  icon: React.ReactNode;
}

export function CategoryButton({ text, color, icon }: Props) {
  return (
    <button className="flex items-center justify-center w-42 gap-2 p-2 bg-white hover:bg-white/80 rounded-md shadow cursor-pointer transition duration-300 ease-in-out">
      <span className={`${color}`}>{icon}</span>
      <span>{text}</span>
      <span className="bg-gray-200 p-1 px-2 rounded-full text-sm text-gray-600">
        10
      </span>
    </button>
  );
}

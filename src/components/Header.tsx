export function Header() {
  return (
    <div className="bg-white py-6 md:h-20 flex items-center shadow">
      <div className="flex flex-col gap-8 mx-auto w-11/12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
          <h1 className="text-3xl md:text-4xl text-blue-500 font-permanent-marker">
            NextDo
          </h1>
        </div>
      </div>
    </div>
  );
}

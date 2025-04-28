function App() {
  return (
    <div className="bg-[#edede9] h-screen">
      <div className="bg-white h-32 justify-center p-3">
        <div className="flex flex-col gap-5 max-w-5xl mx-auto">
          <div className="flex justify-between items-center">
            <h1>NextDo</h1>
            <button>+</button>
          </div>

          <div>
            <input type="text" placeholder="Buscar" />
          </div>

          <div>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Banner from "./components/Banner";

function App() {
  return (
    <div>
      <div className="px-4.5 lg:px-15 pt-6">
        <p className="rubik text-[60px] md:text-[220px] font-bold text-[#232321] text-center">
          DO IT <span className="text-[#4A69E2]">RIGHT</span>
        </p>
      </div>
      <div className="py-6 px-4 lg:px-15">
        <Banner />
      </div>
    </div>
  );
}

export default App;

import Array from "./Components/Array"
import Inference from "./Components/Inference";
import NamedTuples from "./Components/NamedTuples";
import ReadOnly from "./Components/ReadOnly";
import Tuple from "./Components/Tuple";

function App() {
  return (
    <>
      <div className="App">App</div>
      <Array />
      <ReadOnly />
      <Inference />
      <Tuple />
      <NamedTuples />
    </>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";

function Kartu(props) {
  return (
    <h1>
      Halo, {props.nim} - {props.nama}
    </h1>
  );
}

function App() {
  return (
    <div>
      <Kartu nim="123" nama="Nama1" />
      <Kartu nim="456" nama="Nama2" />
      <Kartu nim="789" nama="Nama3" />
    </div>
  );
}

export default App;

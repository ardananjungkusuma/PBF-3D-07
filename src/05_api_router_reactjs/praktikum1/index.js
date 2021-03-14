import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

function DaftarArtikel(props) {
  return (
    <div>
      <h3>{props.judul}</h3>
      <div>{props.isiArtikel}</div>
    </div>
  );
}

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null, // jika terjadi gagal ambil data dari API
      isLoaded: false, // untuk status ketika sedang memuat
      dataArtikel: [], // untuk menampung data API
    };
  }

  // ... isi method selanjutnya di sini ...
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(
        (dataJson) => {
          this.setState({
            isLoaded: true,
            dataArtikel: dataJson,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, dataArtikel } = this.state;

    if (error) {
      return <div>Terjadi galat: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Sedang memuat...</div>;
    } else {
      return (
        <div>
          <h2>Daftar Artikel</h2>
          {dataArtikel.map((artikel) => {
            return (
              <DaftarArtikel
                key={artikel.id}
                judul={artikel.title}
                isiArtikel={artikel.body}
              />
            );
          })}
        </div>
      );
    }
  }
}

ReactDOM.render(<Blog />, document.getElementById("root"));

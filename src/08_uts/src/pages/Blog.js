import React from "react";
import newsletter from "../assets/images/newsletter.png";
function Article(props) {
  return (
    <div class="blog-sidebar d-flex m-3">
      <img src={props.gambar} class="img-fluid" alt="blog" />

      <div class="blog-info">
        <h4 class="blog-category text-danger">
          <a href={props.url} target="_blank">
            {props.judul}
          </a>
        </h4>

        <h3>{props.isiArtikel}</h3>
      </div>
    </div>
  );
}

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null, // jika terjadi gagal ambil data dari API
      isLoaded: false, // untuk status ketika sedang memuat
      dataArtikel: [], // untuk menampung data API
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ecf983ce0de4543b7e0e9b1972f8bea"
    )
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
          <section class="blog section-padding">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-12 py-5 mt-5 mb-3 text-center">
                  <h1 class="mb-4">Digital Trend Blog</h1>
                </div>

                {dataArtikel.articles.map((artikel) => {
                  return (
                    <Article
                      url={artikel.url}
                      source={artikel.source.name}
                      gambar={artikel.urlToImage}
                      judul={artikel.title}
                      isiArtikel={artikel.description}
                    />
                  );
                })}

                <div class="col-lg-5 ml-auto mt-5 pt-5 col-md-6 col-12">
                  <img src={newsletter} class="img-fluid" alt="newsletter" />
                </div>

                <div class="col-lg-5 mr-auto mt-5 pt-5 col-md-6 col-12 newsletter-form">
                  <h4>Email Newsletter</h4>

                  <h2>
                    Let’s stay up-to-date. We'll share you all good stuffs.
                  </h2>
                  <form action="#" method="get" enctype="multipart/form-data">
                    <div class="form-group mt-4">
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Please enter your email"
                        required
                      />

                      <small id="emailHelp" class="form-text text-muted">
                        We'll NOT share your email address to anyone else.
                      </small>
                    </div>

                    <div class="form-group form-check">
                      <input
                        name="monthly"
                        type="checkbox"
                        class="form-check-input"
                        id="monthly"
                      />

                      <label class="form-check-label" for="monthly">
                        Please send me a monthly newsletter.
                      </label>
                    </div>

                    <button type="submit" class="btn w-100 mt-3">
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}

export default News;

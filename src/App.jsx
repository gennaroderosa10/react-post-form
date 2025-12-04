import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const posts = [
  {
    author: "pippo",
    title: "Introduzione a JavaScript",
    body: "In questo post vediamo le basi di JavaScript e come iniziare a usarlo nel browser.",
    public: true,
  },
  {
    author: "pluto",
    title: "Guida a React",
    body: "React è una libreria per costruire interfacce utente componibili e riutilizzabili.",
    public: false,
  },
  {
    author: "paperino",
    title: "Consigli per imparare il web development",
    body: "HTML, CSS e JavaScript sono i tre pilastri fondamentali per creare siti web moderni.",
    public: true,
  },
];

const initialFormData = {
  author: "",
  title: "",
  body: "",
  public: false,
}



function App() {
  const [listaPost, setListaPost] = useState(posts)
  const [formData, setFormData] = useState(initialFormData)

  function updateForm(event) {
    const key = event.target.name;
    const newPost = {
      ...formData,
      [key]: event.target.value
    };
    setFormData(newPost);
  }

  function addNewPost(event) {
    event.preventDefault();
    setListaPost((current) => [...current, formData]);
    setFormData({
      author: "",
      title: "",
      body: "",
      public: false,
    });
  }


  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary">
          <h1>
            POSTS
          </h1>
        </nav>
      </header>

      <main className="container mt-4">
        <div className="row g-3">
          {listaPost.map((post, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Autore: {post.author}
                  </h6>
                  <p className="card-text">
                    {post.body}
                  </p>
                  <span
                    className={
                      post.public
                        ? "badge text-bg-success"
                        : "badge text-bg-secondary"
                    }
                  >
                    {post.public ? "Pubblico" : "Bozza"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="container mt-4">
          <div className="row">
            <div className="col-12 mb-3">
              <form
                className='row'
                onSubmit={addNewPost}
              >

                <label htmlFor="author" className="form-label">NOME</label>
                <input
                  type="text"
                  id="author"
                  name='author'
                  className="form-control"
                  value={formData.author}
                  onChange={updateForm}
                ></input>

                <label htmlFor="title" className="form-label">TITOLO</label>
                <input
                  type="text"
                  id="title"
                  name='title'
                  className="form-control"
                  value={formData.title}
                  onChange={updateForm}
                ></input>

                <label htmlFor="body" className="form-label">TESTO</label>
                <input
                  type="text"
                  id="body"
                  name='body'
                  className="form-control"
                  value={formData.body}
                  onChange={updateForm}
                ></input>

                <button type="submit" className="btn btn-primary mt-2">
                  Aggiungi post
                </button>
              </form>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}

export default App


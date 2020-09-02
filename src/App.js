import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      毛利小五郎
      <Link to="/mouri_detective_office_hp">
        <button>back</button>
      </Link>
    </div>
  );
};

const Qestion = () => {
  return (
    <div>
      Q&amp;A
      <Link to="/mouri_detective_office_hp">
        <button>back</button>
      </Link>
    </div>
  );
};

const OverViwe = () => {
  return (
    <div>
      事務所概要
      <Link to="/mouri_detective_office_hp">
        <button>back</button>
      </Link>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      お問い合わせ
      <Link to="/mouri_detective_office_hp">
        <button>back</button>
      </Link>
    </div>
  );
};

const Item = () => {
  return (
    <div>
      調査項目
      <Link to="/mouri_detective_office_hp">
        <button>back</button>
      </Link>
    </div>
  );
};

const Flow = () => {
  return (
    <div>
      調査の流れ
      <Link to="/mouri_detective_office_hp">
        <button>back</button>
      </Link>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <header></header>
      <body>
        <div className="Body">
          <div className="hero-body">
            <h
              className="title is-0"
              style={{
                color: "#FD0000",
                fontFamily: "MS PMincho",
                fontSize: "8.2vmax",
                paddingBottom: "1vmax",
              }}
            >
              毛利小五郎
              <br></br>
              探偵事務所
            </h>
            <p>お困りのことがあったら、</p>
            <p>いつでもご依頼を！</p>
            <p>眠りの小五郎がバッチリ</p>
            <p style={{ paddingBottom: "1vmax" }}>解決いたします！</p>

            <div className="columns">
              <div className="column is-3">
                <Link to="/mouri_detective_office_hp/item">
                  <button
                    className="button is-rounded"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#ED4491",
                      fontSize: "1.8vmax",
                    }}
                  >
                    調査項目
                  </button>
                </Link>
              </div>
              <div className="column is-3">
                <Link to="/mouri_detective_office_hp/profile">
                  <button
                    className="button is-rounded"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#f98730",
                      fontSize: "1.8vmax",
                    }}
                  >
                    プロフィール
                  </button>
                </Link>
              </div>
            </div>

            <div className="columns">
              <div className="column is-3">
                <Link to="/mouri_detective_office_hp/profile">
                  <button
                    className="button is-rounded"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#FAC80F",
                      fontSize: "1.8vmax",
                    }}
                  >
                    調査の流れ
                  </button>
                </Link>
              </div>
              <div className="column is-3" style={{ width: "90%" }}>
                <Link to="/mouri_detective_office_hp/profile">
                  <button
                    className="button is-rounded"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#23B44E",
                      fontSize: "1.8vmax",
                    }}
                  >
                    事務所概要
                  </button>
                </Link>
              </div>
            </div>

            <div className="columns">
              <div className="column is-3">
                <Link to="/mouri_detective_office_hp/profile">
                  <button
                    className="button is-rounded"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#214CB2",
                      fontSize: "1.8vmax",
                    }}
                  >
                    お問い合わせ
                  </button>
                </Link>
              </div>
              <div className="column is-3">
                <Link to="/mouri_detective_office_hp/profile">
                  <button
                    className="button is-rounded"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#A229A9",
                      fontSize: "1.8vmax",
                    }}
                  >
                    Q&amp;A
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
      <footer className="footer">
        <div className="content has-text-centered">@mourikogorou</div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route path="/mouri_detective_office_hp" exact component={Home} />
          <Route
            path="/mouri_detective_office_hp/profile"
            component={Profile}
          />
          <Route path="/mouri_detective_office_hp/item" component={Item} />
          <Route path="/mouri_detective_office_hp/flow" component={Flow} />
          <Route
            path="/mouri_detective_office_hp/overview"
            component={OverViwe}
          />
          <Router
            path="/mouri_detective_office_hp/contact"
            component={Contact}
          />
          <Router
            path="/mouri_detective_office_hp/question"
            component={Qestion}
          />
        </div>
      </Router>
    </div>
  );
};

export default App;

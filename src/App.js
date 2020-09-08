import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="Body_bw">
        <div className="hero-body">
          <h
            className="title is-0"
            style={{
              color: "black",
              fontFamily: "MS PMincho",
              fontSize: "7.8vw",
              paddingBottom: "1vmin",
            }}
          >
            プロフィール
          </h>
          <ul>帝丹高校卒業</ul>
          <ul>米花大学卒業</ul>
          <ul>警視庁捜査一課強行犯係</ul>
          <ul>毛利探偵事務所設立 </ul>
        </div>

        <Link to="/mouri_detective_office_hp">
          <button>back</button>
        </Link>
      </div>
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
      <div className="Body_bw">
        <div className="hero-body">
          <h
            className="title is-0"
            style={{
              color: "black",
              fontFamily: "MS PMincho",
              fontSize: "7.8vw",
              paddingBottom: "1vmin",
            }}
          >
            お問い合わせ
          </h>
          <div>メールアドレス</div>
          <div>電話番号</div>
          <div>住所</div>
          <div>東京都米花市米化町5丁目毛利探偵事務所</div>
        </div>
      </div>

      <Link to="/mouri_detective_office_hp">
        <button>back</button>
      </Link>
    </div>
  );
};

const Item = () => {
  return (
    <div>
      <header></header>

      <div className="Body_bw">
        <div className="hero-body">
          <h
            className="title is-0"
            style={{
              color: "black",
              fontFamily: "MS PMincho",
              fontSize: "8.8vw",
              paddingBottom: "1vmin",
            }}
          >
            調査項目
          </h>
          <div>
            <div className="columns">
              <div className="column is-3">浮気・不倫調査</div>
              <div className="column is-3">素行調査</div>
            </div>
            <div className="columns">
              <div className="column is-3">所在調査</div>
              <div className="column is-3">身元調査</div>
            </div>
            <div className="columns">
              <div className="column is-3">婚前調査</div>
              <div className="column is-3">企業調査</div>
            </div>
            <div className="columns">
              <div className="column is-3">詐欺調査</div>
              <div className="column is-3">企業調査</div>
            </div>
            <div className="columns">
              <div className="column is-3">詐欺調査</div>
              <div className="column is-3">金銭トラブル調査</div>
            </div>
            <div className="columns">
              <div className="column is-3">ストーカー調査</div>
              <div className="column is-3">盗聴器発見調査</div>
            </div>
          </div>
        </div>
        <Link to="/mouri_detective_office_hp">
          <button>back</button>{" "}
        </Link>
      </div>
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
                fontSize: "8.8vw",
                paddingBottom: "1vmin",
              }}
            >
              毛利小五郎
              <br></br>
              探偵事務所
            </h>
            <p>お困りのことがあったら、</p>
            <p>いつでもご依頼を！</p>
            <p>眠りの小五郎がバッチリ</p>
            <p style={{ paddingBottom: "1vh" }}>解決いたします！</p>

            <div className="columns">
              <div className="column is-3">
                <Link to="/mouri_detective_office_hp/item">
                  <button
                    className="button is-rounded"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#ED4491",
                      fontSize: "1.8vw",
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
                      fontSize: "1.8vw",
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
                      fontSize: "1.8vw",
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
                      fontSize: "1.8vw",
                    }}
                  >
                    事務所概要
                  </button>
                </Link>
              </div>
            </div>

            <div className="columns">
              <div className="column is-3">
                <Link to="/mouri_detective_office_hp/contact">
                  <button
                    className="button is-rounded"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#214CB2",
                      fontSize: "1.8vw",
                    }}
                  >
                    お問い合わせ
                  </button>
                </Link>
              </div>
              <div className="column is-3">
                <Link to="/mouri_detective_office_hp/question">
                  <button
                    className="button is-rounded"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#A229A9",
                      fontSize: "1.8vw",
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

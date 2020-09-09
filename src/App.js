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
              paddingTop: "2vh",
              paddingBottom: "1vmin",
            }}
          >
            プロフィール
          </h>
          <div className="section">
            <ul className="pro">19xx: 帝丹高校卒業</ul>
            <ul className="pro">19xo: 米花大学卒業</ul>
            <ul className="pro">19oo: 警視庁捜査一課 勤務</ul>
            <ul className="pro">19ox: 毛利探偵事務所設立 </ul>
            <ul className="pro1">
              この眠りの小五郎が
              <br></br>どんな事件も解決いたします！
            </ul>
          </div>

          <Link to="/mouri_detective_office_hp">
            <button
              className="button back_button"
              style={{ fontSize: "2vmax" }}
            >
              back
            </button>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <div
          className="content has-text-centered"
          style={{ fontSize: "1.8vmax" }}
        >
          @mourikogorou
        </div>
      </footer>
    </div>
  );
};

const Qestion = () => {
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
            Q&amp;A
          </h>

          <p style={{ margin: "6vmax", fontSize: "3vmax" }}>これから作るよ！</p>

          <Link to="/mouri_detective_office_hp">
            <button
              className="button back_button"
              style={{ fontSize: "2vmax" }}
            >
              back
            </button>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <div
          className="content has-text-centered"
          style={{ fontSize: "1.8vmax" }}
        >
          @mourikogorou
        </div>
      </footer>
    </div>
  );
};

const OverView = () => {
  return (
    <div>
      <div className="Body_bw">
        <div className="hero-body">
          <h
            className="title is-0"
            style={{
              color: "black",
              fontFamily: "MS PMincho",
              fontSize: "6.8vw",
              paddingBottom: "1vmin",
            }}
          >
            事務所概要
          </h>
          <p style={{ margin: "6vmax", fontSize: "3vmax" }}>これから作るよ！</p>

          <Link to="/mouri_detective_office_hp">
            <button
              className="button back_button"
              style={{ fontSize: "2vmax" }}
            >
              back
            </button>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <div
          className="content has-text-centered"
          style={{ fontSize: "1.8vmax" }}
        >
          @mourikogorou
        </div>
      </footer>
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
              fontSize: "6.8vw",
              paddingBottom: "1vmin",
            }}
          >
            お問い合わせ
          </h>
          <div className="section">
            <ul className="contact">電話番号</ul>
            <ul className="contact2">○○○-××××-○○○○</ul>
            <ul className="contact">メールアドレス</ul>
            <ul className="contact2">mourikogorou@xxxx.com</ul>
            <ul className="contact">住所</ul>
            <ul className="contact2">東京都米花町5丁目毛利探偵事務所</ul>
          </div>
          <Link to="/mouri_detective_office_hp">
            <button
              className="button back_button"
              style={{ fontSize: "2vmax" }}
            >
              back
            </button>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <div
          className="content has-text-centered"
          style={{ fontSize: "1.8vmax" }}
        >
          @mourikogorou
        </div>
      </footer>
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
          <div className="section" style={{ margin: "2vmax" }}>
            <div className="columns">
              <div className="column is-3 tyo">浮気・不倫調査</div>
              <div className="column is-3 tyo">素行調査</div>
            </div>
            <div className="columns">
              <div className="column is-3 tyo">所在調査</div>
              <div className="column is-3 tyo">身元調査</div>
            </div>
            <div className="columns">
              <div className="column is-3 tyo">婚前調査</div>
              <div className="column is-3 tyo">企業調査</div>
            </div>
            <div className="columns">
              <div className="column is-3 tyo">詐欺調査</div>
              <div className="column is-3 tyo">企業調査</div>
            </div>
            <div className="columns">
              <div className="column is-3 tyo">詐欺調査</div>
              <div className="column is-3 tyo">金銭トラブル調査</div>
            </div>
            <div className="columns">
              <div className="column is-3 tyo">ストーカー調査</div>
              <div className="column is-3 tyo">盗聴器発見調査</div>
            </div>
          </div>

          <Link to="/mouri_detective_office_hp">
            <button
              className="button back_button"
              style={{ fontSize: "2vmax" }}
            >
              back
            </button>{" "}
          </Link>
        </div>
      </div>
      <footer className="footer">
        <div
          className="content has-text-centered"
          style={{ fontSize: "1.8vmax" }}
        >
          @mourikogorou
        </div>
      </footer>
    </div>
  );
};

const Flow = () => {
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
            調査の流れ
          </h>

          <div className="section">
            <ul className="flow">1.ご相談</ul>
            <p style={{ fontSize: "1.8vmax" }}>
              無料です。お気軽にご相談下さい
            </p>
            <ul className="flow">2.アドバイス</ul>
            <ul className="flow">3.お見積り</ul>
            <ul className="flow">4.ご契約</ul>
            <ul className="flow">5.予備調査</ul>
            <ul className="flow">6.本調査</ul>
            <ul className="flow">7.中間報告</ul>
            <ul className="flow">8.報告書提出</ul>
            <ul className="flow">9.アフターフォロー</ul>
          </div>

          <Link to="/mouri_detective_office_hp">
            <button
              className="button back_button"
              style={{ fontSize: "2vmax" }}
            >
              back
            </button>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <div
          className="content has-text-centered"
          style={{ fontSize: "1.8vmax" }}
        >
          @mourikogorou
        </div>
      </footer>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <body>
        <div className="Body_bw">
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
            <p className="home_p">お困りのことがあったら、</p>
            <p className="home_p">いつでもご依頼を！</p>
            <p className="home_p">眠りの小五郎がバッチリ</p>
            <p className="home_p" style={{ paddingBottom: "1vh" }}>
              解決いたします！
            </p>

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
                <Link to="/mouri_detective_office_hp/flow">
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
                <Link to="/mouri_detective_office_hp/overview">
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
        <div
          className="content has-text-centered"
          style={{ fontSize: "1.8vmax" }}
        >
          @mourikogorou
        </div>
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
            component={OverView}
          />
          <Route
            path="/mouri_detective_office_hp/contact"
            component={Contact}
          />
          <Route
            path="/mouri_detective_office_hp/question"
            component={Qestion}
          />
        </div>
      </Router>
    </div>
  );
};

export default App;

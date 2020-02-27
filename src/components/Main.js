import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'
import pic07 from '../images/pic07.jpg'
import pic08 from '../images/pic08.jpg'
import top from '../images/TOP.png'
import pc_open from '../images/PC_open.png'
import sp from '../images/sp.png'
import dtp from '../images/dtp.pdf'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          <p>
          岡山県出身で、就職を機に京都へ移住しました。<br />
          1年ほど基盤などを扱う電子部品の総合商社の営業事務として就業、後にもっとクリエイティブな仕事をしてみたいと
          退職、DTPデザインの職業訓練校に通い現在のwebの運営会社へ入社。<br />
          HTMLやCSSなどwebページの作成は全くの未経験だったため、入社から3年間毎日勉強の日々ですが
          新しい知識を吸収するのはとても楽しくあっという間に時間が過ぎていました。
          そして出来ることは増えていきましたが･･･ふと気が付いてみると保守作業ばかりで、
          デザインや1からの制作を殆どやっていない現実に直面。<br />
          原点回帰してもっと沢山制作作業に携わりたいと思い現在活動中です。
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <p>
            制作期間:1~2ヶ月<br />
            担当:デザイン・コーディング・お客様への仕様説明<br />
            EC部分（オンラインショップ機能）はカラーミーを用いて実装させました。<br />
            取り扱い商品である袋や包装容器はとても身近で、シンプルながらも機能美にあふれたフォルムをしていると
            考え、下手に飾り気を出さずなるべくシンプルに洗練されたデザインになるよう心掛けました。<br />
            苦労した点:カラーミーに使われているPHP(Smarty)を触ったことがなかったので
            ページネーションのカスタマイズなどをどうやったら良いのか分からず、四苦八苦しながら
            実装させました。<br /><br />
            client:株式会社紅谷袋店様
          </p>
          <ul className="icons">
          <li>
            <span style={{ paddingRight: '15px' }}>view site</span>
            <a
              href="http://shop.beniya296.com/"
              className="icon fa-angle-double-right"
              target="_blank"
            >
              <span className="label">view site</span>
            </a>
          </li>
          </ul>
          <span className="image main">
            <img src={pic06} alt="" />
          </span>
          <p>
            制作期間:約6ヶ月（途中よりプロジェクトへ参加）<br />
            担当:コーディング（展開作業）<br />
            株式会社ミスミ様のコーポレートサイトのリニューアルに携わりました。<br />
            入社してはじめてのチームでの制作物となり、大規模案件に分類されるためセマンティック且つ保守性の高いコーディングが求められました。
            <br />
            苦労した点:クライアントによる、納品直前になっての見た目の変更の要望が多く（ナビゲーションがなくなったり･･･また違うところにつけたり･･･）<br />
            アジャイル開発的なスピードと正確性を求められました。明確なコーディング規約が存在していなかったので展開時にイレギュラーが発生すると<br />
            どのように実装するかがコーディング者の匙加減となってしまったり、デグレード起こさないようにすることが大変でした。<br /><br />
            client:株式会社ミスミ様
          </p>
          <ul className="icons">
          <li>
            <span style={{ paddingRight: '15px' , fontSize: '0.9rem' }}>TOP view more</span>
            <a
              href="./static/TOP-6b9b4a4779808f180807915623dbfe33.png"
              className="icon fa-angle-double-right"
              target="_blank"
            >
              <span className="label">view site</span>
            </a>
          </li>
          <li>
            <span style={{ paddingRight: '15px' , fontSize: '0.9rem' }}>nav_open view more</span>
            <a
              href="./static/PC_open-5e27b1726a51cad0dffe0ea7f4601791.png"
              className="icon fa-angle-double-right"
              target="_blank"
            >
              <span className="label">view site</span>
            </a>
          </li>
          <li>
            <span style={{ paddingRight: '15px' , fontSize: '0.9rem' }}>sp view more</span>
            <a
              href="./static/sp-021c1a9b00206cdcf0d9fce67f35517b.png"
              className="icon fa-angle-double-right"
              target="_blank"
            >
              <span className="label">view site</span>
            </a>
          </li>
          </ul>
          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <p>
            制作期間:4時間<br />
            何かのサービスに登録するときにパスワードを考えることが面倒になることが多いので、<br />
            簡単なジェネレーターを作成しました。<br /><br />
          </p>
          <ul className="icons">
          <li>
            <span style={{ paddingRight: '15px' }}>view more</span>
            <a
              href="https://passgene-7e0ec.firebaseapp.com"
              className="icon fa-angle-double-right"
              target="_blank"
            >
              <span className="label">view site</span>
            </a>
          </li>
          </ul>
          <span className="image main">
            <img src={pic09} alt="" />
          </span>
          <p>
            制作期間:2~3週間<br />
            担当:デザイン・コーディング<br />
            小さいながらも、たくさんの宝物が埋もれているという感じのリサイクルショップですので、<br />
            なるべくにぎやかな感じを出したくてバックにcanvasを用いてパーティクルをちりばめました。<br />
            バックがにぎやかなのでアニメーションは控え目に、ファーストビューでwebサイトを見つけたお客さんに「お！なんだここ？」と
            興味を持ち、「行ってみよう」と実際にお店に足を運んでいただけるようになるようこころがけました。
            実装させました。<br /><br />
            client:リサクルショップCUBE様
          </p>
          <ul className="icons">
          <li>
            <span style={{ paddingRight: '15px' }}>view more</span>
            <a
              href="http://gorirakun0721.hungry.jp"
              className="icon fa-angle-double-right"
              target="_blank"
            >
              <span className="label">view site</span>
            </a>
          </li>
          </ul>
          <h2 className="major">DTP Design</h2>
          <p>
            制作期間:全部で1ヶ月ほど<br />
            DTPとしてデザインした制作物の一覧になります。<br />
          </p>
          <ul className="icons">
          <li>
            <span style={{ paddingRight: '15px' }}>view more</span>
            <a
              href={dtp}
              className="icon fa-angle-double-right"
              target="_blank"
            >
              <span className="label">view site</span>
            </a>
          </li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic08} alt="" />
          </span>
          <p>
            京都在住のコーダー兼フロントエンジニア（まれにデザイン）業界経験3年ほどです。
            主に展示会運営会社様の保守作業を行っています。<br />
            業務的に個人で黙々と仕事を行っていくので、1度はチームでフレームワークなど使った
            大型案件などやってみたいなどと考えています<br />
            デザインのお仕事の経験は少ないですが、作るのはすごく好きです。
            個人的にはデザイン（特にweb）というのは何かを伝える手段だと考えています。
            折角制作しようと考えて下さったのなら、お客さん自身も気が付いていない魅力を見つけたいと
            いつも考えています。ある意味売り出したいものへの「ラブレター」のつもりです。
            デザインとして表現出来ているかは別として（笑）
          </p>
          <p>
            使用言語＆ツール
          </p>
          <ul>
            <li>HTML5</li>
            <li>CSS3(Sass/SMACCS/BEM)</li>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Node.js</li>
            <li>firebase</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>git</li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form name="contact" method="post" data-netlify="true">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
                <input type="hidden" name="form-name" value="contact" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

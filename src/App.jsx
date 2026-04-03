import './App.css'

const portraitLeft = `${import.meta.env.BASE_URL}images/portrait-left.png`
const portraitCenter = `${import.meta.env.BASE_URL}images/portrait-center.png`
const portraitRight = `${import.meta.env.BASE_URL}images/portrait-right.png`
const introImage = `${import.meta.env.BASE_URL}images/section-intro.png`
const originLeftImage = `${import.meta.env.BASE_URL}images/section-origin-left.png`
const originRightImage = `${import.meta.env.BASE_URL}images/section-origin-right.png`
const case01Image = `${import.meta.env.BASE_URL}images/case-01.png`
const case02Image = `${import.meta.env.BASE_URL}images/case-02.png`
const case03Image = `${import.meta.env.BASE_URL}images/case-03.png`

function App() {
  return (
    <main className="figma-page">
      <div className="portfolio-canvas">
        <h1 className="hero-title">асцендент в дизайне</h1>
        <p className="hero-subtitle">Коля Лукьянюк • Лид-дизайнер и артдир</p>

        <nav className="side-nav" aria-label="Основная навигация">
          <a href="#about">про себя</a>
          <a href="#cases">кейсы</a>
          <a href="#origin">мой оридж</a>
          <a href="#contact">связь</a>
        </nav>

        <div className="portrait portrait-left">
          <img src={portraitRight} alt="" />
        </div>
        <div className="portrait portrait-center">
          <img src={portraitCenter} alt="Портрет Коли Лукьянюка" />
        </div>
        <div className="portrait portrait-right">
          <img src={portraitLeft} alt="" />
        </div>

        <section className="image-block intro-block" id="about">
          <img src={introImage} alt="Вводный блок портфолио" />
        </section>

        <section className="origin-section" id="origin">
          <p className="section-panama section-panama-top">
            на момент вайбкодинга этого резюме я
          </p>
          <p className="expectation-note">
            если мы с вами общаемся, вероятно вы соответствуете этим ожиданиям
          </p>

          <div className="image-block origin-block origin-block-left">
            <img src={originLeftImage} alt="Точка А" />
          </div>

          <div className="image-block origin-block origin-block-right">
            <img src={originRightImage} alt="Точка Б" />
          </div>
        </section>

        <section className="cases-section" id="cases">
          <p className="section-panama cases-heading">
            а теперь про мой опыт, компетенции и кейсы
          </p>

          <article className="case-image-card case-image-card-first">
            <a href={`${import.meta.env.BASE_URL}cases/01/`} aria-label="Открыть кейс 01">
              <img src={case01Image} alt="Кейс 01" />
            </a>
          </article>

          <article className="case-image-card case-image-card-second">
            <a href={`${import.meta.env.BASE_URL}cases/02/`} aria-label="Открыть кейс 02">
              <img src={case02Image} alt="Кейс 02" />
            </a>
          </article>

          <article className="case-image-card case-image-card-third">
            <a href={`${import.meta.env.BASE_URL}cases/03/`} aria-label="Открыть кейс 03">
              <img src={case03Image} alt="Кейс 03" />
            </a>
          </article>
        </section>

        <footer className="page-footer" id="contact">
          <a href="https://t.me/insapity" target="_blank" rel="noreferrer">
            связь
          </a>
        </footer>
      </div>
    </main>
  )
}

export default App

import './App.css'

const portraitLeft = `${import.meta.env.BASE_URL}images/portrait-left.png`
const portraitCenter = `${import.meta.env.BASE_URL}images/portrait-center.png`
const portraitRight = `${import.meta.env.BASE_URL}images/portrait-right.png`
const caseImage = `${import.meta.env.BASE_URL}images/folio-case.png`
const routeA = `${import.meta.env.BASE_URL}images/route-a.svg`
const routeB = `${import.meta.env.BASE_URL}images/route-b.svg`

const caseCards = [
  {
    number: '( 01 )',
    className: 'case-card case-card-first',
    href: `${import.meta.env.BASE_URL}cases/01/`,
    intro:
      'Считаю своим главным показательным кейсом свою команду дизов. Почему я так решил и какие пруфы',
    accent: '— читай внутри, там про ИПР, процессы, мотивацию и всё-всё',
    imageCaption: 'мое ОПГ - особая продуктовая группировка',
  },
  {
    number: '( 02 )',
    className: 'case-card case-card-second',
    href: `${import.meta.env.BASE_URL}cases/02/`,
    intro:
      'В Т-Бизнесе я отвечаю за Главную и ключевые разделы. Второй кейс будет про Главную 4.0 — самый масштабный проект редизайна в рамках всей нашей компании',
    accent:
      'Внутри про идеально выстроенный процесс, продуктовое дискавери мечты, процесс всего лишь в 2 лица с продактом, метрики, достижения и выхлоп',
    imageCaption: '',
  },
  {
    number: '( 03 )',
    className: 'case-card case-card-third',
    href: `${import.meta.env.BASE_URL}cases/03/`,
    intro:
      'На десерт оставил продуктовые достижения. Тут будет про инициативность, генерацию идей, много денег для компании и в целом мой вклад помимо Главного экрана',
    accent: 'А вклад прям солидный, но не могу его светануть из-за NDA, увы',
    imageCaption: '',
  },
]

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
          <img src={portraitLeft} alt="" />
        </div>
        <div className="portrait portrait-center">
          <img src={portraitCenter} alt="Портрет Коли Лукьянюка" />
        </div>
        <div className="portrait portrait-right">
          <img src={portraitRight} alt="" />
        </div>

        <section className="intro-copy" id="about">
          <p className="intro-line intro-line-1">
            <span className="panama-inline">Само собой</span>
            <span className="tt-inline"> я дизайнер :::::</span>
          </p>
          <p className="intro-line intro-line-2">
            Отвечаю за дизайн сложных продуктов с большой ценой ошибки — б2б
            финтех, екомы, ритейл, медиа. Имею солидную экспертность продакта,
            чем отличаюсь от коллег.
          </p>
          <p className="intro-line intro-line-3">
            Развиваю команду дизайнеров, отвечаю за качество их работы, помогаю
            им создавать продукт волнующий душу и метрики. И находить мотивацию
            становиться лучше
          </p>
          <div className="tiny-note note-motivation">
            <span>вставать по утрам</span>
            <span>на 121 со мной</span>
          </div>
          <p className="tiny-note note-side">да ты че базара нет</p>
          <p className="intro-line intro-line-4">
            ну и процессы для работы выстраиваю с нуля — работают, приносят
            явную пользу отделу
          </p>
        </section>

        <section className="origin-section" id="origin">
          <p className="section-panama section-panama-top">
            на момент вайбкодинга этого резюме я
          </p>

          <div className="origin-card origin-card-left">
            <p className="origin-label origin-label-left">иду из точки А</p>
            <div className="origin-text">
              <p>
                Почти 4 года работаю в Т-Бизнесе. Сейчас на должности арт-дира
                — у нас это лид, который помимо аллоцированного продукта имеет
                свою дизайн команду и отвечает за качество ее работы
              </p>
            </div>
            <img className="origin-route route-left" src={routeA} alt="" />
            <div className="origin-tags">
              <span>интерфейс б2б</span>
              <span>(ex Тинькофф)</span>
            </div>
          </div>

          <div className="origin-card origin-card-right">
            <p className="origin-label origin-label-right">в точку Б</p>
            <div className="origin-text">
              <p>
                От новой потенциальной работы хочу получить больше свободы,
                шанс проверить свои силы вне закостенелого легаси, и новой
                качественной ответственности — сложные вызовы, надежную команду
              </p>
            </div>
            <img className="origin-route route-right" src={routeB} alt="" />
          </div>

          <p className="expectation-note">
            если мы с вами общаемся, вероятно вы соответствуете этим ожиданиям
          </p>
        </section>

        <section className="cases-section" id="cases">
          <p className="section-panama cases-heading">
            а теперь про мой опыт, компетенции и кейсы
          </p>

          {caseCards.map((card) => (
            <article className={card.className} key={card.number}>
              <a
                className="case-link-full"
                href={card.href}
                aria-label={`Открыть кейс ${card.number}`}
              ></a>
              <p className="case-number">{card.number}</p>
              <div className="case-surface">
                <p className="case-arrow">→</p>
                <p className="case-intro">
                  {card.intro.includes('Главную 4.0') ? (
                    <>
                      В Т-Бизнесе я отвечаю за Главную и ключевые разделы.
                      Второй кейс будет про{' '}
                      <span className="panama-inline">
                        Главную 4.0 — самый масштабный проект
                      </span>{' '}
                      редизайна в рамках всей нашей компании
                    </>
                  ) : (
                    card.intro
                  )}
                </p>
                <p className="case-accent">{card.accent}</p>
                <div className="case-image-wrap">
                  <img src={caseImage} alt="" />
                  {card.imageCaption ? (
                    <p className="case-image-caption">{card.imageCaption}</p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
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

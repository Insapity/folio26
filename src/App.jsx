import './App.css'

const heroPortrait = `${import.meta.env.BASE_URL}images/figma-hero-portrait.png`
const bandImage = `${import.meta.env.BASE_URL}images/figma-band.png`
const caseTeamImage = `${import.meta.env.BASE_URL}images/figma-case-team.png`
const caseNdaImage = `${import.meta.env.BASE_URL}images/figma-case-nda.png`
const contactPhoto = `${import.meta.env.BASE_URL}images/figma-contact-photo.png`

const jobs = [
  {
    period: 'ноябрь 2022 — настоящее время',
    title: 'Т-Бизнес. Продуктовый лид дизайнер',
    description: [
      'Что делал в компании',
      'Что делал в компании',
      'Что делал в компании',
    ],
  },
  {
    period: 'июль 2022 — ноябрь 2022',
    title: 'Студия MAX. Старший дизайнер',
    subtitle: '& ментор в Helper',
    description: [
      'Активно занимался наставничеством специалистов по совершенно новому продукту — MAX Helper. Составлял планы развития и помогал дизайнерам достигать новых высот. Также в качестве основной работы был дизайнером продукта в Альфа-Банке в команде по развитию клиентского опыта',
    ],
  },
  {
    period: 'Июнь 2021 — июнь 2022',
    title: 'Стартап Mission:Luna (RedMadRobot),',
    subtitle: 'Продуктовый дизайнер',
    description: [
      'Создавал финансовый сервис будущего в команде платежей и переводов.',
      'За время работы удалось протестировать множество гипотез проблем и решений. и сделать много подходов к итоговому дизайну',
      '',
      'стартап был готов для запуска на рынок, но из-за санкций его пришлось закрыть',
    ],
  },
  {
    period: 'Октябрь 2019 — июнь 2021',
    title: 'Студия AIC. Мидл в юните ритейла',
    description: [
      'дизайнил продукты для крупных международных компаний — екомы, банки, гос сайты, туристические агентства и недвижимость. Почти каждый проект включал в себя создание больших дизайн систем, зачастую управление командой и проведение исследований',
    ],
  },
]

const caseCards = [
  {
    id: 'cases',
    number: '01',
    title: 'моя Команда дизайнеров',
    tag: 'управление',
    period: 'апрель 25’ — н.в.',
    text: (
      <>
        Считаю главным кейсом <span className="panama-italic">свою команду дизайнеров.</span>
        <br />
        Я целиком отвечаю за их процессы и качество работы, за их развитие
        <br />
        скиллсета и общее отношение к работе
      </>
    ),
    body: (
      <>
        Как следствие, качество работы объективно становится лучше без потери
        <br />
        скорости, вовлечение и инициативность растет — ребята растут в
        <br />
        грейдах и зарплате, бизнес-команды довольны, а работа идет сильно
        <br />
        спокойнее.
      </>
    ),
    cta: 'подробнее про развитие команды',
    link: `${import.meta.env.BASE_URL}cases/01/`,
    image: caseTeamImage,
    imageAlt: 'Кейс про развитие команды дизайнеров',
    imageClassName: 'case-card__image case-card__image--rounded',
  },
  {
    number: '02',
    title: 'главная т-бизнеса 4.0',
    tag: 'продукт',
    period: 'июль 25’ — н.в.',
    text: (
      <>
        Самый масштабный проект банка
        <br />
        <span className="panama-italic">— редизайн всего ЛК и Главной 4.0.</span>
      </>
    ),
    body: (
      <>
        Личная инициатива, которая с июня 25го прошла этапы дискавери,
        <br />
        форматирования в стратегию всего направления бизнеса и очную защиту
        <br />
        перед стейкхолдерами.
        <br />
        <br />
        Весь 2026 я главный ответственный
        <br />
        за деливери проекта со стороны дизайна
      </>
    ),
    note:
      'подробнее про этапы дискавери, накопленную экспертизу, все процессы и коммуникации с 20+ командами',
    cta: 'расскажу здесь',
    link: `${import.meta.env.BASE_URL}cases/02/`,
    image: caseNdaImage,
    imageAlt: 'Кейс про главную Т-Бизнеса 4.0',
    nda: ['к сожалению картинки под NDA,', 'но могу показать их очно'],
  },
  {
    number: '03',
    title: 'личные продуктовые инициативы',
    tag: 'продукт',
    period: 'сентябрь 24’ — н.в.',
    text: (
      <>
        Всегда стараюсь превзойти ожидания <br />
        как от себя, так и от своей команды
      </>
    ),
    body: (
      <>
        Так за время работы, лично мной были предложены
        <br />
        <span className="panama-italic">
          гипотезы, которые сейчас
          <br />
          в среднем приносят больше 100млн в год,
        </span>
        <br />
        даже на стадии МЛП версий
      </>
    ),
    note: 'большинство данных раскрыть не могу, зато про самые интересные кейсы без слива данных',
    cta: 'расскажу здесь',
    link: `${import.meta.env.BASE_URL}cases/03/`,
    image: caseNdaImage,
    imageAlt: 'Кейс про личные продуктовые инициативы',
    nda: ['к сожалению картинки под NDA'],
  },
]

function App() {
  return (
    <main className="figma-page">
      <div className="portfolio-canvas">
        <header className="page-header">
          <div className="identity-block">
            <p className="identity-line">
              <span className="panama-italic">Коля Лукьянюк.</span> Лид-дизайнер и артдиректор
            </p>
            <p className="identity-meta">Т-Бизнес, ex. Alfa, MAX, AIC, Mission:Luna</p>
            <p className="identity-meta">лен. область, удаленка</p>
          </div>

          <nav className="side-nav" aria-label="Основная навигация">
            <a href="#about">про себя</a>
            <a href="#cases">кейсы</a>
            <a href="#origin">оридж</a>
            <a href="#contact">связь</a>
          </nav>
        </header>

        <section className="hero-section" id="about">
          <div className="hero-portrait-wrap">
            <img className="hero-portrait" src={heroPortrait} alt="Портрет Коли Лукьянюка" />
            <p className="hero-caption">кратко про себя</p>
          </div>
        </section>

        <section className="intro-section">
          <div className="intro-heading">
            <span className="panama-italic">Продуктовый дизайнер</span>
            <span>с общим стажем 8 лет</span>
          </div>

          <div className="intro-copy">
            <p className="intro-line intro-line--offset">
              Отвечаю за дизайн сложных продуктов с большой ценой ошибки — б2б финтех,
            </p>
            <p className="intro-line intro-line--full intro-line--tight">
              екомы, ритейл, медиа. Имею солидную экспертность продакта, могу самостоятельно
              драйвить развитие крупных продуктов.
            </p>
            <p className="intro-line intro-line--full intro-line--mid">
              <span className="panama-italic">Развиваю команду из 5 дизайнеров</span> — отвечаю
              за качество их работы, продумываю индивидуальный план развития и передаю все
              знания. Всецело отвечаю за найм и последующую интеграцию в команду.
            </p>
            <p className="intro-line intro-line--right">
              Выстраиваю с нуля <span className="panama-italic">процессы для отдела дизайнеров</span>
              {' '}— паттерны развития, найм, продуктовый подход и ведение задач
            </p>
          </div>
        </section>

        <section className="band-section">
          <img src={bandImage} alt="" />
        </section>

        <section className="moment-section">
          <p className="section-title panama-italic">на момент весны 2026</p>

          <div className="moment-grid">
            <article className="moment-card">
              <h3>Почти 4 года работаю в Т-Бизнесе</h3>
              <p>
                Нахожусь на должности арт-директора — отвечаю за Главный экран и
                Навигацию.
                <br />
                Плюс имею свою дизайн команду и отвечаю за качество работы
                отдела
              </p>
              <div className="moment-card__tags">
                <span>интерфейс б2б</span>
                <span>(ех Тинькофф)</span>
              </div>
            </article>

            <article className="moment-card">
              <h3>
                В любой работе ищу большую степень
                <br />
                ответственности, свободу проявлять
              </h3>
            </article>
          </div>
        </section>

        <section className="cases-wrapper" id="cases">
          <h2 className="section-title panama-italic">опыт, компетенции и кейсы</h2>

          <div className="cases-list">
            {caseCards.map((card, index) => (
              <article
                className={`case-card ${index === 0 ? 'case-card--team' : ''}`}
                key={card.number}
              >
                <div className="case-card__line" />
                <div className="case-card__top">
                  <span>{card.number}</span>
                  <span>{card.title}</span>
                  <span>{card.tag}</span>
                  <span>{card.period}</span>
                </div>

                <div className="case-card__content">
                  <div className="case-card__text">
                    <p className="case-card__lead">{card.text}</p>
                    <p className="case-card__body">{card.body}</p>
                    {card.note ? <p className="case-card__note">{card.note}</p> : null}
                    <a className="case-card__cta" href={card.link}>
                      {card.cta}
                    </a>
                  </div>

                  <a className={card.imageClassName || 'case-card__image'} href={card.link}>
                    <img src={card.image} alt={card.imageAlt} />
                    {card.nda ? (
                      <div className="case-card__nda">
                        {card.nda.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    ) : null}
                  </a>
                </div>
              </article>
            ))}

            <div className="case-card__tail">
              <div className="case-card__line" />
              <div className="case-card__top case-card__top--muted">
                <span>∞</span>
                <span>кейсы будут дополняться. Дополнительно могу рассказать лично на знакомстве</span>
              </div>
            </div>
          </div>
        </section>

        <section className="workbook-section" id="origin">
          <h2 className="section-title panama-italic">трудовая книжка</h2>

          <div className="workbook-list">
            {jobs.map((job) => (
              <article className="workbook-item" key={`${job.period}-${job.title}`}>
                <div className="workbook-item__line" />
                <div className="workbook-item__row">
                  <p className="workbook-item__period">{job.period}</p>
                  <div className="workbook-item__content">
                    <h3 className="workbook-item__title">
                      {job.title}
                      {job.subtitle ? (
                        <>
                          <br />
                          {job.subtitle}
                        </>
                      ) : null}
                    </h3>
                    <div className="workbook-item__description">
                      {job.description.map((line, index) => (
                        <p key={`${job.title}-${index}`}>{line || '\u00A0'}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-card">
            <p className="contact-label">контакты и связь</p>

            <div className="contact-meta">
              <span className="contact-meta__muted">живу</span>
              <span>в лен. области</span>
              <span className="contact-meta__muted">работаю</span>
              <span>на удаленке</span>
            </div>

            <div className="contact-links">
              <div className="contact-links__row">
                <span className="contact-meta__muted">личный телеграм:</span>
                <a href="https://t.me/insapity" target="_blank" rel="noreferrer">
                  t.me/insapity
                </a>
              </div>
              <div className="contact-links__row">
                <span className="contact-meta__muted">канал про дизайн</span>
                <a href="https://t.me/ascendesign" target="_blank" rel="noreferrer">
                  t.me/ascendesign
                </a>
              </div>
              <div className="contact-links__row">
                <span className="contact-meta__muted">электропочта</span>
                <span>lukyanyuk.98@mail.ru</span>
              </div>
            </div>
          </div>

          <div className="contact-photo">
            <img src={contactPhoto} alt="Портрет Коли Лукьянюка" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default App

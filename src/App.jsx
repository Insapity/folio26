import './App.css'

const projects = [
  {
    title: 'Портфолио для креативного специалиста',
    description:
      'Одностраничный сайт с выразительным первым экраном, адаптивной сеткой и быстрым доступом к контактам.',
    stack: 'React, Vite, UI',
  },
  {
    title: 'Лендинг под запуск услуги',
    description:
      'Структура для презентации услуги: оффер, выгоды, кейсы и понятный сценарий заявки без перегруза.',
    stack: 'Frontend, Copy, UX',
  },
  {
    title: 'Сайт-визитка с характером',
    description:
      'Минималистичный сайт, который помогает быстро объяснить, кто вы, как работаете и чем можете быть полезны.',
    stack: 'Responsive, Branding',
  },
]

const facts = [
  'Делаю сайты, которые выглядят собранно и читаются с первого экрана.',
  'Люблю чистую вёрстку, ясные тексты и аккуратную адаптацию под мобильные.',
  'Работаю быстро: от черновика до готовой страницы за несколько итераций.',
]

const services = [
  'Лендинги и визитки',
  'Портфолио для фрилансеров и специалистов',
  'Редизайн первого экрана и структуры сайта',
]

const steps = [
  'Обсуждаем задачу и собираем короткий каркас сайта.',
  'Собираю дизайн и адаптивную верстку.',
  'Публикуем на GitHub Pages или другом хостинге.',
]

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero">
          IN
        </a>
        <nav className="topnav" aria-label="Основная навигация">
          <a href="#about">Обо мне</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy" id="hero">
          <p className="eyebrow">Portfolio 2026</p>
          <div className="hero-title-wrap">
            <span className="hero-orb" aria-hidden="true"></span>
            <h1>
              Делаю простые сайты, которые помогают показать себя в интернете
            </h1>
          </div>
          <p className="lead">
            Это пример стартового портфолио. Его можно использовать как шаблон:
            заменить имя, тексты, проекты и сразу опубликовать на GitHub Pages.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#projects">
              Посмотреть проекты
            </a>
            <a className="secondary-link" href="#contact">
              Написать мне
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <p className="card-label">Сейчас на сайте</p>
          <ul className="stack-list">
            <li>Крупный первый экран с понятным оффером</li>
            <li>Блоки услуг, кейсов и процесса работы</li>
            <li>Готовая структура для личного портфолио</li>
          </ul>
          <div className="status-row">
            <span className="status-dot" aria-hidden="true"></span>
            Сборка подходит для GitHub Pages
          </div>
        </aside>
      </section>

      <section className="section-grid about-grid" id="about">
        <div className="panel panel-accent">
          <p className="section-kicker">Обо мне</p>
          <h2>Привет, я Николай. Собираю аккуратные сайты-портфолио и лендинги.</h2>
          <p>
            Мне нравится делать страницы, которые выглядят спокойно, но не
            скучно: с хорошей типографикой, понятной структурой и ясным
            призывом к действию.
          </p>
        </div>

        <div className="panel">
          <p className="section-kicker">Фокус</p>
          <ul className="principles-list">
            {facts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-grid services-section">
        <div className="section-heading">
          <p className="section-kicker">Что я делаю</p>
          <h2 className="section-title-right">
            Сайты, которые легко запустить и удобно развивать
          </h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service}>
              <span className="service-index">0{index + 1}</span>
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Проекты</p>
          <h2 className="section-title-right">
            Примеры того, как может выглядеть твой следующий сайт
          </h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-stack">{project.stack}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid split-panel">
        <div className="panel">
          <p className="section-kicker">Как я работаю</p>
          <ul className="principles-list">
            {steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel metrics-panel">
          <p className="section-kicker">Почему такой сайт удобен</p>
          <div className="metrics-grid">
            <div>
              <strong>1 страница</strong>
              <span>достаточно, чтобы представить себя и собрать заявки</span>
            </div>
            <div>
              <strong>3-4 блока</strong>
              <span>хватает для понятного сценария просмотра</span>
            </div>
            <div>
              <strong>1 репозиторий</strong>
              <span>и сайт уже можно бесплатно держать на GitHub Pages</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-banner" id="contact">
        <div>
          <p className="section-kicker">Контакт</p>
          <h2>hello@portfolio.dev</h2>
          <p>Telegram: @insapity</p>
        </div>
        <a className="primary-link" href="mailto:hello@portfolio.dev">
          Написать
        </a>
      </section>
    </main>
  )
}

export default App

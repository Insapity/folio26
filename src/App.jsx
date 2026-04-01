import './App.css'

const strengths = [
  {
    title: 'Управление командой',
    description:
      'Нанимаю, развиваю и синхронизирую дизайнеров так, чтобы команда не просто производила макеты, а стабильно влияла на продукт и бизнес.',
  },
  {
    title: 'Процессы и operating model',
    description:
      'Выстраиваю роли, ритуалы, приоритеты, систему принятия решений и понятный дизайн-пайплайн без бюрократии ради бюрократии.',
  },
  {
    title: 'Сложные продуктовые контуры',
    description:
      'Хорошо работаю там, где много стейкхолдеров, технических ограничений, зависимостей между командами и высокая цена ошибок.',
  },
]

const outcomes = [
  'Команда становится предсказуемой по качеству, скорости и ответственности.',
  'Дизайн перестаёт быть сервисной функцией и начинает влиять на продуктовые решения.',
  'Сложные инициативы движутся через ясные приоритеты, а не через постоянный ручной менеджмент.',
]

const cases = [
  {
    label: 'Leadership',
    title: 'Собрать и стабилизировать дизайн-команду',
    description:
      'Когда нужно навести порядок в ролях, ожиданиях, ответственности и качестве работы команды.',
  },
  {
    label: 'Process',
    title: 'Выстроить процессы без потери скорости',
    description:
      'Когда продукт растёт, команд становится больше, а старые договорённости уже не держат систему.',
  },
  {
    label: 'Product',
    title: 'Удержать сложный продукт управляемым',
    description:
      'Когда важно синхронизировать дизайн, продукт и разработку вокруг общей логики и бизнес-целей.',
  },
]

const principles = [
  'Сначала договариваюсь о том, что именно команда должна изменить в продукте и организации.',
  'Потом выстраиваю контур управления: роли, ритмы, ответственность, точки принятия решений.',
  'После этого усиливаю качество дизайна, кросс-функциональное взаимодействие и predictability delivery.',
]

const highlights = [
  {
    number: '01',
    title: 'People',
    text: 'Развитие команды, менторство, найм, рост лидов и удержание качества без микроменеджмента.',
  },
  {
    number: '02',
    title: 'Process',
    text: 'Организация дизайн-функции, операционные ритуалы, приоритизация, прозрачность и рабочие правила.',
  },
  {
    number: '03',
    title: 'Product',
    text: 'Работа со сложными сценариями, стейкхолдерами и продуктовыми компромиссами на уровне системы.',
  },
]

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero">
          NL
        </a>
        <nav className="topnav" aria-label="Основная навигация">
          <a href="#about">Обо мне</a>
          <a href="#strengths">Сильные стороны</a>
          <a href="#contact">Контакт</a>
        </nav>
      </header>

      <section className="hero" id="hero">
        <div className="hero-copy">
          <p className="eyebrow">Design Lead / Team Management / Product Operations</p>
          <h1>
            Дизайн-лид, который помогает командам работать системно, а сложным
            продуктам расти без хаоса.
          </h1>
          <p className="lead">
            Я занимаюсь управлением дизайн-командой, выстраиванием процессов и
            ведением сложных продуктов. Подключаюсь там, где нужен не просто
            сильный individual contributor, а человек, который собирает вокруг
            себя работающую дизайн-функцию и делает её полезной для бизнеса.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#contact">
              Обсудить задачу
            </a>
            <a className="secondary-link" href="#about">
              Посмотреть профиль
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <p className="card-label">Что получает компания</p>
          <ul className="stack-list">
            <li>Управляемую команду с ясной зоной ответственности</li>
            <li>Понятные процессы, которые поддерживают скорость, а не душат её</li>
            <li>Лидера, который умеет держать продукт, людей и delivery в одной системе</li>
          </ul>
          <div className="hero-meta">
            <span>Фокус</span>
            <strong>People / Process / Product</strong>
          </div>
        </aside>
      </section>

      <section className="section-grid about-grid" id="about">
        <div className="panel panel-feature">
          <p className="section-kicker">Обо мне</p>
          <h2>
            Я соединяю дизайн-лидерство, продуктовый контекст и операционную
            дисциплину.
          </h2>
          <p>
            Моя ценность не только в том, чтобы видеть хороший интерфейс. Я
            умею собирать среду, в которой команда принимает сильные решения,
            двигается в общем ритме и выдерживает сложность продукта на длинной
            дистанции.
          </p>
          <p>
            Мне интересны задачи, где нужно выстроить работающую систему:
            наладить взаимодействие между дизайном, продуктом и разработкой,
            снизить организационный шум, усилить ownership и превратить дизайн в
            реальный инструмент роста, а не в декоративную функцию.
          </p>
        </div>

        <div className="panel panel-compact">
          <p className="section-kicker">Ключевой фокус</p>
          <div className="metrics-grid">
            {highlights.map((item) => (
              <div key={item.number}>
                <span className="metric-number">{item.number}</span>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-grid" id="strengths">
        <div className="section-heading">
          <p className="section-kicker">Сильные стороны</p>
          <h2>
            Беру на себя не только визуальное качество, но и зрелость всей
            дизайн-системы принятия решений.
          </h2>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <div className="section-heading">
          <p className="section-kicker">Где я полезен</p>
          <h2>
            Обычно меня привлекают в моменты роста, усложнения или
            организационного напряжения.
          </h2>
        </div>
        <div className="project-grid">
          {cases.map((item) => (
            <article className="project-card" key={item.title}>
              <p className="project-stack">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid split-panel">
        <div className="panel">
          <p className="section-kicker">Как я работаю</p>
          <ul className="principles-list">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel panel-outcomes">
          <p className="section-kicker">Результат для бизнеса</p>
          <ul className="principles-list">
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-banner" id="contact">
        <div>
          <p className="section-kicker">Контакт</p>
          <h2>Готов обсудить команду, продукт или дизайн-операционку.</h2>
          <p>Telegram: @insapity</p>
        </div>
        <a className="primary-link" href="https://t.me/insapity" target="_blank" rel="noreferrer">
          Написать
        </a>
      </section>
    </main>
  )
}

export default App

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme styles
import './App.css';
import Chatbot from './Chatbot'; // Import the Chatbot component
import Resume from './Resume'; // Import the Resume component

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ShrineSlider />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Frankie Aguirre</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#shrines">Shrines</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const AboutMe = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am Frankie Aguirre, a passionate and driven Information Technology professional currently pursuing a degree at Kean University. With a strong foundation in programming languages like Python, Java, JavaScript, HTML, CSS, and SQL, I am committed to leveraging my skills to solve complex technical challenges. My primary interests lie in Network Technology, Database Management, and staying up-to-date with the latest research in computer and network technology. I am eager to apply my knowledge to real-world scenarios, continuously learn, and grow as a network engineer. My goal is to contribute to innovative projects and provide reliable IT solutions in a dynamic, team-oriented environment.
      </p>
    </section>
  );
};

const ShrineSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const shrines = [
    {
      name: "Web Design ",
      image: "https://media.licdn.com/dms/image/D5612AQFp86gholx6fw/article-cover_image-shrink_720_1280/0/1708422990591?e=2147483647&v=beta&t=6rUer-Xo3IAqK2KIOVR9Z7pAH7TWxAQCp56FghCqKWM",
      description: "I enjoy exploring web design and development through various technologies like HTML, CSS, JavaScript, and React. Creating interactive and visually appealing websites allows me to express my creativity while honing my technical skills. I love experimenting with responsive design and user experience principles, always seeking to enhance my knowledge and stay updated with industry trends. Each project is an opportunity to blend aesthetics with functionality, making web design a rewarding passion of mine.",
    },
    {
      name: "Traveling",
      image: "https://img.freepik.com/premium-photo/japanese-temple-with-mountain-background_582637-2188.jpg",
      description: "I have a passion for traveling, with Japan topping my list of must-visit destinations. I’m fascinated by its rich culture, stunning landscapes, and delicious cuisine. I dream of wandering through ancient temples, exploring bustling markets, and experiencing local traditions firsthand. The blend of modernity and history in Japan truly captivates me, and I can’t wait to create unforgettable memories while discovering all that this beautiful country has to offer.",
    },
    {
      name: "Listening to music",
      image: "https://pannkpop.com/wp-content/uploads/2024/06/Compare-the-achievements-of-NewJeans-IVE-Aespa-and-LE-SSERAFIM-on-Melon-1.jpg",
      description: "I Love listening to music, all day long.  Lately i've been introduced to a genre called K-pop and it's not as bad as i thought it would be.  My favorite groups are Aespa, New Jeans, and Le Sserafim, their pictures are displayed above :).",
    },
  ];

  return (
    <section id="shrines">
      <h2>Hobbies</h2>
      <Slider {...settings}>
        {shrines.map((shrine, index) => (
          <div key={index} className="shrine-slide">
            <img src={shrine.image} alt={shrine.name} />
            <h3>{shrine.name}</h3>
            <p>{shrine.description}</p>
          </div>
        ))}
      </Slider>
      {/* Embed the Resume Component here */}
      <Resume />
    </section>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: 'Project 1',
      description: (
        <p>
          The "Who's That Pokémon?" project is an interactive web-based game that challenges users to identify Pokémon based on their silhouettes. When a silhouette is displayed, users can type in their guess of the Pokémon's name or opt to give up and reveal the answer. The game provides immediate feedback on the correctness of guesses, making it engaging for fans and those looking to test their Pokémon knowledge. The design focuses on a simple, user-friendly interface that enhances the experience of playing a classic Pokémon trivia game. For more, you can explore the game{' '}
          <a href="https://obi2.kean.edu/~alcadar@kean.edu/whopk.html" target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </p>
      ),
    },
    {
      title: 'Project 2',
      description: (
        <p>
          The project is a "My Hero Academia Matching Game," an online card-matching game themed around characters from the anime "My Hero Academia." Players match pairs of cards featuring different characters within a set time limit, testing memory and recognition skills. The game includes a timer and options to start or restart, offering an engaging and competitive experience for fans of the series. You can explore the game further{' '}
          <a href="https://obi2.kean.edu/~alcadar@kean.edu/game3.html" target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </p>
      ),
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

const Skills = () => {
  const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Python', 'SQL'];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <label>Name:</label>
        <input type="text" required />
        <label>Email:</label>
        <input type="email" required />
        <label>Message:</label>
        <textarea required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Frankie Aguirre</p>
    </footer>
  );
};

export default App;

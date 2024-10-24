import React from 'react';
import './Resume.css'; // Make sure to create Resume.css for styling

const Resume = () => {
  return (
    <div className="resume-container">
      <header>
        <h1>FRANKIE AGUIRRE'S RESUME</h1>
        <p>Elizabeth, New Jersey 07202 | 9089431398 | aguirref@kean.edu</p>
      </header>
      <section id="education">
        <h2>EDUCATION</h2>
        <p>Kean University</p>
        <p>Bachelor of Science, Information Technology Cybersecurity, Expected in 05/2026</p>
        <p>Learning Coding languages and an understanding of computers with the ability to manage software, hardware, and supporting infrastructure</p>
        <p>GPA: 3.2</p>
      </section>
      <section id="professional-summary">
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>Seasoned Sales Representative knowledgeable about selling in B2C environments.</p>
        <p>Leverages exceptional customer relations experience to win new customers. Skilled at demonstrating products and closing sales with tenacious and driven approach. Talented networker with expertise in cold calling, strategic planning, and task prioritization focused on maximizing efficiency and sales success.</p>
      </section>
      <section id="work-history">
        <h2>WORK HISTORY</h2>
        <h3>SALES SPECIALIST</h3>
        <p>Bobs Discount Furniture, Totowa, NJ</p>
        <ul>
          <li>Trained and mentored new sales representatives.</li>
          <li>Used [Software] to research customer accounts to determine whether credits or adjustments needed to be made.</li>
          <li>Interacted with approximately [Number] customers daily to provide personalized product guidance, resolve issues and open new accounts.</li>
          <li>Generated new leads through networking and attending industry events.</li>
          <li>Developed and delivered engaging sales presentations to convey product benefits.</li>
          <li>Supported retail distributors, dealers, and customers through in-person and telephone support.</li>
          <li>Followed up with customers after completed sales to assess satisfaction and resolve technical or service concerns.</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;

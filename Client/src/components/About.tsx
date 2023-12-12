import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Reliability App</h2>
      <p>
        Welcome to the Reliability App, where we focus on testing the reliability of web servers.
        This application helps users analyze the performance and stability of their web servers.
        Whether you are a regular user managing your to-do lists or an administrator overseeing
        the web server's reliability, this app has you covered.
      </p>

      <section className="user-section">
        <h3>For Users:</h3>
        <ul>
          <li><strong>Task Management:</strong> Create tasks, set deadlines, and track their status.</li>
          <li><strong>Web Server Reliability Tracking:</strong> Check the availability of your web servers and receive notifications about their status.</li>
        </ul>
      </section>

      <section className="admin-section">
        <h3>For Administrators:</h3>
        <ul>
          <li><strong>Web Server Reliability Monitoring:</strong> Access advanced monitoring tools to ensure the stability and performance of the web server.</li>
          <li><strong>Notifications and Event Logs:</strong> Automatically log events related to the web server's operation and receive notifications in case of anomalies.</li>
        </ul>
      </section>

      <section className="additional-features">
        <h3>Additional Features:</h3>
        <ul>
          <li><strong>Authentication and Security:</strong> Robust authentication mechanisms ensure user and administrator security.</li>
          <li><strong>Modern and Intuitive Interface:</strong> Enjoy a modern and intuitive interface, facilitating seamless interaction for users and administrators.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;

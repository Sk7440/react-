import { useState } from "react";
import "./App.css";

export default function Input() {
  const [data, setdata] = useState({
    fullname: "",
    professionaltitle: "",
    location: "",
    phonenumber: "",
    email: "",
    linkedInPortfoliolink: "",
    coreskills: "",
    certifications: "",
    professionalsummary: "",
    jobtitle: "",
    employment: "",
    companyname: "",
    qualification: "",
  });
  function handling(e) {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <div className="parent">
        <div className="info">
          <h3>Enter your personal info</h3>
          <input
            name="fullname"
            placeholder="Enter your Full Name"
            onChange={(e) => {
              handling(e);
            }}
            type="text"
          />
          <input
            name="professionaltitle"
            placeholder="Enter your Professional Title"
            onChange={(e) => {
              handling(e);
            }}
            type="text"
          />
          <input
            name="location"
            placeholder="Enter your Location"
            onChange={(e) => {
              handling(e);
            }}
            type="text"
          />
          <input
            name="phonenumber"
            placeholder="Enter your Phone Number"
            onChange={(e) => {
              handling(e);
            }}
            type="number"
          />
          <input
            name="email"
            placeholder="Enter your Email"
            onChange={(e) => {
              handling(e);
            }}
            type="email"
          />
          <input
            name="linkedInportfoliolink"
            placeholder="Enter your LinkedIn / Portfolio Link"
            onChange={(e) => {
              handling(e);
            }}
            type="url"
          />
          <input
            name="coreskills"
            placeholder="Enter your Core Skills"
            min={2}
            max={4}
            onChange={(e) => {
              handling(e);
            }}
            type="text"
          />
         
          <h1>Enter about your work experince</h1>
          <input
            name="jobtitle"
            placeholder="Job Title [e.g., Senior Software Engineer]"
            onChange={(e) => {
              handling(e);
            }}
            type="text"
          />
          <input
            name="employment"
            placeholder="Employment Dates [Month Year – Present]"
            onChange={(e) => {
              handling(e);
            }}
            type="text"
          />
          <input
            name="companyname"
            placeholder="Company Name & Location: [Company Name — City, State]"
            onChange={(e) => {
              handling(e);
            }}
            type="text"
          />
          <input
            name="professionalsummary"
            placeholder="Professional Summary:[Write 3-4 sentences summarizing your total years of experience, core expertise, and a major career win.]"
            onChange={(e) => {
              handling(e);
            }}
            type="text"
          />

          <h3>Enter your Education</h3>
          <input
            name="qualification"
            placeholder="Degree / Qualification: [e.g., B.S. in Computer Science]"
            onChange={(e) => {
              handling(e);
            }}
            type="text"
          />
        </div>
        <main class="cv-container">
          <aside class="cv-sidebar">
            <div class="profile-section">
              <h1 class="name">{data.fullname}</h1>
              <p class="title">{data.professionaltitle}</p>
            </div>

            <div class="contact-section">
              <h3>Contact</h3>
              <ul>
                <li>
                  <strong>Email:</strong> {data.email}
                </li>
                <li>
                  <strong>Phone:</strong> {data.phonenumber}
                </li>
                <li>
                  <strong>Location:</strong> {data.location}
                </li>
                <li>
                  <strong>LinkedIn:</strong> {data.linkedInportfoliolink}
                </li>
              </ul>
            </div>

            <div class="skills-section">
              <h3>Core Skills</h3>
              <ul class="skill-tags">
                <li>{data.coreskills}</li>
              </ul>
            </div>

            <div class="education-section">
              <h3>Education</h3>
              <div class="edu-item">
                <h4>{data.qualification}</h4>
              </div>
            </div>
          </aside>

          <section class="cv-main">
            <div class="experience-section">
              <h3>Professional Experience</h3>

              <div class="job-item">
                <div class="job-header">
                  <h4>{data.jobtitle}</h4>
                  <span class="date">{data.employment}</span>
                </div>
                <p class="company">{data.companyname}</p>
                <ul>
                  <li>{data.professionalsummary}</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

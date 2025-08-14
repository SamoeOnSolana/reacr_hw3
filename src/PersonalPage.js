import React from 'react';

const PersonalPage = () => {
  const person = {
    name: "Олександр Шалаєв",
    phone: "+380 99 396 21 67",
    email: "alexandrrr735@gmail.com",
    city: "Київ",
    experience: "1 рік",
    skills: ["JavaScript", "React", "HTML", "CSS", "Node.js", "Python", "Solidity"],
    photo: "/photo_2025-08-13 19.24.11.jpeg",
    age: 17,
    education: "IT step academy"
  };

  return (
    <div style={{border: '1px solid blue', padding: '20px', margin: '10px'}}>
      <h2>завдання 2</h2>
      
      <div style={{border: '1px solid purple', padding: '15px', margin: '10px'}}>
        <ProfilePhoto photo={person.photo} name={person.name} />
        <PersonalInfo {...person} />
        <SkillsList skills={person.skills} />
      </div>
    </div>
  );
};

const ProfilePhoto = ({ photo, name }) => {
  return (
    <div style={{textAlign: 'center', marginBottom: '15px'}}>
      <img src={photo} alt={name} style={{width: '150px', height: '150px', borderRadius: '50%', border: '3px solid green'}} />
      <h3>{name}</h3>
    </div>
  );
};

const PersonalInfo = ({ phone, email, city, experience, age, education }) => {
  return (
    <div style={{border: '1px solid orange', padding: '10px', margin: '10px'}}>
      <p><strong>Телефон:</strong> {phone}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Місто:</strong> {city}</p>
      <p><strong>Досвід:</strong> {experience}</p>
      <p><strong>Вік:</strong> {age} років</p>
      <p><strong>Освіта:</strong> {education}</p>
    </div>
  );
};

const SkillsList = ({ skills }) => {
  return (
    <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
      <h4>Навички:</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} style={{margin: '5px 0'}}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalPage;

import React from 'react';

const PetInfo = () => {
  const pet = {
    name: "Оскар",
    type: "Пес",
    breed: "Йоркширський тер'єр",
    age: 12,
    color: "Білий",
    weight: "3 кг",
    photo: "https://via.placeholder.com/250x200",
    favoriteFood: ["Рибка", "Курятина", "Сухий корм"],
    hobbies: ["Спати", "Гратися з м'ячиком", "Дивитися в вікно"]
  };

  return (
    <div style={{border: '1px solid orange', padding: '20px', margin: '10px'}}>
      <h2>Завдання 4</h2>
      
      <div style={{border: '1px solid blue', padding: '15px', margin: '10px'}}>
        <PetPhoto photo={pet.photo} name={pet.name} type={pet.type} />
        <PetDetails {...pet} />
        <PetPreferences food={pet.favoriteFood} hobbies={pet.hobbies} />
      </div>
    </div>
  );
};

const PetPhoto = ({ photo, name, type }) => {
  return (
    <div style={{textAlign: 'center', marginBottom: '15px'}}>
      <img src={photo} alt={name} style={{width: '200px', height: '160px', border: '3px solid green', borderRadius: '10px'}} />
      <h3>{name}</h3>
      <p style={{color: 'blue', fontWeight: 'bold'}}>{type}</p>
    </div>
  );
};

const PetDetails = ({ breed, age, color, weight }) => {
  return (
    <div style={{border: '1px solid purple', padding: '10px', margin: '10px'}}>
      <h4>Основна інформація:</h4>
      <p><strong>Порода:</strong> {breed}</p>
      <p><strong>Вік:</strong> {age} роки</p>
      <p><strong>Колір:</strong> {color}</p>
      <p><strong>Вага:</strong> {weight}</p>
    </div>
  );
};

const PetPreferences = ({ food, hobbies }) => {
  return (
    <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
      <div style={{marginBottom: '15px'}}>
        <h4>Улюблена їжа:</h4>
        <ul>
          {food.map((item, index) => (
            <li key={index} style={{margin: '5px 0'}}>🍽️ {item}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4>Хобі:</h4>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index} style={{margin: '5px 0'}}>🎾 {hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PetInfo;

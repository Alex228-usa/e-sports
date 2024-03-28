// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import AboutUsBlock from './components/AboutUsBlock';
import NewsBlock from './components/NewsBlock';
import Footer from './components/Footer';
import AthletesManagement from './components/AthletesManagement';
import AthletePassport from './components/AthletePassport';
import AthleteBlock from './components/AthleteBlock';
import AtheleteCard from './components/AtheleteCard';
import RegistrationForm from './components/RegistrationForm';
import ProfilePage from './components/ProfilePage';
import EventsCalendar from './components/EventsCalendar';
import Analytics from './components/Analytics';


const App = () => {
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  const athletesData = [
    { id: 1, name: 'Иван Иванов', age: 25, country: 'Россия', sport: 'Футбол', photo: 'ivan.jpg' },
    { id: 2, name: 'Петр Петров', age: 30, country: 'США', sport: 'Теннис', photo: 'petr.jpg' },
  ];

  const handleSelectAthlete = (athlete) => {
    setSelectedAthlete(athlete);
  };

  return (
    <div>
      <h1>Управление спортсменами</h1>
      <AthletesManagement />
      <h1>Паспорт спортсмена</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {athletesData.map((athlete) => (
          <div key={athlete.id}>
            <button onClick={() => handleSelectAthlete(athlete)}>{athlete.name}</button>
          </div>
        ))}
      </div>
      {selectedAthlete && <AthletePassport athlete={selectedAthlete} />}
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Header />
      <MainBlock />
      <AboutUsBlock />
      <NewsBlock />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <a href="http://itp.ac.ru/">Институт теоретической физики им Л.Д. Ландау</a>
                <h1>
                    Сектор квантовой мезоскопии
                </h1>
                <div className="navbar">
                    <a href="#">Главная</a>
                    <a href="#">Сотрудники</a>
                    <a href="#">Публикации</a>
                    <div className="dropdown">
                        <button className="dropbtn">Преподавание</button>
                        <div className="dropdown-content">
                            <a href="#">Ссылка на расписание</a>
                            <a href="#">Студентам о наших исследованиях</a>
                            <a href="#">Лекции</a>
                            <a href="#">Дипломные работы и диссертации</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Семинары и конференции</button>
                        <div className="dropdown-content">
                            <a href="#">Семинар сектора</a>
                            <a href="#">Внешние школы и конференции</a>
                            <a href="#">Аспирантский семинар</a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <p> Henlo world !!!!!</p>
            </main>
        </div>
    );
}

export default App;

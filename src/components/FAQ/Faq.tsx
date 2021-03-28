import React from 'react';

import './Faq.scss';

import arrowDown from '../../assets/images/arrow-down.svg';
import faqImg from '../../assets/images/faq-img.svg';

const Faq = () => {
    const clickHandler = function (e) {
        let panel = e.currentTarget.parentElement.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
        panel.classList.toggle('margin-top-show');
        e.currentTarget.classList.toggle('arrow-flip');
        e.currentTarget.parentElement.classList.toggle('bold-font');
    };

    return (
        <section className="main">
            <div className="main__box">
                <img src={faqImg} alt="faq"/>
            </div>
            <div className="main__images">
                <img src={faqImg} alt="faq"/>
            </div>
            <div className="main__faq">
                <h2>FAQ</h2>
                <div>
                    <div className="question">
                        <div className="question__title">
                            <p>Czym jest Ankieta Obywatelska?</p>
                            <img src={arrowDown} alt="arrow icon" className="img-btn" onClick={clickHandler}/>
                        </div>
                        <div className="question__answer">
                            Ankieta Obywatelska to miejsce do integracji obywateli naszego kraju. Powstała ona po to,
                            aby w jednym
                            miejscu gromadzić informacje dotyczące większości poglądów w naszym kraju
                        </div>
                    </div>
                    <div className="question">
                        <div className="question__title">
                            <p>Czy ankiety są płatne?</p>
                            <img src={arrowDown} alt="arrow icon" className="img-btn" onClick={clickHandler}/>
                        </div>
                        <div className="question__answer">Projekt Ankieta Obywatelska został stworzony przez grupę
                            pasjonatów, chcących zrobić coś dobrego dla świata. Na chwilę obecną wszystko co tutaj
                            znajdziecie jest całkowicie
                            darmowe, ale możecie <b style={{cursor: 'pointer', color: 'blue'}}>wesprzeć naszą pracę</b>
                        </div>
                    </div>
                    <div className="question">
                        <div className="question__title">
                            <p>W jaki sposób mogę zagłosować w ankiecie?</p>
                            <img src={arrowDown} alt="arrow icon" className="img-btn" onClick={clickHandler}/>
                        </div>
                        <div className="question__answer">
                            Udział w ankiecie jest prosty. Zarejestruj się podając swoje imię, nazwisko i numer
                            telefonu. Potwierdź konto a następnie wybierz
                            interesującą Cię ankietę. Twoje dane osobowe są u nas bezpieczne. Nie będą one
                            wykorzystywane przez firmy trzecie. Potrzebujemy
                            ich tylko do zweryfikowania Twoich danych. W KAŻDEJ ANKIECIE MOŻNA WZIĄĆ UDZIAŁ TYLKO RAZ
                        </div>
                    </div>
                    <div className="question">
                        <div className="question__title">
                            <p>Do kogo skierowane są Ankiety Obywatelskie?</p>
                            <img src={arrowDown} alt="arrow icon" className="img-btn" onClick={clickHandler}/>
                        </div>
                        <div className="question__answer">Ankiety Obywatelskie skierowane są do wszystkich pragnących
                            mieć realny wpływ
                            na <b>kształtowanie prawdziwej teraźniejszości</b>. Weryfikując dane użytkowników na
                            podstawie podanego przy rejestracji
                            numeru telefonu, masz pewność, że wszystkie głosy są oddane przez realne osoby
                        </div>
                    </div>
                    <div className="question">
                        <div className="question__title">
                            <p>Czy Ankieta Obywatelska oferuje zaawansowane usługi analityczne?</p>
                            <img src={arrowDown} alt="arrow icon" className="img-btn" onClick={clickHandler}/>
                        </div>
                        <div className="question__answer">Tak! Ankieta Obywatelska umożliwia dogłębne analizowanie
                            wprowadzonych danych, lecz obecnie funkcje te
                            są dostępne tylko dla wybranych, zarejestrowanych użytkowników. Jeżeli chcesz przyśpieszyć
                            postęp prac nad Ankietą Obywatelską, <b style={{color: 'blue', cursor: 'pointer'}}> możesz
                                nas wesprzeć tutaj<br /><br /><br /></b>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;

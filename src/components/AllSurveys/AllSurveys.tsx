import React, {useEffect, useState} from 'react';

import '../AllSurveys/AllSurveys.scss';
import FormDataService from "../../services/form.service";
import SurveyItem from "../SurveyItem/SurveyItem";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const AllSurveys = () => {
    const [popularSurveys, updatepopularSurveys] = useState({surveys: [], numberOfSurveys: 100});

    useEffect(() => {
        FormDataService.getMostLiked(popularSurveys.numberOfSurveys).then(response => {
            console.log(response.data);
            updatepopularSurveys({surveys: response.data, numberOfSurveys: popularSurveys.numberOfSurveys});
        });
    }, []);

    let popular = null;
    if (popularSurveys.surveys) {
        // @ts-ignore
        popular = popularSurveys.surveys.map(survey => {
            return (
                <div>
                    <SurveyItem
                        key={survey['id']}
                        id={survey['id']}
                        img={survey['imageLink']}
                        category={survey['category']}
                        comments={survey['responseCounter']}
                        title={survey['title']}
                        description={survey['description']}
                        author={survey['author']}
                        date={survey['createdAt']}
                    /></div>
            );
        });
    }
    return (
        <div>
            <section className="popular" id="popular" style={{width: '1400px', margin: "0 auto"}}>
                <Header/>
                <h2 className="subheading"><br/>Wszystkie ankiety</h2>
                <div className="popular__container">{popular}</div>
            </section>
            <Footer/>
        </div>
    );
};

export default AllSurveys;

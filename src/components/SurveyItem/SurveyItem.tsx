import React from 'react';
import {Link} from 'react-router-dom';

import './SurveyItem.scss';
import commentsImg from '../../assets/images/comments.svg';

const SurveyItem = props => {
    return (
        <div className="item">
            <img src={props.img} alt="banner" className="item__banner"/>
            <div className="item__comments">
                <img src={commentsImg} alt="comment icon" className=""/>
                <p>{props.comments}</p>
            </div>
            <p className="item__category">{props.category}</p>
            <h4 className="item__heading">{props.title}</h4>
            <p className="item__desc">{props.description}</p>
            <p className="item__author">
                <span>{`By ${props.author}`}</span> {props.date}
            </p>

            <div className="item__buttons">
                <Link to={`/survey/${props?.id}`} className="item__btn item__btn--red">
                    Wypełnij ankietę
                </Link>
                <Link to={`/surveyDetails/${props?.id}`} className="item__btn item__btn--black">
                    Zobacz ankietę
                </Link>
            </div>
        </div>
    );
};

export default SurveyItem;

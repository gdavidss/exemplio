import React from 'react';
import { Link } from 'react-router-dom';
import { linkPrefix } from '../../../options.json';

import locationIcon from '../../../assets/icons/locationIcon.svg';

export default function ExamplesListCard(props) {
    return (
        <Link className="nonUnderlineLink" to={`${linkPrefix}/exemplo/${props.exampleInfo.exemploID}`}>
            <div id={ props.exampleInfo.firstName + "_" + props.exampleInfo.exemploID } key={ props.exampleInfo.firstName + "_" + props.exampleInfo.exemploID }>
                <div className=
                {
                    ((props.isNew) ? "newExampleListCard " : "exampleListCard ") + "d-flex flex-column m-2 align-items-center text-center" 
                } >

                    { 
                        (props.isNew === true) ? (<div className="newTopCardDetail justify-content-center">&nbsp;</div>) : (<div className="topCardDetail justify-content-center">&nbsp;</div>)
                    }

                    <img className="img-fluid imageDetails my-3 " src={ props.exampleInfo.imageLink } alt={ props.exampleInfo.firstName + " " + props.exampleInfo.lastName }/>
                    <h2 className="exampleNameText"> { props.exampleInfo.firstName + " " + props.exampleInfo.lastName } </h2>
                    <h5 className="placeOfOriginText"> 
                        <img className="mr-2" alt="location" src={ locationIcon }/>
                        { props.exampleInfo.placeOfOrigin }
                    </h5>
                    <h4 className="exampleTagsText">
                        {   
                            (props.exampleInfo.tags.length > 0) ?
                            //Builds a string from all 'nextTag' (foreach) by concatenating them with ',' as separator
                            props.exampleInfo.tags.reduce((currentString, nextTag) => {
                                return currentString + ', ' + nextTag;
                            })
                            : 'Sem categorias'
                        }
                    </h4> 
                    <div className="d-flex h-100 align-items-end">
                    { 
                        (props.isNew === true) ? (<div className="newBottomCardDetail px-3 pt-1">Novo Exemplo</div>) : null
                    }
                    </div>
                </div>
            </div>
        </Link>
    );
}
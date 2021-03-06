import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { linkPrefix } from '../../../options.json'
import exemplioLogo from '../../../assets/logos/LogoVertical.svg';
import locationIcon from '../../../assets/icons/locationIcon.svg';

import '../Homepage.css';

const EXAMPLE_BASE_LINK = `${linkPrefix}/exemplo/`;
export default function ExampleCard(props) {
    const [ exampleLink, setExampleLink ] = useState('#');
    const [ imageLink, setImageLink ] = useState(exemplioLogo);
    const [ name, setName ] = useState('Carregando nome...');
    const [ tags, setTags ] = useState('Carregando tags...');
    const [ placeOfOrigin, setPlaceOfOrigin ] = useState('Carregando origem...')
    //Update Image
    useEffect(() =>  {
        if (props.exampleInfo.imageLink)
            setImageLink(props.exampleInfo.imageLink);
    }, [props.exampleInfo.imageLink]);

    //Update Name
    useEffect(()=> {
        if (props.exampleInfo.firstName)
            setName(`${props.exampleInfo.firstName} ${props.exampleInfo.lastName}`);
    }, [props.exampleInfo.firstName, props.exampleInfo.lastName]);
    
    //Update Tags
    useEffect(() => {
        if (props.exampleInfo.tags) 
            setTags(props.exampleInfo.tags.reduce((a,b) => `${a}, ${b}`));
    }, [props.exampleInfo.tags]);

    useEffect(() => {
        if (props.exampleInfo.exemploID)
            setExampleLink(`${EXAMPLE_BASE_LINK}${props.exampleInfo.exemploID}`);
    }, [props.exampleInfo.exemploID]);


    useEffect(() => {
        if (props.exampleInfo.placeOfOrigin)
            setPlaceOfOrigin(props.exampleInfo.placeOfOrigin);
    }, [props.exampleInfo.placeOfOrigin]);
    

    return (
        <Link className="nonUnderlineLink" to={ exampleLink } >
            <div className={`exampleHomepageCard flex-column m-2 p-1 align-items-center text-center`}>
             
                <img className="exampleLink img-fluid imageDetails mt-4 mb-4" src={ imageLink } alt="Carregando imagem"/>
                <h2 className="exampleNameText mx-1"> 
                    { name } 
                </h2>
                <h5 className="placeOfOriginText mb-2"> 
                        <img className="mr-2" alt="location" src={ locationIcon }/>
                        { placeOfOrigin }
                    </h5>
                <h4 className="exampleTagsText m-2 mb-4" >
                    { tags }
                </h4> 
            </div>
        </Link>
    );
}
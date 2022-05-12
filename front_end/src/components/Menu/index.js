import React, { useState } from 'react';
import menu from './assets/menu.pdf';
import './style.css';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { GiSpiralArrow } from 'react-icons/gi';
import { useHistory } from 'react-router-dom'

/**
* @author
* @function Menu
**/

export const Menu = (props) => {

    const history = useHistory();
    const routeChange = () => {
        let path = `/`;
        history.push(path);
    }

    const [numPages, setNumPages] = useState(11);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        <>
            <div className="goBackButton" onClick={routeChange}><i><GiSpiralArrow /></i></div>
            <center className="menupdf">
                <div>
                    <Document file={menu} onLoadSucess={onDocumentLoadSuccess}>
                        {Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <Page
                                    key={`${index + 1}`}
                                    pageNumber={index + 1}
                                />
                            )
                        )}
                    </Document>
                </div>
            </center>

        </>

    )

}
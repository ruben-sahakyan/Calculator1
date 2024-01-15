import { ResultSection } from "../ResultSection/ResultSection";
import { useContext } from "react";
import { dataContext } from "../UseContext";
import OneBoard from "./OneBoard/OneBoard";
import "./body.scss";

export default () => {
    const { dataField } = useContext(dataContext);
    return (
        <>
        {!!dataField.length ? 
        <>
        < ResultSection />
        <div className="body-section">
        <OneBoard />
        </div>
        </> : 
        <></>}
        </>
    );
}
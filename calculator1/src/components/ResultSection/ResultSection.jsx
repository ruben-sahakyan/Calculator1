import "./resultSection.scss"
import { useContext } from "react";
import { dataContext } from "../UseContext";


export const ResultSection = () => {
    const { dataField, setDataField } = useContext(dataContext);
    const deleteResult = () => {
        console.log('delete');
    };
    const changeReuslt = () => {
        console.log('change');
    }
    return (
        <>
        <div className="result-section">
            {dataField.map((item) => {
                return (
                    <>
                    <div className="one-result">
                        <div className="result-info">
                            <p>Width: {item.itemWidth}</p>
                            <p>Height: {item.itemHeight}</p>
                            <p>Quantity: {item.itemsCount}</p>
                        </div>
                        <div className="change-result">
                            <button className="result-change" onClick={changeReuslt}>Change</button>
                            <button className="result-delete" onClick={deleteResult}>Delete</button>
                        </div>
                    </div>
                    </>
                );
            })}
        </div>
        </>
    );
}
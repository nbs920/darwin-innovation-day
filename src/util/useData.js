import {readString} from "react-papaparse";

export function useData () {
    let filteredArr = [];
    fetch( '../innovation_day.csv' )
            .then( response => response.text() )
            .then( responseText => {
                readString(responseText, {
                    worker: true,
                    header: true,
                    complete: (results) => {
                        let resultArr = results.data;
                        resultArr.forEach((row) => {
                            filteredArr.push(row);
                        });
                        console.log("NATES ARRAY", filteredArr);
                    },
                });
            });
        console.log("help me")
    return filteredArr;
    }

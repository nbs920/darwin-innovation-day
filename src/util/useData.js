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
                        let mockShop1 = {name: "Mock Shop 1", results: []};
                        let mockShop2 = {name: "Mock Shop 2", results: []};
                        let mockShop3 = {name: "Mock Shop 3", results: []};
                        resultArr.forEach((row) => {
                            if(row["SHOP_NAME"] === "Mock Shop 1"){
                                mockShop1.results.push(row)
                            } else if (row["SHOP_NAME"] === "Mock Shop 2") {
                                mockShop2.results.push(row)
                            } else {
                                mockShop3.results.push(row)
                            }
                        });
                        filteredArr.push(mockShop1);
                        filteredArr.push(mockShop2);
                        filteredArr.push(mockShop3);
                        console.log("NATES ARRAY", filteredArr);
                    },
                });
            });
        console.log("help me")
    return filteredArr;
    }

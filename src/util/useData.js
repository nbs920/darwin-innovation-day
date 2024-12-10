import {readString} from "react-papaparse";

const monthArr = [
    "June",
    "July",
    "August",
    "September",
    "October",
    "November"
];

const my_sort = (arr) => {
    var months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
    console.log("AHHHHHHH")
    console.log(arr)
    arr.sort(function(a, b){
        return months.indexOf(a["MONTH"])
                - months.indexOf(b["MONTH"]);
    });
}

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
                                if(monthArr.includes(row["MONTH"]) && row["YEAR"] == '2024'){
                                   mockShop1.results.push(row); 
                                }
                            } else if (row["SHOP_NAME"] === "Mock Shop 2") {
                                if(monthArr.includes(row["MONTH"]) && row["YEAR"] == '2024'){
                                    mockShop2.results.push(row); 
                                 }
                            } else {
                                if(monthArr.includes(row["MONTH"]) && row["YEAR"] == '2024'){
                                    mockShop3.results.push(row); 
                                 }
                            }
                        });
                        filteredArr.push(mockShop1);
                        filteredArr.push(mockShop2);
                        filteredArr.push(mockShop3);
                        console.log("NATES ARRAY", filteredArr);
                        filteredArr.forEach((element) => {
                            element.results = my_sort(element.results)
                        })
                    },
                });
            });
    return filteredArr;
}

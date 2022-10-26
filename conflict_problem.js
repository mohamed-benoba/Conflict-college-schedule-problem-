let satArr = [
    // 08:00 - 09:30
    ['ITSE312 (A)', 'ITGS111 (A)'],
    // 09:30 - 11:00
    ['ITSE413 (A)', 'ITGS113 (A)'],
    // 11:00 - 12:30
    ['ITSE414 (A)', 'ITIS413 (A)'],
    // 12:30 - 14:00
    ['ITGS122 (B)'],
    // 14:00 - 15:30
    ['ITGS223 (B)'],
    // 15:30 - 17:00
    ['ITEL111 (A)'],
];

let sunArr = [
    ['ITGS111 (A)'],
    ['ITSE401 (A)'],
    ['ITSE405 (A)'],
    ['ITSE411 (A)'],
    ['ITGS223 (A)', 'ITGS223 (B)'],
    [],
];

let allSubjectsArr = [satArr, sunArr];

let allSubjectsArrFlatten = [].concat(...[...satArr, ...sunArr]);

let uniqueGroupSubjects = [...new Set(allSubjectsArrFlatten)];

// Take each unique groupSubject, ex: ITEN111 (A)
// for(let i=0; i<uniqueGroupSubjects.length; i++) {
//     let singleGroupSubject = uniqueGroupSubjects[i];
//     // See which day&time this unique subject is repeated in, ex: day 0, time 1 & day 1, time 2
//     for(let day=0; day<allSubjectsArr.length; day++) {
//         for(let time=0; time<allSubjectsArr[day].length; time++) {
//             for(let times=0; times<allSubjectsArr[day][time].length; times++) {
//                 if(singleGroupSubject == allSubjectsArr[day][time][times]) console.log(`${singleGroupSubject} is in: Day:${day}, Time:${time}`)
//             }
//         }
//     }
// }


let userSubjctsArr = [['ITGS111 (A)'], ['ITGS223 (A)', 'ITGS223 (B)']];


/* (2) Get days times of each subject, output ex: 
    [ 
        [ 
          [[0,1],[1,0]], "Single SubjectGroup Days&Times"
        ],

        [ 
          [[0,1],[1,0]],
          [[0,1],[1,0]] 
        ],
    ]
*/
let arrayDaysTimes = getArrayDaysTimes(userSubjctsArr);
function getArrayDaysTimes(userSubjctsArr) {
    let arrayDaysTimes = [];
    for(let i=0; i<userSubjctsArr.length; i++) {
        let arrayDaysTimesMany = [];
        for(let j=0; j<userSubjctsArr[i].length; j++) {
            // See which day&time this unique subject is repeated in, ex: day 0, time 1 & day 1, time 2
            let arrayDaysTimesSingle = []
            for(let day=0; day<allSubjectsArr.length; day++) {
                for(let time=0; time<allSubjectsArr[day].length; time++) {
                    for(let times=0; times<allSubjectsArr[day][time].length; times++) {
                        if(userSubjctsArr[i][j] == allSubjectsArr[day][time][times]) arrayDaysTimesSingle.push([day, time]);
                    }
                }
            }
            arrayDaysTimesMany.push(arrayDaysTimesSingle);
            arrayDaysTimesSingle = [];
        }
        arrayDaysTimes.push(arrayDaysTimesMany);
        arrayDaysTimesMany = [];
    }
    return arrayDaysTimes;
}

console.log(...arrayDaysTimes)



/* Compare to get possibilities */
// arrayDaysTimes


/* (2) arrayDays times: 
    [ i
        [ 
          [[0,1],[1,0]], "Single SubjectGroup Days&Times"
          [[0,1],[1,0]] 
        ],

        [ 
        j
          [ k في يدي arr [0,1],[1,0]],
          [[0,1],[1,0]] 
        ],

        [ 
        j
          [ k في يدي arr [0,1],[1,0]],
          [[0,1],[1,0]] 
        ],
    ]
*/

// you need to use recursive here

looping(0);

function looping(index) {
    for(let i=index; i<arrayDaysTimes.length; i++) {
        for(let j=0; j<arrayDaysTimes[i].length; j++) {
            for(let k=0; k<arrayDaysTimes[i][j].length; k++) {
                if(!isEqualArr(arrayDaysTimes[i][j][k],arrayDaysTimes[i+1][j][k])) {
                    // push value in final array
                } else {
                    // kill the loop "fine possibilitites"
                }
            }

            looping(i);
            // for(let i=0+1; i<arrayDaysTimes.length; i++) {
            //     for(let j=0; j<arrayDaysTimes[i].length; j++) {
            //         // you should 
            //         for(let k=0; k<arrayDaysTimes[i][j].length; k++) {
            //             console.log(arrayDaysTimes[i][j][k])
            //         }
            //     }
            // }
        }
    }
}

const isEqualArrs = (arr1, arr2) => {
    return JSON.stringify(a) === JSON.stringify(b);
};

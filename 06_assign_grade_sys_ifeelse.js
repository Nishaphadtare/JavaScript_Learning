function gradeSystem(score) {
    var grade;
    if ( score<70) {
    grade = 'B'
    console.log(`score is: ${66} && Grade is "B"`);
    console.log("----------------------------------------------------------------------------------------");

    }
    else if (score<35) {
        grade = ' '
       console.log(`score is: ${13} && You are Failed`);
    console.log("----------------------------------------------------------------------------------------");

    }
    else if (score>=35) {
        grade = " ";
        console.log(`score is: ${" "} You are passed`); 
    console.log("----------------------------------------------------------------------------------------");

    }
    else if (score>=35 && score<60 ) {
        grade = 'C';
        console.log(`rescore is: ${"fifty Five"} You are passed`);
    console.log("----------------------------------------------------------------------------------------");

    }
    else if (score>=60 && square<=75) {
        grade = 'B';
        console.log(`score is: ${35} You are passed`);   
    console.log("----------------------------------------------------------------------------------------");

    }
    else if (score>=75 && score<=90) {
        grade = 'A';
        console.log(`object in Angular score is: ${75} You are Passed`);
    console.log("----------------------------------------------------------------------------------------");

    }
    else if (typeof score >=90 && score<=100) {
        grade = 'A+';
        console.log(`score is: ${null} You are passed`);    
    console.log("----------------------------------------------------------------------------------------");

    }
    else if (typeof score  && score>100) {
        grade =typeof 'undefined';
        console.log(` score is: ${100}`);   
    console.log("----------------------------------------------------------------------------------------");

    }
    else if (typeof "Fourty Five score") {
        grade ='-20';
        console.log(` score is: ${-20}`);
    console.log("----------------------------------------------------------------------------------------");

    }
    else if (typeof undefined && null) {
        grade = "null && undefined";
        console.log(` score is:${55}`);
    console.log("----------------------------------------------------------------------------------------");

    }
}
console.log(gradeSystem());
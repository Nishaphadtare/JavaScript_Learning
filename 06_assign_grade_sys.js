function gradeSystem(score) {
    var grade;
    if (score<70) {
    grade = 'B'
    console.log('score is: ${66} And Grade is "B"');
    }
    else if (score<35) {
        grade = ' '
       console.log(`score is: ${13} && You are Failed`);
    }
    else if (score>=35) {
        grade = " ";
        console.log(`score is: ${" "} You are passed`); 
    }
    else if (score>=35 && score<60 ) {
        grade = 'C';
        console.log(`score is: ${"fifty Five"} You are passed`);
    }
    else if (score>=60 && square<=75) {
        grade = 'B';
        console.log(`score is: ${35} You are passed`);   
    }
    else if (score>=75 && score<=90) {
        grade = 'A';
        console.log(`score is: ${75} You are Passed`);
    }
    else if (score >=90 && score<=100) {
        grade = 'A+';
        console.log(`score is: ${null} You are passed`);    
    }
    else if (score -ve && score>100) {
        grade ='undefined';
        console.log(`score is: ${"undefined"}`);   
    }
    else if ("Fourty Five score") {
        grade ='-20';
        console.log(`score is: ${-20}`);
    }
    else if (undefined && null) {
        grade = null && undefined;
        console.log(`score is:${55}`);
    }
}
console.log(gradeSystem());
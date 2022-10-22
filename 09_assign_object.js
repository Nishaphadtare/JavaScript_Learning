
console.log(`Q.create an empty object with name "teacher"`);
let Teacher = {

}

let teacher = {
    nameOfTeacher: "Urmila kadam",
    age: 31,
    city: "Solapur",
    State: "MH",
    Education: "MCA",
    degrees: {
        engineering: `CSC`,
        PHD: `ADV Computing`
    },
    certificates: {

        certificatesLike1: ` "Hacker Rank Participation"`,
        certificatesLike2: `"Certificates in IFC course"`,
        certificatesLike3: ` "Certificates in advance programming"`,
    },
    certificate:{
        
        certificateLike1: ` "Hacker Rank Participation"`,
        certificateLike2: `"Certificates in IFC course"`,
        certificateLike3: ` "Certificates in advance programming"`,
        certificateLike4: 'Certificate in IT Angular Developer',
    },
    details: function () {
        let teacherDetails = ` Total degrees are  : ${this.degrees.engineering}, AND, ${this.degrees.PHD} `;
        return teacherDetails;
    }
}

teacher.certificates.professor= "Professor of Java";
delete teacher.certificates.certificatesLike1
console.log();
console.log(Teacher);

console.log("-------------------------------------------------------------------------");
console.log(`Q.1.Think of all properties that you could add`);
console.log(teacher);
console.log("1.name of teacher:-");
console.log(teacher.nameOfTeacher);
console.log("------------------------------------------------------------------------");
console.log("Q.2.Also include nested object `degrees' like engineering:`CSC`, PHD: `ADV Computing` And few more.");
console.table(teacher.degree);
console.log("------------------------------------------------------------------------");
console.log("Q.3.also add one more nested object'certificates'with his certificates like `Hacker Rank Participation  `.");
console.table(teacher.certificates);

console.log("------------------------------------------------------------------------");
console.log("Q.4. add function as a value which should concat all degrees in step 2, please return as string and log on console with - Teacher degrees are total degrees are`.");
let tDetails = teacher.details();
console.log(teacher.details());
console.log(` Total degrees are = 3`);

console.log("------------------------------------------------------------------------");
console.log("Q.6.modify any existing Property and log complete object on console");
console.log([teacher].values(teacher));

console.log("------------------------------------------------------------------------");
console.log("Q.7.delete any one certificate from object");
console.log(teacher.certificates [`certificatesLike1`]);

console.log("------------------------------------------------------------------------");
console.log("Q.8.add new certificate in nested object-'certificates'");
console.log(teacher.certificates.professor);

console.log("------------------------------------------------------------------------");
console.log("Q.9.log the nested oject on console");
console.log(teacher.certificate);

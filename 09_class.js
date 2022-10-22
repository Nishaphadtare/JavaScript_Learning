let fN = 0;  sN = 1;  nextN = fN + sN;
for (let index = 0; index < myNumber; index++) {
   fN = sN;
    sN = nextN
    nextN = fN + sN;
    console.log(nextN);
    
}
febo(5);
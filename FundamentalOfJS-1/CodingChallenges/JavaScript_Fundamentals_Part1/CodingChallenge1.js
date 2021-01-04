let height_of_Mark;
let height_of_John;
let mass_of_Mark;
let mass_of_John;
let BMI_of_Mark;
let BMI_of_John;
//Formula to Calculate BMI
//BMI = mass / (height * height)

//Test case 1 
mass_of_Mark = 78;
mass_of_John = 95;
height_of_Mark = 1.69;
height_of_John = 1.95;

BMI_of_Mark = mass_of_Mark / (height_of_Mark ** 2);
BMI_of_John = mass_of_John / (height_of_John ** 2);
const markHigherBMI_for_Tc1 = BMI_of_Mark > BMI_of_John;
console.log(markHigherBMI_for_Tc1);



//Test case 2
mass_of_Mark = 95;
mass_of_John = 85;
height_of_Mark = 1.88;
height_of_John = 1.76;

BMI_of_Mark = mass_of_Mark / (height_of_Mark ** 2);
BMI_of_John = mass_of_John / (height_of_John ** 2);
const markHigherBMI_for_Tc2 = BMI_of_Mark > BMI_of_John;
console.log(markHigherBMI_for_Tc2);


export interface Student {
  number: number;
  name: string;
}

export const students: Student[] = [
  { number: 1, name: "Abhilash C" },
  { number: 2, name: "Abinaya M" },
  { number: 3, name: "Abinaya R" },
  { number: 4, name: "Afra R" },
  { number: 5, name: "Archana Sri R A" },
  { number: 6, name: "Ashwitha Murali" },
  { number: 7, name: "Asmi Jasmine A" },
  { number: 8, name: "Dhanin kumaar KR" },
  { number: 9, name: "Dharshan P" },
  { number: 10, name: "Dhaya S" },
  { number: 11, name: "Divyan S" },
  { number: 12, name: "Elayabharathi S" },
  { number: 13, name: "Ghritakesh B" },
  { number: 14, name: "Harini M" },
  { number: 15, name: "Harshini K" },
  { number: 16, name: "Hemanth MS" },
  { number: 17, name: "Jack Titus B" },
  { number: 18, name: "Jeevika B" },
  { number: 19, name: "Karthik V" },
  { number: 20, name: "Keerthana G" },
  { number: 21, name: "Keshava shree S" },
  { number: 22, name: "Kiran A S" },
  { number: 23, name: "Lathika B" },
  { number: 24, name: "Logeshwaran A" },
  { number: 25, name: "Manoj prabhakar T" },
  { number: 26, name: "Medhmitra S" },
  { number: 27, name: "Mithuna R" },
  { number: 28, name: "Mohana sai kana D" },
  { number: 29, name: "Nehha D C" },
  { number: 30, name: "Pavithra S" },
  { number: 32, name: "Pooja Sri S" },
  { number: 33, name: "Priyanka S" },
  { number: 34, name: "Rakshita K G" },
  { number: 35, name: "Ritumika K" },
  { number: 36, name: "Sam Gladson R" },
  { number: 37, name: "Sarah Sybil Singh" },
  { number: 38, name: "Saran S" },
  { number: 40, name: "Shanmathi M" },
  { number: 41, name: "Sharavana Siddesh S" },
  { number: 42, name: "Shivapriya D" },
  { number: 43, name: "Shrinitha Shankar" },
  { number: 44, name: "Shrinithi M" },
  { number: 45, name: "Sneha T" },
  { number: 46, name: "Sree Harith. C" },
  { number: 47, name: "Sri Dharani S" },
  { number: 48, name: "Srihari V" },
  { number: 49, name: "Srinithin R" },
  { number: 50, name: "Sruthi K" },
  { number: 51, name: "Swetha S" },
  { number: 52, name: "Tamizharasan G C" },
  { number: 53, name: "Tharun T" },
  { number: 54, name: "Vaishnavi V M" },
  { number: 55, name: "Varshini D" },
  { number: 56, name: "Vasanth P" },
  { number: 57, name: "Venkatesh G" },
  { number: 58, name: "Vikram Bomman M" },
  { number: 59, name: "Yeshmitha A" },
  { number: 60, name: "Yuvaanesh P" },
];

export const getStudentByNumber = (num: number): Student | undefined => {
  return students.find(s => s.number === num);
};

export const getAvailableStudentNumbers = (): number[] => {
  return students.map(s => s.number);
};

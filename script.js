// const ParentObj = {
//     calAge : function(){
//         console.log(`${this.fname} ${this.lname} ${this.age}`)
//     }
// }

// const childObj = Object.create(ParentObj);
// childObj.fname = "Ash";
// childObj.lname = "yadav";
// childObj.age= 24;

// console.log(childObj);
// // childObj.calAge();

// const childObj1 = Object.create(ParentObj);
// childObj1.fname = "Rahul";
// childObj1.lname = "Jha";
// childObj1.age = 20;

// // childObj1.calAge();
// console.log(childObj1);


// Write a JavaScript function to retrieve all the names of object's own and inherited properties









const calSum ={
    returnSum : function(arr){
        let sum = 0;
        for(let i = 0; i < arr.length;i++){
            sum += arr[i];
        }
        console.log(sum);
    }
}
calSum.returnSum([1,3,5,6,4,4,5,6]);


//Write a JavaScript function to retrieve all the names of object's own and inherited properties.
  
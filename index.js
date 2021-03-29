 const nums = [1, 2, 3, 4, 5, 6, 7, 8,];
  let odd = [];
  let even = [];
 for(let i = 0; i< nums.length; i++ ){
   if(nums[i]%2 == 0){
     //console.log(`${nums[i]} is even`);
     even.push(nums[i]);
   }else{
     //console.log(`${nums[i]} is odd`);
     odd.push(nums[i]);
   }
  
 }
  console.log(even);
  console.log(odd);
 



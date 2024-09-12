let employe=[{
    name:'mayank',
    salary:30000,
    age:21
},{
    name:'ayushi',
    salary:50000,
    age:21

},{
    name:'priya',
    salary:9000,
    age:18
}]
function maxsal(){
    let max=employe[0].salary;
    employe.forEach(element => {
        if(element.salary>max){
            max=element.salary;
        }
        
    });
    return max;
}
function filtersal(){
    let filsal=employe.filter((emp)=>{
        return emp.salary>10000;
    })
    return filsal
}
module.exports={
    maxsal,
    filtersal
}
// Done By Myself

let students = [
    {id: 1,name: "Gokul",age: 21,grade: "A",course: "Full Stack"},
    {id: 2,name: "Bala Murugan",age: 21,grade: "A",course: "Full Stack"},
    {id: 3,name: "Umar Farook",age: 22,grade: "B",course: "Full Stack"},
    {id: 4,name: "Sathirabathi Sivaji",age: 21,grade: "B",course: "Full Stack"},
    {id: 5,name: "Krishnakumar",age: 17,grade: "C",course: "Full Stack"}
]
function addStudents(){
    let Id1=parseInt(prompt("Enter the id : "))
    for(let i=0;i<students.length; i++){
        if(students[i].id==Id1){
            alert("The ID is already occurs")
            return addStudents()
        }
    }
    let username=prompt("Enter the Name : ")
    let userage=parseInt(prompt("Enter the Age : "))
    let usergrade=prompt("Enter the Grade : ")
    let usercourse=prompt("Enter the Course : ")
    let newstudent ={
        id:Id1,
        name:username,
        age:userage,
        grade:usergrade,
        course:usercourse
    }
    console.log("One Student is added and updated sucessfully : ")
    students.push(newstudent)
    console.log(students); 
}
function viewall(){
    console.log(students)
}
function updatestudent(){
    let Id2=parseInt(prompt("Enter the UserId you want to update"))
    let x="true"
    for(let i=0;i<students.length; i++){
        if(students[i].id==Id2){
            students[i].grade=prompt("Enter the Grade : ")
            students[i].course=prompt("Enter the Course : ")
            x="false" 
            console.log(students)
        }  
    }
    if(x=="true"){
        alert("Enter the correct UserId ")
        updatestudent()
    }
}
function deleted(){
    let Id3=parseInt(prompt("Enter the UserId you want to Delete : "))
    let x="true"
    for(let i=0;i<students.length; i++){
        if(students[i].id==Id3){
            delete students[i]
            x="false" 
            console.log(students); 
        }
    }
    if(x=="true"){
        alert("Enter the correct UserId ")
        deleted()
    }
}
function search(){
    let Id4=parseInt(prompt("Enter the UserId you want to Search : "))
    let x="true";
    for(let i=0;i<students.length; i++){
        if(students[i].id==Id4){
            console.log(students[i])
            x=false
        }
    }
    if(x=="true"){
        alert("Enter the correct UserId ")
        search()
    }
}
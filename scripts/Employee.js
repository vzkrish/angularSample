// Function Constructor and IIFE
// Opening bracket ()();
// Then (function(){}))
(function(){
    var Employee = function(empId,empName,empSal){
        this.empId = empId;
        this.empName=empName;
        this.empSal=empSal;
    }

    Employee.prototype.toString = function()
    {
        return this.empId+' : '+this.empName+' : '+this.empSal;
    }
    var krish = new Employee(1011,'Krishnam', 4500000)
    var ram  = new Employee(1012,'Raman', 5500000)
    var pavan  = new Employee(1013,'Pavan Kumar', 6500000)

    var empList = [krish,ram,pavan]
    

    empList.forEach(function(eachEmployee,indx){
            console.log(eachEmployee.toString());
            eachEmployee.toString();
            
})
    var empData = document.getElementById('empData');
    var empBtn = document.getElementById('empDetails');
    empBtn.addEventListener('click',function(){
        empList.forEach(function(eachEmployee,indx){
            console.log(eachEmployee.toString());
            empData.innerHTML = empData.innerHTML + "<br>"+eachEmployee.toString();
    })
});
    

})();
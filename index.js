const employee = {
    streetAddress: "11 Broadway",
    name: "Sam",
  };
  

  function updateEmployeeWithKeyAndValue(obj,key,value){
    const copy = {...obj};
    copy[key] = value;
    return copy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
  obj[key] = value;
  
  return obj;
}

function deleteFromEmployeeByKey(obj, key, value){
  const employeecopy = {...obj}
  delete employeecopy [key];

  return employeecopy;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
  delete obj [key];
  return employee;
}

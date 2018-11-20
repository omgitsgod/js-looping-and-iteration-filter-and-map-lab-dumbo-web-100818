// Code your solution here:
function driversWithRevenueOver(arr, rev) {
return arr.filter(function(driver) {return driver.revenue > rev})
}

function driverNamesWithRevenueOver(arr, rev){
return  driversWithRevenueOver(arr, rev).map(function(driver) {
  return  driver.name
  })
}

function exactMatch(arr, obj) {
  const keyo = Object.keys(obj)[0]
  const valo = obj[keyo]
  return arr.filter(function(driver) {return driver[keyo] === valo})
}

function exactMatchToList(arr, obj) {
return  exactMatch(arr, obj).map(function(driver){ return driver.name})
}

// Created by: Grace S
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

// declare constants
const SALARY_TAXED = 0.1805

/**
 * This function calculates hours and rate
 */
function payClicked () {
  // get user input
  let hours = parseFloat(document.getElementById('hours').value)
  let rate = parseFloat(document.getElementById('rate').value)

  // calculate the pay and the tax
  let total_pay = hours * rate
  let tax = SALARY_TAXED * total_pay
	let total_earned = total_pay - tax 

  // display the results
  document.getElementById('total-earned').innerHTML = "You will be payed $" + total_earned.toFixed(2)
  document.getElementById('tax').innerHTML = "The government will take $" + tax.toFixed(2)
}
import React, { Component } from 'react';
import { isEmptyStatement } from '@babel/types';

const MANDATORY_NAME = "El campo NOMBRE es obligatorio.";
const MANDATORY_BUSINESS_NAME = "El campo nombre empresa es obligatorio.";
const MANDATORY_LAST_NAME = "El campo APELLIDO es obligatorio.";
const NOT_VALID_NID = "N° IDENTIFICACIÓN: El valor ingresado no es numérico.";
const NOT_VALID_NIT = "NIT: El valor ingresado no es numérico.";
const MANDATORY_NID = "El campo N° IDENTIFICACIÓN es obligatorio.";
const MANDATORY_NIT = "El campo NIT es obligatorio.";
const MANDATORY_BIRTH_DATE = "El campo FECHA DE NACIMIENTO es obligatorio.";
const NOT_VALID_BIRTH_DATE = "FECHA DE NACIMIENTO: La fecha ingresada no es válida.";
const MANDATORY_INCOMES = "El campo Ingresos es obligatorio.";
const NOT_VALID_INCOMES = "Ingresos: El valor ingresado no es numérico.";
const NOT_POSITIVE_INCOMES = "Ingresos: El campo ingresos es negativo.";
const INCOMES_TOO_HIGH = "Ingresos: Los ingresos actuales superan el estandar de $100,000,000.";
const MANDATORY_LABORAL_DATE = "El campo Fecha de ingreso laboral es obligatorio.";
const NOT_VALID_LABORAL_DATE = "Fecha de ingreso laboral: La fecha ingresada no es válida.";

export default class Validations extends Component {

    // ======== FIRST LEVEL VALIDATIONS ========
    approveCredit = (obj) => {
        if (parseInt(obj.incomes) >= 800000 && this.yearAndHalf(obj.laboralDate)) {
            if(parseInt(obj.incomes) >= 800000 && parseInt(obj.incomes) < 1000000){
                return { approved: true, credit: 5000000 };
            } else if (parseInt(obj.incomes) >= 1000000 && parseInt(obj.incomes) < 4000000) {
                return { approved: true, credit: 20000000 };
            }
            else if (parseInt(obj.incomes) >= 4000000) {
                return { approved: true, credit: 50000000 };
            }
        } else {
            return { approved: false };
        }
    }

    validateRegistrationForm = (obj) => {
        let vname = this.validateName(obj.name);
        let vlastName = this.validateLastName(obj.lastName);
        let vidNumber = this.validateIDNumber(obj.idNumber);
        let vDate = this.validateBirthDate(obj.date);
        if (!this.fieldIsEmpty(vname)
            || !this.fieldIsEmpty(vlastName)
            || !this.fieldIsEmpty(vidNumber)
            || !this.fieldIsEmpty(vDate)) {
            vname = !this.fieldIsEmpty(vname) ? "\n" + vname : "";
            vlastName = !this.fieldIsEmpty(vlastName) ? "\n" + vlastName : "";
            vidNumber = !this.fieldIsEmpty(vidNumber) ? "\n" + vidNumber : "";
            vDate = !this.fieldIsEmpty(vDate) ? "\n" + vDate : "";
            let messageComplete = "Se han encontrado las siguientes inconsistencias:\n" + vname + vlastName + vidNumber + vDate;
            return { validationsOK: false, message: messageComplete };
        } else {
            return { validationsOK: true }
        }
    }

    validateCreditForm = (obj) => {
        let bname = this.validateBusinessName(obj.name);
        let bnit = this.validateNit(obj.nit);
        let bincomes = this.validateIncomes(obj.incomes);
        let blaboralDate = this.validateLaboralDate(obj.laboralDate);
        if (!this.fieldIsEmpty(bname)
            || !this.fieldIsEmpty(bnit)
            || !this.fieldIsEmpty(bincomes)
            || !this.fieldIsEmpty(blaboralDate)) {
            bname = !this.fieldIsEmpty(bname) ? "\n" + bname : "";
            bnit = !this.fieldIsEmpty(bnit) ? "\n" + bnit : "";
            bincomes = !this.fieldIsEmpty(bincomes) ? "\n" + bincomes : "";
            blaboralDate = !this.fieldIsEmpty(blaboralDate) ? "\n" + blaboralDate : "";
            let messageComplete = "Se han encontrado las siguientes inconsistencias:\n" + bname + bnit + bincomes + blaboralDate;
            return { validationsOK: false, message: messageComplete };
        } else {
            return { validationsOK: true }
        }
    }

    // ======== SECOND LEVEL VALIDATIONS ========

    validateLaboralDate = (date) => {
        if (!this.fieldIsEmpty(date)) {
            if (this.dateIsBiggerThanToday(date)) {
                return "";
            } else {
                return NOT_VALID_LABORAL_DATE;
            }
        } else {
            return MANDATORY_LABORAL_DATE;
        }
    }

    validateIncomes = (number) => {
        if (!this.fieldIsEmpty(number)) {
            if (this.isNumericValue(number)) {
                if (number > 0) {
                    if (number < 100000000) {
                        return "";
                    } else {
                        return INCOMES_TOO_HIGH;
                    }
                } else {
                    return NOT_POSITIVE_INCOMES;
                }
            } else {
                return NOT_VALID_INCOMES;
            }
        } else {
            return MANDATORY_INCOMES;
        }
    }

    validateName = (string) => {
        if (!this.fieldIsEmpty(string)) {
            return "";
        } else {
            return MANDATORY_NAME;
        }
    }

    validateBusinessName = (string) => {
        if (!this.fieldIsEmpty(string)) {
            return "";
        } else {
            return MANDATORY_BUSINESS_NAME;
        }
    }

    validateNit = (number) => {
        if (!this.fieldIsEmpty(number)) {
            if (this.isNumericValue(number)) {
                return "";
            } else {
                return NOT_VALID_NIT;
            }
        } else {
            return MANDATORY_NIT;
        }
    }

    validateLastName = (string) => {
        if (!this.fieldIsEmpty(string)) {
            return "";
        } else {
            return MANDATORY_LAST_NAME;
        }
    }

    validateIDNumber = (number) => {
        if (!this.fieldIsEmpty(number)) {
            if (this.isNumericValue(number)) {
                return "";
            } else {
                return NOT_VALID_NID;
            }
        } else {
            return MANDATORY_NID;
        }
    }

    validateBirthDate = (date) => {
        if (!this.fieldIsEmpty(date)) {
            if (this.plus18(date)) {
                return "";
            } else {
                return NOT_VALID_BIRTH_DATE;
            }
        } else {
            return MANDATORY_BIRTH_DATE;
        }
    }

    plus18 = (date) => {
        return this.validateAgeAgainstActualDate(date, 18);
    }

    // ======== THIRD LEVEL VALIDATIONS ========

    fieldIsEmpty = (value) => {
        if (value != null) {
            if (value.length == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    isNumericValue = (value) => {
        return !isNaN(value);
    }

    validateAgeAgainstActualDate = (date, age) => {
        var birthDateString = date.split('-');
        // birth date conversion to Date Object
        var birthDate = new Date(birthDateString[2], birthDateString[1] - 1, birthDateString[0]);
        var actualDate = new Date();
        // get birth and actual dates month and days
        var birthMonth = birthDate.getMonth() + 1;
        var birthDay = birthDate.getDate();
        var actualMonth = actualDate.getMonth() + 1;
        var actualDay = actualDate.getDate();
        // Calculation of actual age
        var diff = actualDate.getFullYear() - birthDate.getFullYear();
        if (birthMonth > actualMonth) {
            diff--;
        } else {
            if (actualMonth == birthMonth) {
                if (birthDay > actualDay) {
                    diff--;
                }
            }
        }
        return diff >= age;
    }

    dateIsBiggerThanToday = (date) => {
        var toValidate = date.split('-');
        //
        var toValidateDate = new Date(toValidate[2], toValidate[1] - 1, toValidate[0]);
        var actualDate = new Date();
        //
        var month = toValidateDate.getMonth() + 1;
        var day = toValidateDate.getDate();
        var actualMonth = actualDate.getMonth() + 1;
        var actualDay = actualDate.getDate();

        if (toValidateDate.getFullYear() < actualDate.getFullYear()) {
            return true;
        } else if (toValidateDate.getFullYear() == actualDate.getFullYear()) {
            if (month < actualMonth) {
                return true;
            } else if (month == actualMonth) {
                if (day < actualDay) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    yearAndHalf = (date) => {
        var toValidate = date.split('-');
        const date1 = new Date(toValidate[2], toValidate[1] - 1, toValidate[0]);
        const date2 = new Date();
        const diffTime = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 547;
    }

}
/**
 * Created by woexpect
 */
import 'react-native';
import React from 'react';
import Validations from '../src/Components/LogicalComponents/Validations';

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

const validations = new Validations();

test("Validate mandatory name", () => {
    expect(validations.validateName("")).toBe(MANDATORY_NAME);
});

test("Validate mandatory name", () => {
    expect(validations.validateName("Johan")).toBe("");
});

test("Validate mandatory last name", () => {
    expect(validations.validateLastName("")).toBe(MANDATORY_LAST_NAME);
});

test("Validate mandatory last name", () => {
    expect(validations.validateLastName("Peña")).toBe("");
});

test("Validate mandatory business name", () => {
    expect(validations.validateBusinessName("")).toBe(MANDATORY_BUSINESS_NAME);
});

test("Validate mandatory business name", () => {
    expect(validations.validateBusinessName("Accenture")).toBe("");
});

test("Validate Invalid id number", () => {
    expect(validations.validateIDNumber("asd")).toBe(NOT_VALID_NID);
});

test("Validate valid id number", () => {
    expect(validations.validateIDNumber("1026581622")).toBe("");
});

test("Validate invalid incomes", () => {
    expect(validations.validateIncomes("asd")).toBe(NOT_VALID_INCOMES);
});

test("Validate valid incomes", () => {
    expect(validations.validateIncomes(800000)).toBe("");
});

test("Validate mandatory birth date", () => {
    expect(validations.validateBirthDate("")).toBe(MANDATORY_BIRTH_DATE);
});

test("Validate mandatory and valid birth date", () => {
    expect(validations.validateBirthDate("02-02-1995")).toBe("");
});

test("Validate Invalid birth date", () => {
    //Teniendo en cuenta que estamos en el 2019
    expect(validations.validateBirthDate("02-02-2005")).toBe(NOT_VALID_BIRTH_DATE);
});

test("Validate mandatory laboral date", () => {
    expect(validations.validateLaboralDate("")).toBe(MANDATORY_LABORAL_DATE);
});

test("Validate mandatory and valid laboral date", () => {
    expect(validations.validateLaboralDate("02-02-1995")).toBe("");
});

test("Validate Invalid laboral date", () => {
    //Teniendo en cuenta que estamos en el 2019
    expect(validations.validateLaboralDate("12-30-2018")).toBe(NOT_VALID_LABORAL_DATE);
});

test("Not approved Creddit by minimal incomes", () => {
    //Teniendo en cuenta que estamos en el 2019
    let obj = {
        name: "construimosa",
        nit: 900422618,
        incomes: 799000,
        laboralDate: "02-02-1995"
    }
    let response = { approved: false };
    expect(validations.approveCredit(obj)).toEqual(response);
});

test("Not approved Creddit by minimal not valid date", () => {
    //Teniendo en cuenta que estamos en el 2019
    let obj = {
        name: "construimosa",
        nit: 900422618,
        incomes: 4000000,
        laboralDate: "02-02-2019"
    }
    let response = { approved: false };
    expect(validations.approveCredit(obj)).toEqual(response);
});

test("Approved Creddit with minimal incomes", () => {
    //Teniendo en cuenta que estamos en el 2019
    let obj = {
        name: "construimosa",
        nit: 900422618,
        incomes: 800000,
        laboralDate: "02-02-1995"
    }
    let response = { approved: true, credit: 5000000 };
    expect(validations.approveCredit(obj)).toEqual(response);
});

test("Approved Creddit with medium incomes", () => {
    //Teniendo en cuenta que estamos en el 2019
    let obj = {
        name: "construimosa",
        nit: 900422618,
        incomes: 1500000,
        laboralDate: "02-02-1995"
    }
    let response = { approved: true, credit: 20000000 };
    expect(validations.approveCredit(obj)).toEqual(response);
});

test("Approved Creddit with high incomes", () => {
    //Teniendo en cuenta que estamos en el 2019
    let obj = {
        name: "construimosa",
        nit: 900422618,
        incomes: 4000000,
        laboralDate: "02-02-1995"
    }
    let response = { approved: true, credit: 50000000 };
    expect(validations.approveCredit(obj)).toEqual(response);
});
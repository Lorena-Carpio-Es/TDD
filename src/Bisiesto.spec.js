import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
    it("El año 4 debería considerarse como año bisiesto", () => {
      expect(esBisiesto(4)).toEqual(true);
    });

    it("El año 5 no debería considerarse como año bisiesto", () => {
        expect(esBisiesto(5)).toEqual(false);
    });

    it("El año 1700 no debería considerarse como año bisiesto", () => {
        expect(esBisiesto(1700)).toEqual(false);
    });

    it("El año 1800 no debería considerarse como año bisiesto", () => {
        expect(esBisiesto(1800)).toEqual(false);
    });

    it("El año 1900 no debería considerarse como año bisiesto", () => {
        expect(esBisiesto(1900)).toEqual(false);
    });

    it("El año 2000 debería considerarse como año bisiesto", () => {
        expect(esBisiesto(2000)).toEqual(true);
    });

    it("El año 2100 no debería considerarse como año bisiesto", () => {
        expect(esBisiesto(2100)).toEqual(false);
    });

    it("El año 2008 debería considerarse como año bisiesto", () => {
        expect(esBisiesto(2008)).toEqual(true);
    });

    it("El año 2012 debería considerarse como año bisiesto", () => {
        expect(esBisiesto(2012)).toEqual(true);
    });

    it("El año 2016 debería considerarse como año bisiesto", () => {
        expect(esBisiesto(2016)).toEqual(true);
    });
});

  


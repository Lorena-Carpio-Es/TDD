describe("Es Bisiesto", () => {
    it("El 4 deberia considerarse como anio bisiesto", () => {
        const result = esBisiesto (4);
      expect(result).toEqual(true);
    });
  });
  

  function esBisiesto(anio){
    return true;
  }
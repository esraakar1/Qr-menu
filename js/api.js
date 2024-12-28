// fetch ile db.json dan veriler çekilir 
export const fetchMenu = async () => {
    const res = await fetch("../db.json");

     const data = await res.json();  //yanit json formatına dönüştürüldü
    
     return data;
};
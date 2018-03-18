export class DomainService{
    getCountries():String[] {
        const countries:String[]=[];
        countries.push("India");
        countries.push("Australia");
        countries.push("China");
        countries.push("Russia");
        countries.push("Thailand");
        countries.push("Netherland");
        countries.push("Germany");
        countries.push("England");
        countries.push("USA");
        return countries;
    }

    getGenders(){
        const genders:String[]=[];
        genders.push("Male");
        genders.push("Female");
        return genders;
    }
}
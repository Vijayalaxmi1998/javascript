function Person(){
    this.name="vijaya",
    this.age=25,
    this.education="M.Sc";
    this.greet=function(){
        return `Hii ${this.name}`
    }
}

const person=new Person();
console.table(person.greet());
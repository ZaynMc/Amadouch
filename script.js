var personnes =[
    {
    prenom: "Jules",
     Nom: "Ferry",
     age: 50,
 
 informarion: function(){
     return 'je suis ' +this.prenom + ' ' + this.Nom + ' ' + "j'ai " + this.age + ' ans';
 }
},

 {
    prenom: "gerard",
     Nom: "briaud",
     age: 30,
 
 informarion: function(){
     return 'je suis ' +this.prenom + ' ' + this.Nom + ' ' + "j'ai " + this.age + ' ans';
 }
 }
];

  function afficher(){
     personnes.forEach(element => console.log(element.informarion()));
  }

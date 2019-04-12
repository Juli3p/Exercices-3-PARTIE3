// Je récupère mon Id 'password', 'confirmPassWord','verify' en créant des variables
var passWord = document.getElementById('password');
var confirmPassWord = document.getElementById('confirmPassword');
var veriFy = document.getElementById('verify');
// Je creer une fonction qui permet de changer la couleur en fonction de la valeur saisi dans le champs
// Pour appliquer cette fonction j'utilise l'évènement 'click'
veriFy.addEventListener('click', function(){
// Si le mot de passe est différent de la confirmation de mdp alors les bordure sont mis en rouge
  if (passWord.value != confirmPassWord.value) {
  passWord.style.borderColor = 'red';
  confirmPassWord.style.borderColor = 'red';
  }
  // Sinon elle se mettent en vert
  else {
    passWord.style.borderColor = 'green';
    confirmPassWord.style.borderColor = 'green';
  }
}
);

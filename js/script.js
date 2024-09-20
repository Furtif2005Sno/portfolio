// Fonction pour calculer l'âge à partir de la date de naissance
function calculateAge(birthdate) {
  const today = new Date();
  const parts = birthdate.split(' ');
  const monthNames = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthIndex = monthNames.indexOf(parts[1]);
  const birthDate = new Date(`${parts[2]}-${monthIndex + 1}-${parts[0]}`);
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

// Récupérer la balise span qui contient la date de naissance
const birthdateSpan = document.getElementById('birthdate');
// Vérifier que la balise existe avant de procéder
if (birthdateSpan) {
  // Récupérer la balise span qui va afficher l'âge calculé
  const ageSpan = document.getElementById('age');
  
  if (ageSpan) {
    // Calculer l'âge au chargement de la page
    const age = calculateAge(birthdateSpan.textContent);
    // Afficher l'âge calculé
    ageSpan.textContent = age;
  } else {
    console.error("L'élément avec l'ID 'age' n'existe pas.");
  }
} else {
  console.error("L'élément avec l'ID 'birthdate' n'existe pas.");
}


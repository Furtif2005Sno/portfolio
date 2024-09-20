// Fonction pour calculer l'âge à partir de la date de naissance
function calculateAge(birthdate) {
  const today = new Date();
  const parts = birthdate.split(' ');
  
  // Liste des mois avec leur abréviation en français
  const monthNames = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = parseInt(parts[0]);  // Récupérer le jour (ex: 29)
  const monthIndex = monthNames.indexOf(parts[1]);  // Trouver l'index du mois (ex: Mai = 4)
  const year = parseInt(parts[2]);  // Récupérer l'année (ex: 2005)

  // Créer une date de naissance à partir des parties
  const birthDate = new Date(year, monthIndex, day);

  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  
  // Ajuster l'âge si la date d'anniversaire n'est pas encore passée cette année
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
    const age = calculateAge(birthdateSpan.textContent.trim());
    // Afficher l'âge calculé
    ageSpan.textContent = age;
  } else {
    console.error("L'élément avec l'ID 'age' n'existe pas.");
  }
} else {
  console.error("L'élément avec l'ID 'birthdate' n'existe pas.");
}

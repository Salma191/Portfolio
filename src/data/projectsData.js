import bennour from '../assets/png/Bennour.PNG'
import accueil from '../assets/png/acceuil.png'
import python from '../assets/png/pythonprojet.PNG'
import location from '../assets/png/location.jpg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Application web pour la gestion des habilitations universitaires',
        projectDesc: "Réalisation d'une application web pour les demandes de candidature des professeurs-chercheurs.",
        tags: ['Laravel', 'HTML' ,'MySQL', 'Ajax'],
        image: accueil
    },
    {
        id: 2,
        projectName: 'Application web et mobile pour localiser les pharmacies',
        projectDesc: "Réalisation d'une application web et mobile pour localiser les pharmacies les plus proches selon la ville, la zone et la garde.",
        tags: ['React', 'NodeJS','MongoDB', 'Express', 'React Native'],
        image: location
    },
    {
        id: 3,
        projectName: 'Site web pour la Faculté Polydisciplinaire Sidi Bennour',
        projectDesc: "Réalisation d'un site web qui offre un espace en ligne pour les étudiants, enseignants et administrateurs de la faculté pour accéder à des informations importantes, des ressources et des services en ligne.",
        tags: ['Wordpress'],
        image: bennour
    },
    {
        id: 4,
        projectName: 'Optimisation de la distribution de carburants',
        projectDesc: "Développement d'une interface graphique afin de trouver le trajet le plus court pour distribuer de carburants Shell. Optimisation de la distribution de carburants Shell grâce à une interface graphique de planification d'itinéraires",
        tags: ['Python'],
        image: python
    },
    
]


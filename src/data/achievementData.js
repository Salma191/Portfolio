import wordpress from '../assets/png/Wordpress.PNG'
import python from '../assets/png/Python.PNG'
import javafx from '../assets/png/javafx.jpg'

export const achievementData = {
    bio : "",
    achievements : [
        {
            id : 1,
            title : 'Creer un site modern et professionnel avec WordPress 5',
            details : 'A WordPress course from OpenClassroms',
            date : 'Mars 13, 2023',
            field : 'Design',
            image : wordpress
        },
        {
            id : 2,
            title : 'Python Fudamentals for Beginners',
            details : 'A Python course from Great Learning',
            date : 'Fevrier 02, 2023',
            field : 'Coding',
            image : python
        },
        {
            id : 3,
            title : 'JavaFX Java GUI Design',
            details : 'A JavaFX course from Mind Luster',
            date : 'Mai 19, 2023',
            field : 'Design',
            image : javafx
        },
    ]
}

### September 21th, 2024:
    Talked with Dr. Kuzmin today about Submitty and how the autograding would work: Can we just just use the submitty autograder or make our own. 
    However, it wasn't very hopeful. This project is more complicated than we thought, specfically with the backend. There are many different moving parts in the autograder such as Docker images, workers, config files, etc. Dr. Kuzmin recommends that:
        1. Rip the Autograder (How?)
            a. Create an automatic Autograder ripper?
        2. Investigate Autograder
            a. VERY IMPORTANT TO KEEP OUR OWN DOCUMENTATION
            b. Figure out what aspects of the autograder we don't need

        3. Speak with Network Programming and Distributed Algorithms
        4. Figure out which classes to support (Initially probably CS1 and DS)
        5. Find all relevant autograder files
        

### September 25th, 2024
    I have been charged with making a database to store information about assignments (Issue: https://github.com/S-I-F-T/SIFT/issues/3). I will also be creating an API to retrieve assignments course/courses, Assignment name, potentially professor, and the submitty configuration files for this assignment.
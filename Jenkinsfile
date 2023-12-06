pipeline {
    agent any
    

    stages{
        stage('Pull GitHub Repository') {
            steps {
            // Get code from GitHub Repository
            git branch: 'main', url: 'https://github.com/vatsal-dhama/spe_final_project.git'
            }
        }

        stage('Pushing docker images using Docker') {
            steps {
                sh 'docker-compose -f docker-compose.yml build',
                sh 'docker-compose -f docker-compose.yml push'
            }
        }
    }
}
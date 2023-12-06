pipeline {
    agent any
    

    stages{
        stage('Pull GitHub Repository') {
            steps {
            // Get code from GitHub Repository
            git branch: 'main', url: 'https://github.com/vatsal-dhama/spe_final_project.git'
            }
        }

        stage('login in docker hub') {
            steps {
                script{
                    withCredentials([usernamePassword(credentialsId: 'dockerhubconnect', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        sh 'docker login -u ' +USERNAME +' -p ' +PASSWORD
                    }
                }
            }
        }
        stage('Pushing docker images using Docker') {
            steps {
                sh '''
                    docker --version
                    docker-compose --version
                    docker-compose -f docker-compose.yml build
                    docker-compose -f docker-compose.yml push
                '''
            }
        }
    }
}
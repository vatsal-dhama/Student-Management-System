pipeline {
    agent any
    
    environment {
        registry = 'shubhanshu1902/spe_major_project'
        registryCredential = 'dockerhubconnect'
        dockerImage = ''
    }

    stages{
        stage('Pull GitHub Repository') {
            steps {
            // Get code from GitHub Repository
            git branch: 'main', url: 'https://github.com/vatsal-dhama/spe_final_project.git'
            }
        }

        stage('Creating Image using Docker') {
            steps {
                script {
                    dockerImage = "docker build ./Database"
                }
            }
        }
    }
}
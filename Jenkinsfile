pipeline {
    agent any
    environment {
        backend = 'shubhanshu1902/spe_backend' // Specify your backend Docker image name/tag
        frontend = 'shubhanshu1902/spe_frontend' // Specify your frontend Docker image name/tag
        database = 'shubhanshu1902/spe_database' // Specify the MySQL Docker image
        mysql = 'mysql:8'
        MYSQL_PORT = '3306'
        docker_image = ''
    }

    stages{
        stage('Stage 0: Pull MySQL Image') {
            steps {
                echo 'Pulling MySQL image from DockerHub'
                script {
                    docker.withRegistry('', 'dockerhubconnect') {
                        docker.image("${mysql}").pull()
                    }
                }
            }
        }

        stage('Stage 1: Pull GitHub Repository') {
            steps {
            // Get code from GitHub Repository
            git branch: 'main', url: 'https://github.com/vatsal-dhama/spe_final_project.git'
            }
        }

        stage('Stage 2: Build Database Docker Image') {
            steps {
                echo 'Building backend Docker image'
                dir('Database')
                {
                    sh "docker build -t $database ."
                }
            }
        }

        stage('Stage 3: Build backend Docker Image') {
            steps {
                echo 'Building backend Docker image'
                dir('backend')
                {
                    sh "docker build -t $backend ."
                }
            }
        }

        stage('Stage 4: Build frontend Docker image') {
            steps {
                echo 'Building frontend Docker image'
                dir('frontend') {
                    echo 'Changing to frontend directory'
                    sh "docker build -t $frontend ."
                }
            }
        }

        stage('Stage 5: Push Database Docker image to DockerHub') {
            steps {
                echo 'Pushing backend Docker image to DockerHub'
                script {
                    docker.withRegistry('', 'dockerhubconnect') {
                        sh 'docker push $database'
                    }
                }
            }
        }

        stage('Stage 6: Push backend Docker image to DockerHub') {
            steps {
                echo 'Pushing backend Docker image to DockerHub'
                script {
                    docker.withRegistry('', 'dockerhubconnect') {
                        sh 'docker push $backend'
                    }
                }
            }
        }

        stage('Stage 7: Push frontend Docker image to DockerHub') {
            steps {
                echo 'Pushing backend Docker image to DockerHub'
                script {
                    docker.withRegistry('', 'dockerhubconnect') {
                        sh 'docker push $frontend'
                    }
                }
            }
        }
        
        stage('Stage 8: Clean docker images') {
            steps {
                script {
                    sh 'docker rmi mysql'
                    sh 'docker rmi $database'
                    sh 'docker rmi $backend'
                    sh 'docker rmi $frontend' 
                }
            }
        }

        // stage('login in docker hub') {
        //     steps {
        //         script{
        //             withCredentials([usernamePassword(credentialsId: 'dockerhubconnect', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
        //                 sh 'docker login -u ' +USERNAME +' -p ' +PASSWORD
        //             }
        //         }
        //     }
        // }
        // stage('Pushing docker images using Docker') {
        //     steps {
        //         sh '''
        //             docker --version
        //             docker-compose --version
        //             docker-compose -f docker-compose.yml build
        //             docker-compose -f docker-compose.yml push
        //         '''
        //     }
        // }
    }
}
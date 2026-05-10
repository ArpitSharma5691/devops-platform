pipeline {

    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/ArpitSharma5691/devops-platform'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t arpitsharma01/devops-dashboard .'
            }
        }

        stage('Push Docker Image') {
            steps {
                bat 'docker push arpitsharma01/devops-dashboard'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f k8s/'
            }
        }
    }
}
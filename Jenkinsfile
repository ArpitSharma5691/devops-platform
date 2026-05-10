pipeline {

    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t arpitsharma01/devops-dashboard .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f k8s/'
            }
        }
    }
}
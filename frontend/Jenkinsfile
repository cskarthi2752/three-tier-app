pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t frontend-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker rm -f frontend-app || true
                docker run -d --name frontend-app -p 80:80 frontend-app
                '''
            }
        }
    }
}

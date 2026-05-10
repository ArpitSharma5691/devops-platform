terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
    }
  }
}

provider "docker" {}

resource "docker_image" "dashboard" {
  name = "arpitsharma01/devops-dashboard"
}

resource "docker_container" "dashboard_container" {
  image = docker_image.dashboard.image_id
  name  = "devops-dashboard"

  ports {
    internal = 3000
    external = 3000
  }
}
# devops-training
 ![Application Components Overview](./Diagramme%20vierge.png)

 1. Development Phase
Push Code: Developers push code to a source code repository GitHub .
Launch CI Pipeline: Once code is pushed, a Continuous Integration (CI) pipeline is triggered. This involves:
Running automated  dynamic tests.
 

2. CI/CD Pipeline
The pipeline includes separate build stages for:
Back-end: A Spring Boot application  
Front-end: An Angular application  
After the build:
Docker Images: The resulting artifacts are containerized using Docker.
Push Images: These images are pushed to a Docker registry.


3. Continuous Deployment (CD)
CD Pipeline: A CD pipeline, likely orchestrated by a tool like ArgoCD  , pulls the latest changes.
Sync Deployment: Updates are synchronized with the Kubernetes cluster to ensure the deployment reflects the latest state.


4. Kubernetes Cluster
The Kubernetes cluster manages the deployment and scaling of the application:

Deployment: Specifies the desired state for application pods.
Pods: Contain containers created from the Docker images.
ConfigMap: Used for managing configuration data.
Secrets: Store sensitive information (e.g., API keys, credentials).


5. Service Exposure
NodePort Service: Exposes the application to the outside world, enabling clients to access the service.


6. User Interaction
Clients access the deployed application through the exposed service endpoint.

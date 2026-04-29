export const projects = {
    stackwatch: {
      title: 'StackWatch',
      type: 'Full Stack Monitoring Dashboard',
      status: 'Active',
      stack: ['React', 'Node.js', 'Docker', 'NGINX', 'AWS', 'Terraform'],
      repo: 'https://github.com/Jameboyyy/StackWatch',
      demo: 'http://184.169.244.68/',
      overview:
        'Built a system monitoring dashboard that collects CPU, memory, and disk data from a Node API and displays live metrics in a React UI.',
      architecture:
        'React frontend → NGINX reverse proxy → Node/Express API → systeminformation metrics',
      devops:
        'Containerized services with Docker, deployed to AWS EC2, and provisioned infrastructure with Terraform.',
      features: [
        'Live polling every 5 seconds',
        'Threshold-based alerts',
        'Dockerized frontend and backend',
        'Stable AWS deployment with Elastic IP',
      ],
    },
  
    spacefinder: {
      title: 'SpaceFinder',
      type: 'React Native Location Platform',
      status: 'In Progress',
      stack: ['React Native', 'Supabase', 'Azure', 'Bitbucket', 'Jira'],
      repo: 'https://bitbucket.org/jameboyyy/spacefinder',
      demo: '',
      overview:
        'Building a mobile platform to help users discover productive third spaces through search, filtering, maps, and recommendations.',
      architecture:
        'React Native mobile app → Supabase backend → location/search data layer',
      devops:
        'Using structured project planning with Jira/Bitbucket and planning cloud deployment workflows.',
      features: [
        'Search and filtering',
        'Map-based discovery',
        'Personalized recommendations',
        'Scalable third-space data model',
      ],
    },
  
    gitops: {
      title: 'GitOps Pipeline',
      type: 'Kubernetes Deployment Pipeline',
      status: 'Completed',
      stack: ['GitLab CI/CD', 'Docker', 'ECR', 'EKS', 'Argo CD', 'Kustomize'],
      repo: 'https://gitlab.com/wgu-gitlab-environment/student-repos/jcadav4/d784-continuous-integration-and-continuous-delivery',
      demo: '',
      overview:
        'Completed a hands-on GitOps deployment walkthrough for a two-service application, focusing on how CI/CD, container images, Kubernetes manifests, and Argo CD work together.',
      architecture:
        'GitLab CI/CD → Docker images → Amazon ECR → Kubernetes manifests → Argo CD → AWS EKS',
      devops:
        'Worked through the deployment flow, reviewed pipeline stages, understood how images are promoted through ECR, and documented how Argo CD syncs Kubernetes configuration from Git.',
      features: [
        'Reviewed frontend and backend container workflow',
        'Mapped CI/CD stages from build to deployment',
        'Worked with Kubernetes manifests and Kustomize structure',
        'Studied GitOps synchronization through Argo CD',
      ],
    },
  }
export const projects = {
  stackwatch: {
    title: 'StackWatch',
    type: 'Cloud Monitoring & Observability Platform',
    status: 'Completed',
    stack: [
      'AWS EC2',
      'Terraform',
      'Docker',
      'Prometheus',
      'Grafana',
      'Node.js',
      'React',
    ],
    repo: 'https://github.com/Jameboyyy/StackWatch',
    demo: 'http://184.169.244.68/',
    overview:
      'Built and deployed a cloud-hosted monitoring platform for collecting and visualizing system health and performance metrics.',
    architecture:
      'React frontend → Node.js API → Prometheus → Grafana, containerized with Docker and deployed on AWS EC2',
    devops:
      'Provisioned AWS infrastructure with Terraform, containerized application and monitoring services with Docker Compose, and configured Prometheus and Grafana for observability.',
    features: [
      'Provisioned AWS EC2 infrastructure with Terraform, including security groups and Elastic IP',
      'Containerized frontend, backend, Prometheus, and Grafana services with Docker Compose',
      'Configured Prometheus metric collection and Grafana monitoring dashboards',
      'Implemented threshold-based system health monitoring in the React frontend',
    ],
  },

  activeDirectory: {
    title: 'Windows Server Active Directory Homelab',
    type: 'Windows Systems Administration',
    status: 'In Progress',
    stack: [
      'Windows Server',
      'Active Directory',
      'DNS',
      'Group Policy',
      'PowerShell',
    ],
    repo: '',
    demo: '',
    overview:
      'Building a Windows Server homelab to practice centralized identity management, DNS, Group Policy, permissions, and Windows domain administration.',
    architecture:
      'Windows Server Domain Controller → Active Directory/DNS → Windows 11 domain clients',
    devops:
      'Using PowerShell to automate administrative tasks including bulk user creation, group assignments, and Active Directory management.',
    features: [
      'Configured Windows Server with separate NAT and internal network interfaces',
      'Assigned static addressing and DNS configuration for the private Active Directory network',
      'Configured the server for deployment as an Active Directory domain controller',
      'Building toward domain-joined Windows clients, Group Policy, SMB permissions, and PowerShell automation',
    ],
  },

  azureInfrastructure: {
    title: 'Azure Cloud Infrastructure Homelab',
    type: 'Cloud Infrastructure & Networking',
    status: 'Completed',
    stack: [
      'Microsoft Azure',
      'Azure CLI',
      'VNets',
      'NSGs',
      'Private DNS',
      'Azure Storage',
      'Log Analytics',
    ],
    repo: '',
    demo: '',
    overview:
      'Built a segmented Azure environment to practice cloud networking, access control, private connectivity, storage security, and monitoring.',
    architecture:
      'Azure VNet → segmented subnets → NSGs → private endpoints → Azure services',
    devops:
      'Configured Azure resources through the Azure portal and CLI while applying network segmentation, private connectivity, and infrastructure security concepts.',
    features: [
      'Designed a VNet with separate web, management, and private subnets',
      'Configured Network Security Groups and subnet-level access controls',
      'Implemented private endpoints, service endpoints, and Private DNS',
      'Restricted Azure Storage access using network controls',
      'Configured App Service, Log Analytics, and Recovery Services resources',
    ],
  },

  linuxHomelab: {
    title: 'Linux Systems Administration & Automation Homelab',
    type: 'Linux Systems Administration',
    status: 'In Progress',
    stack: [
      'Rocky Linux',
      'Debian',
      'Ansible',
      'Bash',
      'SSH',
      'systemd',
      'firewalld',
    ],
    repo: '',
    demo: '',
    overview:
      'Building a multi-system Linux homelab for hands-on practice with Linux administration, networking, services, security, and automation.',
    architecture:
      'Rocky Linux cloud server + Debian Raspberry Pi → SSH administration → services and automation',
    devops:
      'Using Bash and Ansible to develop repeatable administration workflows across Linux systems.',
    features: [
      'Administered users, groups, permissions, packages, and system services',
      'Configured and troubleshot SSH access and Linux networking',
      'Worked with systemd services and firewalld',
      'Configured a Raspberry Pi as a self-hosted Linux server',
      'Deployed network services including Pi-hole, Tailscale, and Samba',
    ],
  },

  gitops: {
    title: 'GitOps Kubernetes Deployment Pipeline',
    type: 'Kubernetes & CI/CD',
    status: 'Completed',
    stack: [
      'Kubernetes',
      'GitLab CI/CD',
      'Docker',
      'Amazon ECR',
      'Amazon EKS',
      'Argo CD',
      'Kustomize',
    ],
    repo:
      'https://gitlab.com/wgu-gitlab-environment/student-repos/jcadav4/d784-continuous-integration-and-continuous-delivery',
    demo: '',
    overview:
      'Completed a hands-on GitOps deployment project for a two-service application, connecting CI/CD, container registries, Kubernetes, and declarative deployment workflows.',
    architecture:
      'GitLab CI/CD → Docker images → Amazon ECR → Kubernetes manifests → Argo CD → Amazon EKS',
    devops:
      'Worked through a GitOps deployment workflow using GitLab CI/CD for container builds, ECR for image storage, Kubernetes manifests and Kustomize for configuration, and Argo CD for declarative deployment to EKS.',
    features: [
      'Worked with frontend and backend Docker container workflows',
      'Mapped CI/CD stages from application build through deployment',
      'Worked with Kubernetes manifests and Kustomize configuration',
      'Used Amazon ECR as the container image registry',
      'Studied declarative GitOps synchronization with Argo CD and EKS',
    ],
  },

  acebarbershopgg: {
    title: 'acebarbershop.gg',
    type: 'Production Client Website',
    status: 'Completed',
    stack: [
      'Next.js',
      'JavaScript',
      'Sanity CMS',
      'Vercel',
    ],
    repo: 'https://github.com/Jameboyyy/Ace-BarberShop',
    demo: 'https://www.acebarbershopgg.com/',
    overview:
      'Built and deployed a production website for a local barbershop, improving its online presence and providing customers with access to services, pricing, and online booking.',
    architecture:
      'Next.js → Sanity CMS → Vercel',
    devops:
      'Configured Vercel continuous deployment to automatically build and deploy changes from the Git repository.',
    features: [
      'Built a responsive multi-page website with Next.js',
      'Integrated Sanity CMS for content management',
      'Created service, pricing, contact, and gallery experiences',
      'Integrated Acuity Scheduling for online appointment booking',
      'Configured continuous deployment through Vercel',
    ],
  },
};
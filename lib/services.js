export const services = [
  {
    slug: 'managed-it-services',
    icon: 'shield',
    name: 'Managed IT Services (MSP)',
    short: 'Managed IT',
    title: 'Managed IT Services & MSP Support',
    metaDescription:
      'Proactive managed IT services: 24/7 monitoring, patching, endpoint security, backup and a responsive help desk for one predictable monthly fee.',
    summary:
      'Your outsourced IT department. We monitor, patch, secure and support every device and user, so problems get fixed before they slow you down.',
    intro:
      'Architech Systems acts as your complete IT department, or as an extension of the team you already have. We take ownership of the day-to-day: watching your systems around the clock, keeping everything patched and secure, and giving your staff a help desk that answers fast and fixes things the first time.',
    features: [
      { t: '24/7 monitoring & alerting', d: 'Remote monitoring of servers, workstations and network gear with automated remediation.' },
      { t: 'Help desk & user support', d: 'Fast, friendly support by ticket, email or phone, with clear response-time commitments.' },
      { t: 'Patch & update management', d: 'OS and third-party patching on a tested schedule that keeps you secure without breaking things.' },
      { t: 'Endpoint security', d: 'Managed EDR, antivirus, disk encryption and MFA rollout across every device.' },
      { t: 'Backup & disaster recovery', d: 'Automated, verified backups with documented recovery plans and regular restore tests.' },
      { t: 'IT strategy & vCIO', d: 'Quarterly business reviews, budgeting and a technology roadmap aligned to your goals.' },
    ],
    outcomes: ['Predictable monthly cost', 'Less downtime', 'Stronger security posture', 'One accountable partner'],
    faqs: [
      { q: 'What does a managed service provider (MSP) do?', a: 'An MSP takes ongoing responsibility for your IT: monitoring, maintenance, security, backups and user support, usually for a flat monthly fee per user or device. You get a full IT team without hiring one.' },
      { q: 'How is managed IT priced?', a: 'We price per user or per device with clear tiers, so your costs scale with your team and there are no surprise invoices for routine work.' },
      { q: 'Can you work alongside our internal IT staff?', a: 'Yes. Co-managed IT is common: we can handle monitoring, patching and after-hours support while your team focuses on projects.' },
    ],
  },
  {
    slug: 'system-support',
    icon: 'server',
    name: 'System Support & Administration',
    short: 'System Support',
    title: 'System Support & Server Administration',
    metaDescription:
      'Expert Windows and Linux system administration: server builds, Active Directory, Microsoft 365, networking, performance tuning and troubleshooting.',
    summary:
      'Hands-on administration for Windows and Linux servers, identity, networks and Microsoft 365. Stable systems, documented and kept healthy.',
    intro:
      'Reliable systems do not happen by accident. Our engineers build, harden, maintain and troubleshoot the servers, identity platforms and networks your business runs on, and we document everything so nothing lives only in one person\'s head.',
    features: [
      { t: 'Windows & Linux servers', d: 'Builds, upgrades, hardening and maintenance for Windows Server, Ubuntu, RHEL and more.' },
      { t: 'Identity & access', d: 'Active Directory, Entra ID, SSO and least-privilege access that is easy to audit.' },
      { t: 'Microsoft 365 & Google Workspace', d: 'Tenant administration, email security, licensing and migrations.' },
      { t: 'Networking', d: 'Firewalls, VPN, Wi-Fi and switching designed for performance and security.' },
      { t: 'Troubleshooting & incident response', d: 'Root-cause analysis for outages and performance issues, not just quick fixes.' },
      { t: 'Documentation', d: 'Clear runbooks, diagrams and asset inventories that you own.' },
    ],
    outcomes: ['Stable, secure servers', 'Faster issue resolution', 'Audit-ready access control', 'Complete documentation'],
    faqs: [
      { q: 'Do you support both Windows and Linux?', a: 'Yes. Our engineers administer Windows Server and the major Linux distributions, plus the identity, email and network services around them.' },
      { q: 'Can you take over systems that are poorly documented?', a: 'Absolutely. We start with a discovery and documentation pass so we understand what you have before changing anything.' },
      { q: 'Do you offer project-based system work?', a: 'Yes. Beyond ongoing support we handle one-off projects like server migrations, Microsoft 365 moves and network refreshes.' },
    ],
  },
  {
    slug: 'cloud-administration',
    icon: 'cloud',
    name: 'Cloud Administration',
    short: 'Cloud Admin',
    title: 'Cloud Administration for AWS, Azure & Google Cloud',
    metaDescription:
      'Managed cloud administration for AWS, Microsoft Azure and Google Cloud: migrations, security, cost optimization, monitoring and governance.',
    summary:
      'Secure, cost-efficient AWS, Azure and Google Cloud environments, from migration and landing zones to day-two operations and cost control.',
    intro:
      'The cloud is powerful and easy to get wrong. We design, migrate and run AWS, Azure and Google Cloud environments with security and cost in mind from day one, then keep them healthy with monitoring, governance and regular optimization.',
    features: [
      { t: 'Cloud migrations', d: 'Assessment, planning and low-risk migration of servers, apps and data to the cloud.' },
      { t: 'Landing zones & governance', d: 'Accounts, subscriptions, networking and policies set up the right way from the start.' },
      { t: 'Cloud security', d: 'IAM reviews, encryption, security baselines and continuous posture monitoring.' },
      { t: 'Cost optimization (FinOps)', d: 'Rightsizing, reservations, cleanup and reporting that routinely cut cloud bills.' },
      { t: 'Monitoring & operations', d: 'Alerting, backups, patching and incident response for cloud workloads.' },
      { t: 'Hybrid & multi-cloud', d: 'Connect on-premises systems and multiple clouds into one manageable platform.' },
    ],
    outcomes: ['Lower cloud spend', 'Secure by default', 'Smooth migrations', 'Clear governance'],
    faqs: [
      { q: 'Which cloud platforms do you support?', a: 'We administer Amazon Web Services (AWS), Microsoft Azure and Google Cloud Platform, as well as hybrid environments that mix cloud and on-premises systems.' },
      { q: 'Can you reduce our cloud bill?', a: 'In most environments, yes. A cost review typically finds idle resources, oversized instances and missed savings plans that can be fixed quickly.' },
      { q: 'How do you minimize risk during a migration?', a: 'We assess dependencies first, migrate in phases with tested rollback plans and schedule cutovers to avoid disrupting your business.' },
    ],
  },
  {
    slug: 'devops',
    icon: 'infinity',
    name: 'DevOps Engineering',
    short: 'DevOps',
    title: 'DevOps Consulting & Engineering Services',
    metaDescription:
      'DevOps consulting and engineering: CI/CD pipelines, infrastructure as code with Terraform, Docker and Kubernetes, observability and platform automation.',
    summary:
      'Ship faster with fewer incidents. CI/CD pipelines, infrastructure as code, containers and observability built by engineers who run production.',
    intro:
      'We help engineering teams release software quickly and safely. From automated pipelines and infrastructure as code to Kubernetes platforms and observability, we build the foundation that lets your developers focus on product instead of plumbing.',
    features: [
      { t: 'CI/CD pipelines', d: 'Automated build, test and deploy with GitHub Actions, GitLab CI, Azure DevOps or Jenkins.' },
      { t: 'Infrastructure as code', d: 'Repeatable, reviewable infrastructure with Terraform, Bicep, CloudFormation and Ansible.' },
      { t: 'Containers & Kubernetes', d: 'Docker, EKS, AKS and GKE clusters that are secure, scalable and easy to operate.' },
      { t: 'Observability', d: 'Metrics, logs, tracing and actionable alerts with Prometheus, Grafana, Datadog and more.' },
      { t: 'DevSecOps', d: 'Secret management, dependency scanning and policy checks built into every pipeline.' },
      { t: 'Platform engineering', d: 'Self-service environments and golden paths that make the right way the easy way.' },
    ],
    outcomes: ['Faster release cycles', 'Fewer failed deployments', 'Reproducible infrastructure', 'Happier developers'],
    faqs: [
      { q: 'What does a DevOps consultant do?', a: 'A DevOps consultant automates how software is built, tested, deployed and operated: CI/CD pipelines, infrastructure as code, containers and monitoring, so teams ship faster with fewer outages.' },
      { q: 'Do you work with our existing tools?', a: 'Yes. We meet you where you are, whether that is GitHub, GitLab, Azure DevOps, AWS, Azure or Google Cloud, and improve it incrementally.' },
      { q: 'Can you train our team?', a: 'Every engagement includes documentation and knowledge transfer, and we offer hands-on workshops so your team can own what we build.' },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

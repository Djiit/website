export type Talk = {
  title: string
  date: string
  event: string
  link?: string
}

export const talks: Talk[] = [
  {
    title: 'Scaling AI Adoption: From 30 Engineers to Tech-Wide Transformation - Lessons from Doctolib\'s Journey',
    date: '2025-10-01',
    event: 'Devoxx Belgium 2025',
    link: 'https://m.devoxx.com/events/dvbe25/talks/23196/scaling-ai-adoption-from-30-engineers-to-tech-wide-transformation-lessons-from-doctolibs-journey',
  },
  {
    title: 'Datadog Summit Paris',
    date: '2025-09-01',
    event: 'Datadog Summit Paris',
    link: 'https://web.cvent.com/event/65df6800-b8d2-4035-b26e-abd45abb32a8/websitePage:3e72dbd9-c222-418d-b7b3-c884aa716be3?rt=UgR3F9fzikmuhGN-X35B6g&session=e61a627a-8af8-4236-bcf4-51c7e887b0e8',
  },
  {
    title: 'REX: Oxygen, le Design System de Doctolib',
    date: '2025-03-12',
    event: 'Nantes JUG',
    link: 'https://nantesjug.org/#/events/2025_03_12',
  },
  {
    title: 'Le futur du DevOps : les conteneurs, Kubernetes, les microservices et l\'observabilité',
    date: '2024-11-01',
    event: 'Tech Show Paris',
    link: 'https://www.cloudaiinfrastructure.fr/programme-de-conferences-2024/le-futur-du-devops-les-conteneurs-kubernetes-les-microservices-et-lobservabilit%C3%A9',
  },
  {
    title: 'Tech Leadership to Engineering Management, and Back again!',
    date: '2024-04-01',
    event: 'Unicorns&Cookies (360Learning)',
  },
  {
    title: 'dctl: the Doctolib Developer CLI and its multiple Github Interactions',
    date: '2023-11-01',
    event: 'French Octocat Group (FROG)',
  },
  {
    title: 'Guest Speaker',
    date: '2023-05-01',
    event: 'Github Galaxy Paris 2023',
  },
  {
    title: 'Gérer (ou pas) ses propres runners Github Actions',
    date: '2023-02-01',
    event: 'Human Talks Nantes',
    link: 'https://humantalks.com/talks/1845-gerer-ou-pas-ses-propres-runners-github-actions-ju',
  },
  {
    title: 'How (not) to manage your Github Runners',
    date: '2022-10-01',
    event: 'French Octocat Group (FROG)',
  },
  {
    title: 'Maintaining Resilient infrastructure in hypergrowth',
    date: '2022-06-01',
    event: 'VivaTech',
    link: 'https://vivatechnology.com/',
  },
  {
    title: 'REX: Migrating our CI to Github Actions',
    date: '2020-05-01',
    event: 'DevOps Live Paris',
  },
  {
    title: 'Errbot, conversation driven development',
    date: '2016-04-01',
    event: 'Paris.py',
    link: 'https://www.parispy.org/meetup-10-dailymotion',
  },
]

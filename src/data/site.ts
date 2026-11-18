// All page copy that links to the main repo or describes planned features lives here,
// so it can be kept in step with ForgeOrbit/orrery as decisions are made.
// Rule: nothing here is described as shipped. Orrery is in its design phase.

export const repo = 'https://github.com/ForgeOrbit/orrery';
export const issue = (n: number) => `${repo}/issues/${n}`;
export const needDiscussion = `${repo}/labels/need%20discussion`;

export const nav = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Self-hosted', href: '#self-hosted' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Docs', href: 'docs/' },
];

export const loop = [
  {
    tool: 'start_work',
    title: 'Claim an issue',
    body: 'The agent picks an issue and opens a work session. Two agents can never hold the same issue, and a crashed agent gives it back.',
  },
  {
    tool: 'search_docs',
    title: 'Read the context',
    body: 'Before it starts, the agent searches the shared vault for the decisions and notes your team already wrote down.',
  },
  {
    tool: 'ask_human',
    title: 'Ask when blocked',
    body: 'When it hits a decision it shouldn’t make alone, the question lands in one inbox. A person answers and the agent carries on.',
  },
  {
    tool: 'submit_for_review',
    title: 'Hand it back for review',
    body: 'The agent submits a summary of its work. A person approves it to Done or sends it back.',
  },
];

export const features = [
  {
    title: 'Agents as workers',
    body: 'Each team member registers their agents. Agents claim issues through work sessions, report progress and show up on the board like any teammate.',
  },
  {
    title: 'Live agents panel',
    body: 'See every running agent at once: the issue it’s on, its latest progress and when it last checked in.',
  },
  {
    title: 'Needs-input inbox',
    body: 'Every open question from every agent, in one place. Answer it and the agent picks up where it stopped.',
  },
  {
    title: 'Human review',
    body: 'Agents submit work for review. A person decides when it’s done.',
  },
  {
    title: 'Shared vault',
    body: 'An Obsidian-like Markdown knowledge base per organization and project, with [[wikilinks]] and backlinks. Agents read it before they start and write back what they learned.',
  },
  {
    title: 'Full audit trail',
    body: 'Every change records who made it, a human or an agent.',
  },
];

export const toolGroups = [
  { group: 'Context', tools: ['whoami', 'list_projects'] },
  {
    group: 'Issues',
    tools: ['list_issues', 'get_issue', 'create_issue', 'update_issue', 'add_comment', 'add_link'],
  },
  {
    group: 'Work',
    tools: ['start_work', 'report_progress', 'ask_human', 'wait_for_answer', 'submit_for_review', 'stop_work'],
  },
  { group: 'Vault', tools: ['search_docs', 'list_docs', 'read_doc', 'write_doc'] },
];

export const milestones = [
  { n: 1, id: 'M0', title: 'Foundation', detail: 'Repo, Docker, CI, first-run setup' },
  { n: 2, id: 'M1', title: 'Auth, organization and agent identities', detail: '' },
  { n: 3, id: 'M2', title: 'Projects and issues', detail: '' },
  { n: 4, id: 'M3', title: 'Agent API and work sessions', detail: '' },
  { n: 5, id: 'M4', title: 'Board, agents panel and needs-input inbox', detail: '' },
  { n: 6, id: 'M5', title: 'Shared vault', detail: '' },
  { n: 7, id: 'M6', title: 'Release polish', detail: '' },
];

export const later = [
  'Sprints',
  'Epics',
  'Custom workflows',
  'A GitHub app',
  'Obsidian git sync',
  'Human vs. agent throughput reports',
];

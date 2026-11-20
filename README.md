# Sayrab — FSPM Jira–GitHub Assignment

**Student:** Mohid (22F-0500)  
**Course:** CS4002 Fundamentals of Software Project Management, FAST-NUCES CFD  
**Jira board:** https://cfd-team-vh0222ym.atlassian.net/jira/software/projects/KAN/boards/2  
**Reference product (read-only):** https://sayrabv4.vercel.app

## Purpose

This is a **separate educational implementation** of a few Sayrab workflows for demonstrating traceability between Jira backlog issues, Git branches, commits, code review, and pull requests. The production Sayrab V4 repository is not used for assignments and is not modified.

The reference Sayrab product supports fundraising campaigns, donations, referrals and branded merchandise. This starter focuses on contained features that can be tested locally, not a production-ready payment platform.

## Team

- **Mohid — 22F-0500:** project planning and implementation.
- **Second team member:** not yet identified. Add name, university roll number and GitHub username when available; no contributions are attributed to a nonexistent collaborator.

## Technologies

- Node.js 20+ (JavaScript ES modules; built-in test runner)
- Native HTTP for an isolated backend demonstrator
- JSON fixtures/in-memory storage for local tests
- GitHub pull requests + Jira issue-keyed development workflow
- Reference system stack: React, Express, Node.js, MongoDB

## Run and test

```bash
npm test
npm start
```

The local demo server listens on http://localhost:3000 and does not require production credentials.

## Assignment workflow

Use one feature branch per Jira item, e.g. `KAN-9-user-registration`. Include the issue key in the commit message and PR title. The reviewer must be a different human contributor. Do **not** merge an unreviewed PR or mark Jira Done prematurely.

## Jira epics and stories

- **KAN-5:** Authentication & Profiles (KAN-9, KAN-10)
- **KAN-6:** Campaign Discovery & Management (KAN-11, KAN-12)
- **KAN-7:** Donations & Referrals (KAN-13, KAN-14)
- **KAN-8:** Merchandise & Platform Reliability (KAN-15, KAN-16)

Current Jira board does not support Scrum sprints or a dedicated Story Points field. Estimates are recorded in story descriptions until the project is configured for Scrum.

## Security

This repo is for local demonstration only; never upload real customer information, production secrets or credentials. No payment gateway is integrated.

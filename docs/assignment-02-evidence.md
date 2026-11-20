# Assignment 02 — Jira–GitHub Development Traceability

**Course:** CS4002 Fundamentals of Software Project Management  
**Student:** Mohid (22F-0500)  
**Project:** Sayrab (same project as Assignment 01)  
**Jira board:** https://cfd-team-vh0222ym.atlassian.net/jira/software/projects/KAN/boards/2  
**Assignment repository:** https://github.com/momo6564/sayrab-fspm-assignment  
**Original product repository:** https://github.com/retrohood/sayrabv4 — **not modified**.

## Task 1 — Jira backlog preparation

The eight issue-keyed user stories (recorded as Jira Feature items because the project currently has no Story issue type) are:

| Epic | Work item | Feature |
|---|---|---|
| KAN-5 — Authentication & profiles | KAN-9 | Donor registration |
| KAN-5 — Authentication & profiles | KAN-10 | Fundraiser login |
| KAN-6 — Campaign discovery & management | KAN-11 | Fundraising campaign creation |
| KAN-6 — Campaign discovery & management | KAN-12 | Campaign search and filtering |
| KAN-7 — Donations & referrals | KAN-13 | Donation submission |
| KAN-7 — Donations & referrals | KAN-14 | Campaign referral links |
| KAN-8 — Merchandise & platform reliability | KAN-15 | Merchandise catalog |
| KAN-8 — Merchandise & platform reliability | KAN-16 | Responsive campaign and store pages |

All have priorities and estimated Story Points written in their Jira descriptions. The team-managed Jira project does not expose the native Story Points custom field, so that requirement is only partially satisfied.

## Task 2 — Shared GitHub repository

The separate repository includes a project README, basic modular Node.js files, `test/` test files and a GitHub Actions workflow (`.github/workflows/tests.yml`). It is public, so others can clone and pull. A second collaborator has **not** been invited because no second group member's GitHub username was provided.

## Task 3 — Jira–GitHub connection

The following Jira issues contain native Jira *Web links* to their respective pull requests, as well as comments with branch and PR references. **This is manual cross-linking; it is not proof that the native GitHub for Jira app is connected.** The Jira Development panel must be verified after linking GitHub and Jira in the product UI.

## Task 4 — Sprint plan

The existing Jira `KAN` board is a team-managed simple board and returns **"The board does not support sprints"**. A proposed 2-week Sprint 1 exists as Jira planning task KAN-19, with KAN-9, KAN-10, KAN-11 and KAN-12 (14 story points). There is **no active Jira Sprint**, so no sprint completion can be truthfully reported.

## Tasks 5–7 — Branches, commits, and review

| Issue | Branch | Pull request | GitHub Actions CI result | Review status |
|---|---|---|---|---|
| KAN-9 | [KAN-9-user-registration](https://github.com/momo6564/sayrab-fspm-assignment/tree/KAN-9-user-registration) | [PR #1](https://github.com/momo6564/sayrab-fspm-assignment/pull/1) | [Passed](https://github.com/momo6564/sayrab-fspm-assignment/actions/runs/44792919883) | Open, not reviewed |
| KAN-12 | [KAN-12-campaign-search](https://github.com/momo6564/sayrab-fspm-assignment/tree/KAN-12-campaign-search) | [PR #2](https://github.com/momo6564/sayrab-fspm-assignment/pull/2) | [Passed](https://github.com/momo6564/sayrab-fspm-assignment/actions/runs/44792930225) | Open, not reviewed |
| KAN-15 | [KAN-15-merchandise-catalog](https://github.com/momo6564/sayrab-fspm-assignment/tree/KAN-15-merchandise-catalog) | [PR #3](https://github.com/momo6564/sayrab-fspm-assignment/pull/3) | [Passed](https://github.com/momo6564/sayrab-fspm-assignment/actions/runs/44792932494) | Open, not reviewed |

Each implemented issue has multiple commits referencing its key, including implementation, tests and/or documentation. The implementation is **standalone educational code**, not a claim that those features have been deployed in the reference Sayrab V4 system.

## Task 8 — Jira progress

KAN-9, KAN-12 and KAN-15 are marked **In Progress**. They must remain open until the required code is reviewed and merged. Other development stories remain in the backlog.

## Required remaining actions before submitting as complete

1. Create or configure a Jira **Scrum** project/board and activate Sprint 1, updating issue estimates and assignments.
2. Connect the GitHub for Jira integration and verify the **Development** panel displays branches, commits and PRs automatically.
3. Invite an actual second group member; get their contributions, review decisions and approvals on the PRs.
4. Merge approved PRs (only after verified review) and move the corresponding Jira issues to Done.
5. Capture authentic Jira and GitHub screenshots of the relevant views and provide both group members' real names and roll numbers.

This evidence report distinguishes completed records from requirements that remain blocked. It does not fabricate reviews, sprints, integration or completed development.
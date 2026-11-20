# Assignment 03 — ClickUp WBS, Function Points and Schedule

**Course:** CS4002, Fundamentals of Software Project Management (FAST-NUCES CFD)  
**Student:** Mohid, 22F-0500  
**Instructor:** Ms. Maham Saleem  
**Assignment due date:** 20 November 2026  
**Reference product:** https://sayrabv4.vercel.app (read-only; not modified)  
**Jira:** https://cfd-team-vh0222ym.atlassian.net/jira/software/projects/KAN/boards/2  
**ClickUp workspace:** https://app.clickup.com/1100340000034782

> **Scope/status:** This is the Assignment 3 planning/report copy. It is not proof that the software features have shipped. The ClickUp plan is in the existing IT Space under the **Project Planning** folder, since the available connection cannot create or rename a workspace/Space. Four screenshots and remaining dependencies need to be finished in ClickUp. The full editable Word report is retained separately for submission.

## Task 1 — Project summary

Sayrab is a web-based fundraising and merchandise platform designed to help fundraisers launch campaigns and connect with donors. The project aims to make campaign discovery, donation management, referral sharing, and branded merchandise browsing more structured and accessible. Its intended users include donors, individual fundraisers, customers purchasing campaign-related merchandise, and administrators responsible for platform oversight. The main planned features include user account registration and secure sign-in, creation and management of fundraising campaigns, campaign search and filtering, donation submission and contribution tracking, referral link sharing, a merchandise catalog, and responsive mobile-friendly pages. This project plan covers requirements analysis, software design, development modules, testing and deployment. Work packages are connected to the existing Jira epics and user stories and to the separate GitHub assignment repository. This scope describes the educational project plan rather than claiming every feature is already fully deployed.

## Task 2 — Work Breakdown Structure

Five ClickUp lists represent major phases:

| Phase | Main work packages |
|---|---|
| [01 Requirements Analysis](https://app.clickup.com/1100340000034782/v/l/li/1100340000209090) | Capture donor and fundraiser requirements; Define feature acceptance criteria; Approve project scope and risk register |
| [02 System Design](https://app.clickup.com/1100340000034782/v/l/li/1100340000209091) | Design application architecture; Design database and API contracts; Design UX flows and wireframes |
| [03 Development](https://app.clickup.com/1100340000034782/v/l/li/1100340000209092) | Authentication & profiles; Fundraising campaigns; Donations & referrals; Merchandise & orders |
| [04 Testing & Verification](https://app.clickup.com/1100340000034782/v/l/li/1100340000209093) | Automated unit tests; Integration/security checks; User acceptance & responsive testing |
| [05 Deployment & Handover](https://app.clickup.com/1100340000034782/v/l/li/1100340000209094) | Prepare staging; Deploy and smoke test; Publish documentation/handover |

Each of the four development work packages has three lowest-level subtasks.

## Task 3 — Function Point Analysis

**Assumptions:** DET/FTR/RET values represent an early functional decomposition using standard complexity categories, subject to refinement against actual boundaries and the instructor's lecture matrices. EI = External Input, EO = External Output, EQ = External Inquiry, ILF = Internal Logical File, EIF = External Interface File. There are no separate EIF components within this scoped estimate.

| Functional component / ClickUp subtask | Class | DET | FTR/RET | Complexity | UFP | Adjusted FP | Hours |
|---|---|---:|---:|---|---:|---:|---:|
| Implement donor registration | EI | 4 | 1 | Simple | 3 | 2.97 | 23.76 |
| Implement secure fundraiser sign-in | EI | 4 | 1 | Simple | 3 | 2.97 | 23.76 |
| Implement user profile logical records | ILF | 12 | 1 | Simple | 7 | 6.93 | 55.44 |
| Implement campaign creation form and API | EI | 9 | 2 | Average | 4 | 3.96 | 31.68 |
| Implement campaign search and filters | EQ | 8 | 2 | Average | 4 | 3.96 | 31.68 |
| Design and maintain campaign logical records | ILF | 26 | 2 | Average | 10 | 9.90 | 79.20 |
| Implement donation submission workflow | EI | 9 | 2 | Average | 4 | 3.96 | 31.68 |
| Generate donation confirmation receipt | EO | 9 | 2 | Average | 5 | 4.95 | 39.60 |
| Implement referral lookup and tracking inquiry | EQ | 4 | 1 | Simple | 3 | 2.97 | 23.76 |
| Implement merchandise catalog inquiry | EQ | 8 | 2 | Average | 4 | 3.96 | 31.68 |
| Maintain merchandise product logical records | ILF | 14 | 1 | Simple | 7 | 6.93 | 55.44 |
| Implement merchandise order submission | EI | 9 | 2 | Average | 4 | 3.96 | 31.68 |
| **Total** | | | | | **58** | **57.42** | **459.36** |

Lecture weights used: EI 3/4/6; EO 4/5/7; EQ 3/4/6; ILF 7/10/15; EIF 5/7/10 for Simple/Average/Complex respectively.

### 14 General System Characteristics

| GSC | Rating | GSC | Rating |
|---|---:|---|---:|
| Data communications | 3 | Distributed data processing | 2 |
| Performance | 3 | Heavily used configuration | 2 |
| Transaction rate | 3 | Online data entry | 2 |
| End-user efficiency | 2 | Online update | 3 |
| Complex processing | 3 | Reusability | 2 |
| Installation ease | 2 | Operational ease | 2 |
| Multiple sites | 3 | Facilitate change | 2 |

**TDI = 34; VAF = 0.65 + 0.01 × 34 = 0.99.**  
**UFP = 58; AFP = 58 × 0.99 = 57.42.**  
**Estimated development effort = 57.42 × 8 = 459.36 hours.**

ClickUp **Number** fields `Function Points (FP)` and `Estimated Hours` were created and applied to the twelve development subtasks at the adjusted contribution level. The field values add up to the project AFP and calculated hours.

## Task 4 — Planned dates, dependencies and Gantt

The baseline assumes one identified student, an eight-hour weekday, and a serial Finish-to-Start sequence. The 459.36-hour FPA total covers functional development only; other work packages have explicitly budgeted planning durations. Holidays and leave are not excluded.

| Activity (critical path, in planned sequence) | Workdays | Start | Finish |
|---|---:|---|---|
| Capture donor and fundraiser requirements | 2 | 2026-11-23 | 2026-11-24 |
| Define feature acceptance criteria | 2 | 2026-11-25 | 2026-11-26 |
| Approve project scope and risk register | 1 | 2026-11-27 | 2026-11-27 |
| Design application architecture | 2 | 2026-11-30 | 2026-12-01 |
| Design database and API contracts | 3 | 2026-12-02 | 2026-12-04 |
| Design UX flows and wireframes | 2 | 2026-12-07 | 2026-12-08 |
| Implement donor registration | 3 | 2026-12-09 | 2026-12-11 |
| Implement secure fundraiser sign-in | 3 | 2026-12-14 | 2026-12-16 |
| Implement user profile logical records | 7 | 2026-12-17 | 2026-12-25 |
| Implement campaign creation form and API | 4 | 2026-12-28 | 2026-12-31 |
| Implement campaign search and filters | 4 | 2027-01-01 | 2027-01-06 |
| Design and maintain campaign logical records | 10 | 2027-01-07 | 2027-01-20 |
| Implement donation submission workflow | 4 | 2027-01-21 | 2027-01-26 |
| Generate donation confirmation receipt | 5 | 2027-01-27 | 2027-02-02 |
| Implement referral lookup and tracking inquiry | 3 | 2027-02-03 | 2027-02-05 |
| Implement merchandise catalog inquiry | 4 | 2027-02-08 | 2027-02-11 |
| Maintain merchandise product logical records | 7 | 2027-02-12 | 2027-02-22 |
| Implement merchandise order submission | 4 | 2027-02-23 | 2027-02-26 |
| Write automated unit tests | 3 | 2027-03-01 | 2027-03-03 |
| Run integration and security checks | 3 | 2027-03-04 | 2027-03-08 |
| Perform user acceptance and responsive testing | 2 | 2027-03-09 | 2027-03-10 |
| Prepare staging environment | 2 | 2027-03-11 | 2027-03-12 |
| Deploy release candidate and smoke test | 2 | 2027-03-15 | 2027-03-16 |
| Publish documentation and handover | 2 | 2027-03-17 | 2027-03-18 |

**Proposed critical path:** all 24 activities in table order, as a conservative single-resource serial baseline. **84 working days, 23 Nov 2026 – 18 Mar 2027.** This is a proposed schedule; it should be revalidated after adding the second team member and the remaining dependency arrows.

**ClickUp integration status:** Twenty Finish-to-Start dependency links were confirmed before its free MCP daily limit was reached. Three final links remain to be completed between user acceptance testing, staging, deployment and handover. The Gantt view and arrows must be visually verified in ClickUp.

## Task 5 — Reflection (250 words)

A Work Breakdown Structure (WBS) differs from the Jira epics and backlog used in our earlier assignments because it describes the full deliverable-oriented scope of the project. Jira epics group related product features, while backlog items describe user needs that can be prioritized and implemented iteratively. The Sayrab WBS additionally includes requirements analysis, architecture design, testing, deployment, and handover. It therefore connects development work with activities that are necessary to deliver a usable project but might not appear as product user stories.

A Gantt chart is particularly useful when work involves sequential approvals, shared resources, fixed milestones, or dependencies between different phases. For example, Sayrab database design should precede implementation of data-dependent APIs, and integration testing should follow completion of the relevant modules. A Scrum board is better for inspecting the current sprint and tracking day-to-day task status. The Gantt chart complements rather than replaces that Agile view by making the overall timeline and critical path visible.

Function Point Analysis improves estimation because it requires us to identify user-visible functions, classify each one, count DETs and FTRs or RETs, and apply published complexity weights consistently. This is more defensible than guessing a total number of hours without explaining its origin. However, one source of uncertainty is the initial DET/FTR/RET classification: actual API contracts, data structures, and verification requirements may differ from the early design assumptions. The assumed productivity rate of eight hours per adjusted function point is another simplification. Estimates should therefore be updated as more is learned during implementation.

## Submission evidence still required

1. Rename/create a workspace `SPM Assignment 3 – Sayrab` and a dedicated `Sayrab` Space using ClickUp UI (connector did not expose those operations).
2. Capture authentic screenshots of workspace/folder, expanded WBS hierarchy, both number custom field columns, and Gantt with visible dependency arrows.
3. Finish the last three Finish-to-Start links and visually verify no cycles.
4. Insert screenshots into the editable Word report; add second group member only when identified.
5. Recheck DET/FTR/RET classifications against the instructor's matrices.

**No modifications to `retrohood/sayrabv4`.**
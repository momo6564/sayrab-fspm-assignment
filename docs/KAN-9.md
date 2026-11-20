# KAN-9: Register local demo users

Jira: https://cfd-team-vh0222ym.atlassian.net/browse/KAN-9

## Verification

Run `node --test test/register.test.mjs` in the repository root (Node.js 20+).

The tests are source-level checks. GitHub Actions runs `node --test` on push to main and pull requests.

## Limits

In-memory records only, no durable DB or web UI.

Status: Draft PR awaiting separate human code review. Do not merge until reviewed or mark the Jira issue Done.

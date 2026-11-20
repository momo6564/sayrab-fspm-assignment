import test from 'node:test';
import assert from 'node:assert/strict';
import { searchCampaigns } from '../src/campaigns/search.mjs';

const campaigns = [
  { id: '1', title: 'School Supplies', description: 'Books for children', category: 'Education', goal: 1000, createdAt: '2026-01-01' },
  { id: '2', title: 'Hospital Support', description: 'Medical supplies', category: 'Health', goal: 700, createdAt: '2026-02-01' },
  { id: '3', title: 'Community Library', description: 'School books', category: 'Education', goal: 300, createdAt: '2026-03-01' },
];
test('keyword search is case insensitive across titles and descriptions', () => {
  assert.deepEqual(searchCampaigns(campaigns, { query: 'SCHOOL' }).map(c => c.id), ['3', '1']);
});
test('filters categories and sorts by goal', () => {
  assert.deepEqual(searchCampaigns(campaigns, { category: 'education', sort: 'goal-asc' }).map(c => c.id), ['3', '1']);
});
test('returns empty list on no matches and rejects unsupported sorting', () => {
  assert.deepEqual(searchCampaigns(campaigns, { query: 'unmatched' }), []);
  assert.throws(() => searchCampaigns(campaigns, { sort: 'random' }), RangeError);
});

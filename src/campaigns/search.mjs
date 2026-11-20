const SORT_OPTIONS = new Set(['newest', 'oldest', 'goal-asc', 'goal-desc']);

export function searchCampaigns(campaigns, { query = '', category = '', sort = 'newest' } = {}) {
  if (!Array.isArray(campaigns)) throw new TypeError('campaigns must be an array');
  if (!SORT_OPTIONS.has(sort)) throw new RangeError('Unknown sort option');
  const needle = String(query).trim().toLowerCase();
  const categoryNeedle = String(category).trim().toLowerCase();
  const matches = campaigns.filter((campaign) => {
    if (!campaign || typeof campaign !== 'object') return false;
    const searchable = [campaign.title, campaign.description].map((x) => String(x ?? '').toLowerCase()).join(' ');
    return (!needle || searchable.includes(needle)) &&
      (!categoryNeedle || String(campaign.category ?? '').toLowerCase() === categoryNeedle);
  });
  return [...matches].sort((a, b) => {
    const goalA = Number(a.goal) || 0;
    const goalB = Number(b.goal) || 0;
    if (sort === 'goal-asc') return goalA - goalB;
    if (sort === 'goal-desc') return goalB - goalA;
    const timeA = Date.parse(a.createdAt) || 0;
    const timeB = Date.parse(b.createdAt) || 0;
    return sort === 'newest' ? timeB - timeA : timeA - timeB;
  });
}

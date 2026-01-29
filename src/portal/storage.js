// Simple localStorage-based persistence for the internal portal

const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
};

const write = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const id = () => `${Date.now()}_${Math.random().toString(36).slice(2,8)}`;

export const collections = {
  contents: 'portal_contents',
  leads: 'portal_leads',
  requests: 'portal_requests',
  tickets: 'portal_tickets',
  tasks: 'portal_tasks',
  events: 'portal_events',
};

export const getAll = (col) => read(collections[col], []);
export const setAll = (col, items) => write(collections[col], items);
export const addItem = (col, item) => {
  const list = getAll(col);
  const withId = { id: id(), created_at: new Date().toISOString(), ...item };
  list.unshift(withId);
  setAll(col, list);
  return withId;
};
export const updateItem = (col, itemId, patch) => {
  const list = getAll(col);
  const idx = list.findIndex(i => i.id === itemId);
  if (idx !== -1) {
    list[idx] = { ...list[idx], ...patch, updated_at: new Date().toISOString() };
    setAll(col, list);
    return list[idx];
  }
  return null;
};
export const removeItem = (col, itemId) => {
  const list = getAll(col).filter(i => i.id !== itemId);
  setAll(col, list);
};

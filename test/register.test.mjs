import test from 'node:test';
import assert from 'node:assert/strict';
import { createUserStore, validateRegistration } from '../src/auth/register.mjs';

test('registration rejects missing and invalid fields', () => {
  const errors = validateRegistration({ name: 'M', email: 'invalid', password: 'short' });
  assert.deepEqual(Object.keys(errors).sort(), ['email', 'name', 'password']);
});
test('registration normalizes email, rejects duplicates and hides passwords', () => {
  const store = createUserStore();
  const first = store.register({ name: 'Mohid', email: 'MOHID@example.com', password: 'long-password-123' });
  assert.equal(first.status, 201);
  assert.equal(first.user.email, 'mohid@example.com');
  assert.equal('passwordHash' in first.user, false);
  const repeat = store.register({ name: 'Mohid', email: 'mohid@example.com', password: 'long-password-123' });
  assert.equal(repeat.status, 409);
  assert.equal(store.count(), 1);
  assert.equal(store.authenticate('mohid@example.com', 'long-password-123'), true);
  assert.equal(store.authenticate('mohid@example.com', 'wrong-password'), false);
});

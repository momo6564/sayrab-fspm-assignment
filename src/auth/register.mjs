import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from 'node:crypto';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateRegistration(input) {
  const errors = {};
  if (!input || typeof input !== 'object') return { input: 'Registration data is required' };
  if (typeof input.name !== 'string' || input.name.trim().length < 2)
    errors.name = 'Name must be at least 2 characters';
  if (typeof input.email !== 'string' || !EMAIL_RE.test(input.email.trim()))
    errors.email = 'A valid email address is required';
  if (typeof input.password !== 'string' || input.password.length < 10)
    errors.password = 'Password must contain at least 10 characters';
  return errors;
}

export function createUserStore() {
  const byEmail = new Map();
  function register(input) {
    const errors = validateRegistration(input);
    if (Object.keys(errors).length) return { ok: false, status: 400, errors };
    const email = input.email.trim().toLowerCase();
    if (byEmail.has(email))
      return { ok: false, status: 409, errors: { email: 'Account already registered' } };
    const salt = randomBytes(16).toString('hex');
    const passwordHash = scryptSync(input.password, salt, 64).toString('hex');
    const user = { id: randomUUID(), name: input.name.trim(), email, salt, passwordHash };
    byEmail.set(email, user);
    return { ok: true, status: 201, user: { id: user.id, name: user.name, email } };
  }
  function authenticate(email, password) {
    if (typeof email !== 'string' || typeof password !== 'string') return false;
    const user = byEmail.get(email.trim().toLowerCase());
    if (!user) return false;
    const candidate = scryptSync(password, user.salt, 64);
    return timingSafeEqual(candidate, Buffer.from(user.passwordHash, 'hex'));
  }
  return { register, authenticate, count: () => byEmail.size };
}

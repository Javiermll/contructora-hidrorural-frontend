import { CONTACT_API_URL } from "../config/constants";

export async function postContactMessage(payload, { signal } = {}) {
  const res = await fetch(CONTACT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal,
  });

  const data = await res.json().catch(() => ({}));

  return { res, data };
}

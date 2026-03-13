const API_BASE_URL = "http://localhost:3000";
const WEB_CODE = "SYS002";

export interface CounselPayload {
  name: string;
  counselHp: string;
  counselMemo: string;
}

export async function submitCounsel(payload: CounselPayload): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/counsels`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      webCode: WEB_CODE,
      ...payload,
    }),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}

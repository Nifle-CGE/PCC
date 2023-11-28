import { r as redirect } from "../../../../chunks/index.js";
import { u as usersRef, e as exchangeRatesRef } from "../../../../chunks/db.js";
async function load({ locals }) {
  if (!locals?.user)
    throw redirect(307, "/auth?redirect=/dashboard/admin");
  if (!locals?.user?.isAdmin)
    throw redirect(307, "/dashboard");
  const users = await usersRef.find({}).sort({ joined: -1 }).project({ _id: 0 }).toArray();
  const ratesUpdatedAt = structuredClone(await exchangeRatesRef.findOne({ id: 1 }));
  return { users, ratesUpdatedAt: ratesUpdatedAt.updatedAt };
}
export {
  load
};

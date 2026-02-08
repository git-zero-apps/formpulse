"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewWorkspacePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const record: Record<string, unknown> = {
      name: formData.get("name"),
      owner_id: formData.get("owner_id"),
      subscription_plan: formData.get("subscription_plan"),
      stripe_customer_id: formData.get("stripe_customer_id"),
      stripe_subscription_id: formData.get("stripe_subscription_id"),
    };

    const { error: insertError } = await supabase.from("workspaces").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/workspaces");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/workspaces" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Workspaces
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Workspace</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input id="name" name="name" type="text" className="input" placeholder="Enter name" required />
        </div>
        <div>
          <label htmlFor="owner_id" className="label">Owner Id</label>
          <input id="owner_id" name="owner_id" type="text" className="input" placeholder="Enter owner id" required />
        </div>
        <div>
          <label htmlFor="subscription_plan" className="label">Subscription Plan</label>
          <input id="subscription_plan" name="subscription_plan" type="text" className="input" placeholder="Enter subscription plan" />
        </div>
        <div>
          <label htmlFor="stripe_customer_id" className="label">Stripe Customer Id</label>
          <input id="stripe_customer_id" name="stripe_customer_id" type="text" className="input" placeholder="Enter stripe customer id" />
        </div>
        <div>
          <label htmlFor="stripe_subscription_id" className="label">Stripe Subscription Id</label>
          <input id="stripe_subscription_id" name="stripe_subscription_id" type="text" className="input" placeholder="Enter stripe subscription id" />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Workspace"}
          </button>
          <Link href="/dashboard/workspaces" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

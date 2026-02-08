// Email templates for Formpulse
// These return HTML strings that can be passed to sendEmail()

export function welcomeEmail(userName: string): { subject: string; html: string } {
  return {
    subject: `Welcome to Formpulse!`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Welcome to Formpulse 🎉</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">Hi ${userName},</p>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">Thanks for signing up! We're excited to have you on board.</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 16px;">Go to Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The Formpulse Team</p>
      </div>
    `,
  };
}

export function Welcome_email_on_signupEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `Formpulse: Welcome Email On Signup`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Welcome Email On Signup</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from Formpulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The Formpulse Team</p>
      </div>
    `,
  };
}

export function Response_alert_when_someone_submits_a_surveyEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `Formpulse: Response Alert When Someone Submits A Survey`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Response Alert When Someone Submits A Survey</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from Formpulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The Formpulse Team</p>
      </div>
    `,
  };
}

export function Survey_milestone_notifications_10_50_100_responsesEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `Formpulse: Survey Milestone Notifications (10, 50, 100 Responses)`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Survey Milestone Notifications (10, 50, 100 Responses)</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from Formpulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The Formpulse Team</p>
      </div>
    `,
  };
}

export function Team_member_invitationEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `Formpulse: Team Member Invitation`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Team Member Invitation</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from Formpulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The Formpulse Team</p>
      </div>
    `,
  };
}

export function Subscription_confirmation_and_receiptsEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `Formpulse: Subscription Confirmation And Receipts`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Subscription Confirmation And Receipts</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">You have a new notification from Formpulse.</p>
        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
          ${Object.entries(data).map(([k, v]) => `<p style="margin: 4px 0; font-size: 14px;"><strong>${k}:</strong> ${v}</p>`).join("")}
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || ''}/dashboard" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">View in Dashboard</a>
        <p style="font-size: 14px; color: #999; margin-top: 32px;">— The Formpulse Team</p>
      </div>
    `,
  };
}

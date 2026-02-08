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

export function welcome_email_Sent_when_user_signs_upEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `Formpulse: Welcome Email: Sent When User Signs Up`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Welcome Email: Sent When User Signs Up</h1>
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

export function response_alert_Sent_when_new_survey_response_is_submittedEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `Formpulse: Response Alert: Sent When New Survey Response Is Submitted`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Response Alert: Sent When New Survey Response Is Submitted</h1>
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

export function survey_milestone_Sent_when_survey_reaches_10_50_100_responsesEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `Formpulse: Survey Milestone: Sent When Survey Reaches 10, 50, 100 Responses`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Survey Milestone: Sent When Survey Reaches 10, 50, 100 Responses</h1>
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

export function team_invitation_Sent_when_user_is_invited_to_join_a_teamEmail(data: Record<string, string>): { subject: string; html: string } {
  return {
    subject: `Formpulse: Team Invitation: Sent When User Is Invited To Join A Team`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 16px;">Team Invitation: Sent When User Is Invited To Join A Team</h1>
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

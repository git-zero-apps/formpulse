// Auto-generated database types from ZERO Builder
// Do not edit manually
export interface Profiles {
  id: string;
  full_name: string;
  email: string;
  role: string;
  subscription_plan: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProfilesInsert {
  full_name: string;
  email: string;
  role?: string;
  subscription_plan?: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
}

export interface Surveys {
  id?: string;
  user_id: string;
  title: string;
  description: string | null;
  status: string;
  share_url: string;
  close_date: string | null;
  response_count: number;
  created_at: string;
  updated_at: string;
}

export interface SurveysInsert {
  user_id: string;
  title: string;
  description: string | null;
  status?: string;
  share_url: string;
  close_date: string | null;
  response_count?: number;
}

export interface Questions {
  id?: string;
  survey_id: string;
  question_text: string;
  question_type: string;
  options: Record<string, unknown> | null;
  required: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface QuestionsInsert {
  survey_id: string;
  question_text: string;
  question_type: string;
  options: Record<string, unknown> | null;
  required?: boolean;
  order_index: number;
}

export interface Responses {
  id?: string;
  survey_id: string;
  respondent_identifier: string | null;
  completion_status: string;
  submitted_at: string;
  created_at: string;
  updated_at: string;
}

export interface ResponsesInsert {
  survey_id: string;
  respondent_identifier: string | null;
  completion_status?: string;
  submitted_at?: string;
}

export interface Answers {
  id?: string;
  response_id: string;
  question_id: string;
  answer_value: string;
  created_at: string;
  updated_at: string;
}

export interface AnswersInsert {
  response_id: string;
  question_id: string;
  answer_value: string;
}

export interface TeamMembers {
  id?: string;
  owner_id: string;
  member_id: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface TeamMembersInsert {
  owner_id: string;
  member_id: string;
  status?: string;
}

// Auto-generated database types from ZERO Builder
// Do not edit manually
export interface Profiles {
  id: string;
  full_name: string;
  email: string;
  role: string;
  subscription_plan: string;
  workspace_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProfilesInsert {
  full_name: string;
  email: string;
  role?: string;
  subscription_plan?: string;
  workspace_id: string | null;
}

export interface Workspaces {
  id?: string;
  name: string;
  owner_id: string;
  subscription_plan: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface WorkspacesInsert {
  name: string;
  owner_id: string;
  subscription_plan?: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
}

export interface Surveys {
  id?: string;
  workspace_id: string;
  created_by: string;
  title: string;
  description: string | null;
  status: string;
  share_url: string;
  close_date: string | null;
  response_count: number;
  settings?: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
}

export interface SurveysInsert {
  workspace_id: string;
  created_by: string;
  title: string;
  description: string | null;
  status?: string;
  share_url: string;
  close_date: string | null;
  response_count?: number;
  settings?: Record<string, unknown> | null;
}

export interface Questions {
  id?: string;
  survey_id: string;
  question_text: string;
  question_type: string;
  options?: Record<string, unknown> | null;
  required: boolean;
  order_index: number;
  settings?: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
}

export interface QuestionsInsert {
  survey_id: string;
  question_text: string;
  question_type: string;
  options?: Record<string, unknown> | null;
  required?: boolean;
  order_index?: number;
  settings?: Record<string, unknown> | null;
}

export interface Responses {
  id?: string;
  survey_id: string;
  respondent_email: string | null;
  respondent_metadata?: Record<string, unknown> | null;
  completed: boolean;
  submitted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ResponsesInsert {
  survey_id: string;
  respondent_email: string | null;
  respondent_metadata?: Record<string, unknown> | null;
  completed?: boolean;
  submitted_at: string | null;
}

export interface Answers {
  id?: string;
  response_id: string;
  question_id: string;
  answer_value: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface AnswersInsert {
  response_id: string;
  question_id: string;
  answer_value: Record<string, unknown>;
}

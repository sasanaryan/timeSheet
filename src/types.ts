export interface TimeSheet {
  created_at?: Date;
  id?: number;
  user_id?: string;
  time?: string;
  hours1?: string;
  hours2?: string;
  description?: string;
}
export interface SharedUsers {
  created_at?: Date;
  id?: number;
  user_id?: string;
  user_email?: string;
  shared_email: string;
}

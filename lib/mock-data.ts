export type Role = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: Role;
  text?: string;
  component?: 'ShiftCard' | 'FleetCard';
  timestamp: string;
}

export const mockMessages: ChatMessage[] = [
  { id: '1', role: 'user', text: 'Show me the readiness status for KNA-5321 and bring up the next shift schedule.', timestamp: '10:42 AM' },
  { id: '2', role: 'assistant', text: 'Here is the current status for KNA-5321. It is currently undergoing cleaning.', component: 'FleetCard', timestamp: '10:42 AM' },
  { id: '3', role: 'assistant', text: 'And here is the draft schedule for the next shift.', component: 'ShiftCard', timestamp: '10:43 AM' },
];

export const mockShifts = [
  { name: 'Sarah Jenkins', role: 'Driver', time: '14:00 - 22:00', status: 'Confirmed' },
  { name: 'Mike Ross', role: 'Maintenance', time: '15:00 - 23:00', status: 'Pending' },
  { name: 'Elena Rodriguez', role: 'Driver', time: '14:00 - 22:00', status: 'Confirmed' },
];

export const mockFleetStats = {
  ready: 42,
  cleaning: 8,
  maintenance: 3,
  inTransit: 15
};

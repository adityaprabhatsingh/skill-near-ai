export type Provider = {
  id: string;
  name: string;
  category: string;
  tags: string;
  distance: number;
  fee: number;
  rating: number;
  time: string;
  seats: number;
  match: number;
  slots: string[];
  about: string;
};

export const categories = ["All", "Education", "Coding", "Fitness", "Yoga", "Music & Dance", "Sports", "Swimming"];

export const providers: Provider[] = [
  { id: "coding-academy", name: "Coding Academy", category: "Coding", tags: "Programming • Beginner to Intermediate", distance: 1.2, fee: 1800, rating: 4.8, time: "6:00 PM", seats: 8, match: 96, slots: ["Mon 6:00 PM", "Wed 6:00 PM", "Fri 5:30 PM"], about: "Project-based coding classes in Python, web development and problem solving, led by industry engineers." },
  { id: "flow-yoga", name: "Flow Yoga Studio", category: "Yoga", tags: "Hatha • Vinyasa • All levels", distance: 0.8, fee: 1200, rating: 4.7, time: "7:00 AM", seats: 3, match: 91, slots: ["Tue 7:00 AM", "Thu 7:00 AM", "Sat 8:00 AM"], about: "Calm, small-group sessions focused on posture, breath and flexibility." },
  { id: "music-school", name: "Raag Music School", category: "Music & Dance", tags: "Guitar • Keyboard • Vocals", distance: 2.6, fee: 1500, rating: 4.6, time: "5:30 PM", seats: 5, match: 87, slots: ["Mon 5:30 PM", "Thu 5:30 PM", "Sun 11:00 AM"], about: "Structured music lessons with graded exams and monthly student showcases." },
  { id: "iron-gym", name: "Iron Core Gym", category: "Fitness", tags: "Strength • Cardio • Personal training", distance: 1.9, fee: 2000, rating: 4.5, time: "6:00 AM", seats: 12, match: 82, slots: ["Daily 6:00 AM", "Daily 7:00 PM"], about: "Modern equipment, certified trainers and personalised workout plans." },
  { id: "bright-tutors", name: "Bright Minds Coaching", category: "Education", tags: "Maths • Science • Class 9–12", distance: 3.1, fee: 2500, rating: 4.9, time: "4:00 PM", seats: 2, match: 79, slots: ["Mon 4:00 PM", "Wed 4:00 PM", "Fri 4:00 PM"], about: "Concept-first coaching with weekly tests and doubt-clearing sessions." },
  { id: "aqua-club", name: "Aqua Swim Club", category: "Swimming", tags: "Learn to swim • Kids & adults", distance: 4.0, fee: 2200, rating: 4.4, time: "8:00 AM", seats: 6, match: 74, slots: ["Sat 8:00 AM", "Sun 8:00 AM"], about: "Certified lifeguard coaches in a clean, temperature-controlled pool." },
  { id: "strikers", name: "Strikers Football Club", category: "Sports", tags: "Football • Under-12 to Open", distance: 2.2, fee: 1000, rating: 4.6, time: "5:00 PM", seats: 10, match: 85, slots: ["Tue 5:00 PM", "Thu 5:00 PM", "Sat 4:00 PM"], about: "Turf training, friendly matches and local league participation." },
];

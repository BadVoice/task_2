export interface ITask {
  id: number;
  condition: string;
  text: string;
  image: string;
  correct_answer: string;
  answers: string[];
}

export class Todo {
  data: string;
  done: number;
  items: Todo[];
  id: number;
  constructor(data: string) {
    this.data = data;
    this.done = 0;
    this.items = [];
    this.id = +localStorage.getItem('id') + 1;
    localStorage.setItem('id', this.id + '');
  }
}


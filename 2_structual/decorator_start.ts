class Modal {
  open: boolean;

  constructor() {
    this.open = false;
  }

  show(content: string): void {
    console.log('content of the modal', content);
    this.open = true;
  }

  hide(): void {
    console.log('you hide me!');
    this.open = false;
  }
}

// todo: create a dialog modal that fire a window.modal
// todo: create a modal that logs when you open or hide
// todo: you can touch the Modal source code

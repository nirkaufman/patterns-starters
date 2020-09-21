//todo: text editor should support undo
class TextEditor {
  private _content: string = "";

  addContent(newContent: string) {
    this._content += " " + newContent;
  }

  highlight(word: string) {
    this._content = this._content.split(word).join(`<b>${word}</b>`);
  }

  render() {
    console.log(this._content);
  }
}

const editor = new TextEditor();

editor.addContent("some content");
editor.render();

editor.addContent("some more content");
editor.render();

editor.highlight("some");
editor.render();

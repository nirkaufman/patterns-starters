interface UIElement {
  addEventListener(eventName: string, callback: Function): void;
}

class DOMElement implements UIElement {
  addEventListener(eventName: string, callback: Function): void {
    console.log('not implemented');
  }
}

class MacOSNativeElement implements UIElement {
  addEventListener(eventName: string, callback: Function): void {
    console.log('not implemented');
  }
}

class AndroidUiElement {
   attachCallbackToEvent(callback: Function, eventName: string): void {
   console.log('not implemented');
  }
}

// client code
const domElement = new DOMElement();
const macOsNativeElement = new MacOSNativeElement();
const androidElement = new AndroidUiElement();

function callBack () {}

domElement.addEventListener('click', callBack);
macOsNativeElement.addEventListener('click', callBack);
// androidElement.addEventListener('click', callBack);

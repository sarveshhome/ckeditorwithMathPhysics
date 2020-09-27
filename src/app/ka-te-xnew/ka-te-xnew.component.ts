import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ka-te-xnew',
  templateUrl: './ka-te-xnew.component.html',
  styleUrls: ['./ka-te-xnew.component.css']
})
export class KaTeXNewComponent implements OnInit {

  // html: string = `
  //   <div>You can write html, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know. You also can write expressions in display mode as follows: $$\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$$. In first case you will need to use \\$expression\\$ and in the second one \\$\\$expression\\$\\$. To scape the \\$ symbol it's mandatory to write as follows: \\\\$</div><p>: <button>I'm a button</button></p>
  // `;
  html: string =`<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mroot><msqrt><mfrac><mstyle displaystyle="true"><mfrac bevelled="true"><mi>x</mi><mi>t</mi></mfrac></mstyle><mi>x</mi></mfrac></msqrt><mn>3</mn></mroot></math>Hello, world!</p>  `;
  constructor() { }

  ngOnInit() {
  }

}

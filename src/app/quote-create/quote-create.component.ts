import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.css']
})
export class QuoteCreateComponent implements OnInit {
  @Input() quotes;
  @Output() createQuoteEvent = new EventEmitter();

  newQuote = { body: '', author: '', rating: 0};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log('hit on onSubmit');
    console.log(formData);
    this.createQuoteEvent.emit(this.newQuote);
    console.log(this.newQuote);
    this.newQuote = { body: '', author: '', rating: 0};
    console.log(this.newQuote);
  } 

}

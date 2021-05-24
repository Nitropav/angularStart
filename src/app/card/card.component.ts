import {Component, Input, OnInit} from '@angular/core'
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() card: Card

  title = 'My Card Title'
  text = 'My simple text'

  textColor: string | undefined

  ngOnInit() {

  }

  changeTitle() {
    // @ts-ignore
    this.card.title = 'Title has been changed'
  }

  onInput(value: string) {
    this.title = value
  }

}

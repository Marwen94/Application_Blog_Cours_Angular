import {Component, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'root-component',
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.css'],
})

export class AppComponentComponent implements OnInit {

  current_date = new Date();

  posts = [
    {
      title: "Mon premier post",
      content: "Far concluded not his something extremity. Want four we face an he gate. On he of played he ladies answer little though nature. Blessing oh do pleasure as so formerly. Took four spot soon led size you. Outlived it received he material. Him yourself joy moderate off repeated laughter outweigh screened. ",
      loveIts: 0,
      created_at: this.current_date
    },
    {
      title: "Mon deuxiéme post",
      content: "Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot called. Set her half end girl rich met. Me allowance departure an curiosity ye. In no talking address excited it conduct. Husbands debating replying overcame blessing he it me to domestic. ",
      loveIts: 0,
      created_at: this.current_date
    },
    {
      title: "Mon troixiéme post",
      content: "On recommend tolerably my belonging or am. Mutual has cannot beauty indeed now sussex merely you. It possible no husbands jennings ye offended packages pleasant he. Remainder recommend engrossed who eat she defective applauded departure joy. Get dissimilar not introduced day her apartments. Fully as taste he mr do smile abode every. Luckily offered article led lasting country minutes nor old. Happen people things oh is oppose up parish effect. Law handsome old outweigh humoured far appetite. ",
      loveIts: 0,
      created_at: this.current_date
    },
  ];

  constructor() {}

  ngOnInit() {}
  }

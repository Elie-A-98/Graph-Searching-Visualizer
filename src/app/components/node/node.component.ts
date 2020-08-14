import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent implements OnInit {

	@Input()  posX: number;
	@Input()  posY: number;
	
	constructor(){}

  	ngOnInit() {}

}

import { Component, OnInit, Input } from '@angular/core';
import { Edge } from 'src/app/classes/edge';

@Component({
  selector: 'app-edge',
  templateUrl: './edge.component.html',
  styleUrls: ['./edge.component.scss'],
})
export class EdgeComponent implements OnInit {


	@Input() edgeProp: Edge;

	public posX: number;
	public posY: number;

	public length: number;
	public angle: number;

  	constructor() {
		
	}

  	ngOnInit() {
		this.posX = this.edgeProp.startNode.posX;
		this.posY = this.edgeProp.startNode.posY;

		this.length = this.edgeProp.GetLength();
		this.angle = this.edgeProp.angle;
	}

}

import { Component, OnInit, Input } from '@angular/core';
import { NodesManagerService } from 'src/app/Services/nodes-manager.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent implements OnInit {

	@Input() index: number;

	@Input()  posX: number;
	@Input()  posY: number;

	@Input() isClicked: boolean = false;

	@Input() color: string;
	@Input() infos: string [];

	constructor(public nodeManager: NodesManagerService){	}

	ngOnInit() {}
	  
	NodeClicked(): void {
		this.nodeManager.AddEdge (this.index);
	}

}

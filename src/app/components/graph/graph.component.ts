import { Component, OnInit } from '@angular/core';

//Components
import {NodeComponent} from '../node/node.component'

//Services
import { NodesManagerService } from 'src/app/Services/nodes-manager.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {

	constructor(public nodesManager: NodesManagerService) { }

	ngOnInit() {}
	  
	MouseClicked (event: MouseEvent) : void {
		this.nodesManager.AddNode(event.clientX, event.clientY);
	}

}

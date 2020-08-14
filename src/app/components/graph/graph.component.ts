import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

//Components
import {NodeComponent} from '../node/node.component'

//Services
import { NodesManagerService } from 'src/app/Services/nodes-manager.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit, AfterViewInit {

	@ViewChild('no', { static: true }) n: ElementRef;


	constructor(public nodesManager: NodesManagerService) { }

	ngOnInit() {}

	ngAfterViewInit() {
		// this.input is NOW valid !!
	}
	  
	MouseClicked (event: MouseEvent) : void {
		this.nodesManager.AddNode(event.clientX, event.clientY);
	}

	ButtonClicked(): void {
		this.n.nativeElement.innerHTML = "QWE";
		console.log("CLICKED");
	}

}

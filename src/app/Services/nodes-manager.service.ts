import { Injectable, Input } from '@angular/core';

//Classes
import { NodeComponent } from '../components/node/node.component';

@Injectable({
  providedIn: 'root'
})
export class NodesManagerService {

	public nodes: any [] = [] ;

	constructor() {}
	  
	AddNode (x: number, y: number): void {
		this.nodes.push ({posX: x ,posY: y});
	}

}

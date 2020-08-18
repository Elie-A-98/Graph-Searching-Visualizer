import { Component, Input } from '@angular/core';

//Services
import { NodesManagerService } from '../Services/nodes-manager.service';
import { SearchAlgorithmService } from '../Services/search-algorithm.service';
import { Nodee } from '../classes/nodee';
import { Edge } from '../classes/edge';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  	constructor(private nodesManager: NodesManagerService, private searchAlgorithm: SearchAlgorithmService) {}

	public SwitchClicked (): void {
		this.nodesManager.Switch();
	}

	public RunClicked(): void {
		this.searchAlgorithm.InitBFS (this.nodesManager.nodes, this.nodesManager.edges);
		this.searchAlgorithm.RunBFS();
	}

	public StepRightclicked(): void {
		this.searchAlgorithm.stepRight ();
	}

	public StepLeftclicked(): void {
		this.searchAlgorithm.stepLeft ();
	}

}

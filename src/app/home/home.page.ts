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

	private select_algorithm: HTMLSelectElement;

	public placing: string = "nodes";

  	constructor(private nodesManager: NodesManagerService, private searchAlgorithm: SearchAlgorithmService) {}

	public SwitchClicked (): void {
		this.nodesManager.Switch();
		if ( this.placing.localeCompare("nodes") == 0){
			this.placing = "edges";
		}else {
			this.placing = "nodes";
		}
	}

	public RunClicked(): void {
		this.select_algorithm = document.querySelector("[data-js='algorithm']");
		let algorithm: string = this.select_algorithm.value;

		this.searchAlgorithm.InitAlg (algorithm);
		this.searchAlgorithm.RunAlg();
	}

	public StepRightclicked(): void {
		this.searchAlgorithm.stepRight ();
	}

	public StepLeftclicked(): void {
		this.searchAlgorithm.stepLeft ();
	}

	public ResetClicked(): void {
		this.nodesManager.Reset ();
		this.searchAlgorithm.Reset ();
	}

	public VisualizeClicked(): void {
		this.searchAlgorithm.Visualize();
	}

	public StopClicked(): void {
		this.searchAlgorithm.Stop();
	}

}

import { Injectable } from '@angular/core';
import { BFS } from '../classes/bfs';
import { Nodee } from '../classes/nodee';
import { Edge } from '../classes/edge';
import { NodesManagerService } from './nodes-manager.service';
import { Step } from '../classes/step';
import { DFS } from '../classes/dfs';

@Injectable({
  providedIn: 'root'
})
export class SearchAlgorithmService {

	alg: any;

	steps: Step [];
	step_index : number ;

	animation_timeout: any;
	isRunningAnimation: boolean = false;

	public constructor(private nodesManager: NodesManagerService) {}

	public InitAlg (alg: string):void{
		if (alg.toLowerCase().localeCompare("bfs") == 0){
			this.alg = new BFS (this.nodesManager.nodes, this.nodesManager.edges);
		}else if (alg.toLowerCase().localeCompare("dfs") == 0){
			this.alg = new DFS (this.nodesManager.nodes, this.nodesManager.edges);
		}
	}

	public RunAlg(): void {
		this.alg.Run ();
		this.steps = this.alg.getSteps ();

		this.step_index = 0 ;

		this.nodesManager.infos = this.alg.infos;
	}

	//Automatically run the steps
	public Visualize (): void {
		if (this.step_index < this.steps.length){
			
			this.stepRight ();

			this.animation_timeout = setTimeout(() => {
				this.Visualize();
			}, 1000);
		}
	}

	public stepRight(): void {
		this.nodesManager.nodes = this.steps[this.step_index].nodes;
		this.step_index = Math.min (this.steps.length-1, this.step_index+1);
	}

	public stepLeft(): void {
		this.step_index = Math.max (0, this.step_index-1);
		this.nodesManager.nodes = this.steps[this.step_index].nodes;
	}

	public Stop(): void {
		clearTimeout(this.animation_timeout);
	}

	public Reset(): void{
		this.Stop();
		this.steps = [];
		this.step_index = 0;
	}
	
}

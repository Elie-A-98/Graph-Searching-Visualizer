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

	bfs: BFS;
	dfs: DFS;

	steps: Step [];
	step_index : number ;

  	public constructor(private nodesManager: NodesManagerService) {}

	public InitBFS (nodes: Nodee [], edges: Edge []):void{
		this.bfs = new BFS (nodes, edges);
	}
	public InitDFS (nodes: Nodee [], edges: Edge []):void{
		this.dfs = new DFS (nodes, edges);
	}

	public RunBFS(): void {
		this.bfs.Run ();
		this.steps = this.bfs.getSteps ();

		this.step_index = 0 ;

	}

	public RunDFS(): void {
		this.dfs.Run ();
		this.steps = this.dfs.getSteps ();

		this.step_index = 0 ;
	}

	//Automatically run the steps
	public RunSteps (): void {
		for ( let i = 0 ; i < this.steps.length; i ++ ){
			setTimeout(() => {
				this.nodesManager.nodes = this.steps[i].nodes;
			}, i*1000);

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
	
}

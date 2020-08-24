import { Injectable, Input } from '@angular/core';

//Classes
import { NodeComponent } from '../components/node/node.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { createNgModule } from '@angular/compiler/src/core';
import { Edge } from '../classes/edge';
import { Nodee } from '../classes/nodee';

@Injectable({
  providedIn: 'root'
})
export class NodesManagerService {

	public nodes: Nodee [] = [] ;
	public edges: Edge [] = [] ;

	public edgeStarted : boolean = false ;
	private edgeStart: Nodee;
	private edgeEnd : Nodee;

	private isNodes: boolean = true;

	public infos: any [] = [] ;

	constructor() {}
	  
	AddNode (x: number, y: number): void {
		if (!this.isNodes) return ;
		
		this.nodes.push (new Nodee (this.nodes.length, x, y));
	}

	StartEdge (node_index: number): void{
		this.edgeStart = this.nodes[node_index];
		this.edgeStart.isClicked = true;

		this.edgeStarted = true ;
	}

	EndEdge (node_index: number): void{
		this.edgeEnd = this.nodes[node_index];
		this.edgeStart.isClicked = true;

		this.edgeStarted = false ;
	}

	MakeEdge ():void {
		this.edges.push (new Edge(this.edges.length, this.edgeStart, this.edgeEnd));
		
		this.edgeStart.isClicked = false;
		this.edgeEnd.isClicked = false;
	}

	AddEdge (node_index: number): void {

		if (!this.edgeStarted){

			this.StartEdge (node_index);

		}else {

			this.EndEdge(node_index);
			this.MakeEdge();

		}

	}

	Switch (): void {
		this.isNodes = !this.isNodes;
	}

	public Reset(): void{
		this.nodes = [] ;
		this.edges = [] ;

		this.infos = [];
	}

}

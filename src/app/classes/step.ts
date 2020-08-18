import { Nodee } from './nodee';
import { Edge } from './edge';

export class Step {

	public index: number;
	public msg: string;

	public nodes: Nodee [];
	public edges: Edge [];

	constructor (index: number, nodes: Nodee [], edges: Edge []){
		this. index = index;
		this.nodes = nodes;
		this.edges = edges;
	}

	public setMessage (msg: string): void {
		this.msg = msg;
	}

}

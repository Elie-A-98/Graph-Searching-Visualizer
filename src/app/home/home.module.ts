import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { GraphComponent } from '../components/graph/graph.component';
import { NodeComponent } from '../components/node/node.component';
import { EdgeComponent } from '../components/edge/edge.component';
import { TutorialComponent } from '../components/tutorial/tutorial.component';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HomePageRoutingModule
  ],
  declarations: [HomePage,
	GraphComponent,
	NodeComponent,
	EdgeComponent,
	TutorialComponent
	]
})
export class HomePageModule {}

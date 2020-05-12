import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
import { HomeComponent } from '../pages/home/home.component';
import { FooterTabsComponent } from '../pages/footer-tabs/footer-tabs.component';
import { InboxComponent } from '../pages/inbox/inbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage,HomeComponent,FooterTabsComponent,InboxComponent]
})
export class FolderPageModule {}

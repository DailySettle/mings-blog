import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {MaterialSharedModule} from './material-shared.module';
import {LearnAngularComponent} from './learn-angular/learn-angular.component';
import {LearnDockerComponent} from './learn-docker/learn-docker.component';
import {AngularComponent} from './learn-angular/angular/angular.component';
import {MarkdownModule} from 'ngx-markdown';
import {CardComponent} from './card/card.component';
import { DockerComponent } from './learn-docker/docker/docker.component';
import { LearnLinuxComponent } from './learn-linux/learn-linux.component';
import { BashComponent } from './learn-linux/bash/bash.component';
import { SshComponent } from './learn-linux/ssh/ssh.component';
import { LearnSpringbootComponent } from './learn-springboot/learn-springboot.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LearnAngularComponent,
    LearnDockerComponent,
    AngularComponent,
    CardComponent,
    DockerComponent,
    LearnLinuxComponent,
    BashComponent,
    SshComponent,
    LearnSpringbootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
